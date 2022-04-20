const express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var MongoClient = require("mongodb").MongoClient;
var fact = "mongodb://0.0.0.0:27017/";
// var bcrypt = require("bcrypt");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(8000, () => {
  console.log("TEST express");
});

app.post("/api/", (req, res, next) => {
  console.log(req.body);
  console.log("This is trigged!");
  //res.header("Access-Control-Allow-Headers", "*");
  res.status(200).send("ASDASAADSDSD");
});

var db;

MongoClient.connect(fact)
  .then((dbo) => {
    return Promise.resolve(dbo.db("MyDatabase"));
  })
  .then((client) => {
    db = client;
  })
  .catch((err) => {
    console.log(err);
  });

app.post("/api/login", (req, res, next) => {
  console.log("login trigged");
  var temp = req.body;
  let temp_string = [];

  for (let [key, value] of Object.entries(temp)) {
    temp_string.push(key);
  }

  let TargetUsername, TargetPassword;

  for (let [key, value] of Object.entries(JSON.parse(temp_string))) {
    if (key === "username") {
      TargetUsername = value;
    }
    if (key === "password") {
      TargetPassword = value;
    }
  }

  db.collection("test").findOne(
    { name: `${TargetUsername}` },
    function (err, result) {
      if (err) throw err;
      if (result) {
        console.log(result.password);
        console.log(TargetPassword);
        if (TargetPassword == result.password) {
          console.log(`user password matched!`);
          res.header("Access-Control-Allow-Origin", "http://localhost:80");
          res.header("Access-Control-Allow-Headers", "*");
          res.send({
            isSucceed: true,
            message: "Logged in!!",
            username: `${TargetUsername}`,
          });
        } else {
          res.header("Access-Control-Allow-Origin", "http://localhost:80");
          res.header("Access-Control-Allow-Headers", "*");
          console.log(`password in failed!`);
          res.send({ isSucceed: false, message: "Password is wrong!!" });
        }
      } else {
        res.header("Access-Control-Allow-Origin", "http://localhost:80");
        res.header("Access-Control-Allow-Headers", "*");
        console.log("USER NAME NOT MATCHED");
        res.send({ isSucceed: false, message: "Can not find the user!" });
      }
    }
  );
});

var delete_name = null;

app.post("/api/signup", (req, res, next) => {
  console.log("signup trigged");
  var temp = req.body;
  let temp_string = [];
  console.log(temp);
  for (let [key, value] of Object.entries(temp)) {
    temp_string.push(key);
  }

  let TargetUsername, TargetPassword, Target_confirmpassword;

  for (let [key, value] of Object.entries(JSON.parse(temp_string))) {
    if (key === "username") {
      TargetUsername = value;
    }
    if (key === "password") {
      TargetPassword = value;
    }
    if (key === "confirmPassword") {
      Target_confirmpassword = value;
    }
  }

  if (TargetPassword != Target_confirmpassword) {
    res.header("Access-Control-Allow-Origin", "http://localhost:80");
    res.header("Access-Control-Allow-Headers", "*");
    res.status(200).send({
      isSucceed: "false",
      message: "Password and confirmPassword does not match!!",
    });
  } else {
    db.collection("test").findOne(
      { name: `${TargetUsername}` },
      function (err, result) {
        console.log(result);
        if (err) throw err;
        if (result) {
          console.log("User already exists");
          res.header("Access-Control-Allow-Origin", "http://localhost:80");
          res.header("Access-Control-Allow-Headers", "*");
          res
            .status(200)
            .send({ isSucceed: "false", message: "User already exists" });
        } else {
          // hash the password
          console.log("API triggered");
          // bcrypt.hash(TargetPassword, 10).then((result) => {
          console.log(result);
          db.collection("test").insertOne(
            {
              name: `${TargetUsername}`,
              password: `${TargetPassword}`,
            },
            (err, result) => {
              if (err) throw err;
              if (result) {
                console.log(result);
                console.log(`User signed up with name:${TargetUsername}`);
                delete_name = TargetUsername;
                res.header(
                  "Access-Control-Allow-Origin",
                  "http://localhost:3000"
                );
                res.header("Access-Control-Allow-Headers", "*");
                res.status(200).send({
                  isSucceed: "true",
                  message: "Signed up successfully!!",
                });
              }
            }
          );
          // });
        }
      }
    );
  }
});

app.post("/api/FoodRecord", (req, res, next) => {
  console.log("[1] Inside food record api - req.body: ", req.body);

  if (!req) {
    err("Invalid input");
  } else {
    console.log("Checkpoint 1");
    db.collection("FoodHistory").findOne(
      {
        name: `${req.body.name}`,
        date: `${req.body.date}`,
      },
      //if not -> no result and create new one
      //if find -> result need to update
      function (err, result) {
        //having err
        if (err) throw new Error(err);
        console.log("[2] has result ? if null then no, else yes: ", result);
        //found result -> need to update

        // update document
        if (result) {
          // console.log("[Document exists - update the document]");
          // console.log("\n----- Destructure the req.body object -----");
          // destructuring req.body object
          let name, date, mealType, veggie, fruits, grains, protein;
          ({ name, date, mealType, veggie, fruits, grains, protein } =
            req.body);
          // console.log("name: ", name);
          // console.log("date: ", date);
          // console.log("mealType: ", mealType);
          // console.log("veggie: ", veggie);
          // console.log("fruits: ", fruits);
          // console.log("grains: ", grains);
          // console.log("protein: ", protein);
          // console.log("-------------------------------------------");
          const targetedMealDocument = result[mealType.toLowerCase()];
          // console.log(
          //   "targeted meal to update in document: ",
          //   targetedMealDocument
          // );

          // for veggie
          for (let veg of veggie) {
            // if entry already exist -> update the entry amount
            // console.log("Doing ", veg.name);
            const index = targetedMealDocument.veggie.findIndex(
              (item) => item.name === veg.name
            );
            // console.log("Index: ", index);
            if (index != -1)
              targetedMealDocument.veggie[index].amount = veg.amount;
            else targetedMealDocument.veggie.push(veg);
          }

          // for fruits
          for (let fruit of fruits) {
            const index = targetedMealDocument.fruits.findIndex(
              (item) => item.name === fruit.name
            );
            if (index != -1) {
              targetedMealDocument.fruits[index].amount = fruit.amount;
            } else targetedMealDocument.fruits.push(fruit);
          }

          // for grains
          for (let grain of grains) {
            // if entry already exist -> update the entry amount
            const index = targetedMealDocument.grains.findIndex(
              (item) => item.name === grain.name
            );
            if (index != -1)
              targetedMealDocument.grains[index].amount = grain.amount;
            else targetedMealDocument.grains.push(grain);
          }

          // for protein
          for (let pro of protein) {
            // if entry already exist -> update the entry amount
            const index = targetedMealDocument.protein.findIndex(
              (item) => item.name === pro.name
            );
            if (index != -1)
              targetedMealDocument.protein[index].amount = pro.amount;
            else targetedMealDocument.protein.push(pro);
          }

          db.collection("FoodHistory")
            .updateOne(
              {
                name: `${req.body.name}`,
                date: `${req.body.date}`,
              },
              { $set: { [mealType.toLowerCase()]: targetedMealDocument } },
              { upsert: true }
            )
            .then(
              (res) => console.log(`Updated document`),
              (err) => console.error(`Something went wrong: ${err}`)
            );
        }

        // create document
        else {
          let temp_object = {
            name: `${req.body.name}`,
            date: `${req.body.date}`,
            breakfast: {
              mealType: "breakfast",
              veggie: [],
              fruits: [],
              grains: [],
              protein: [],
            },
            lunch: {
              mealType: "lunch",
              veggie: [],
              fruits: [],
              grains: [],
              protein: [],
            },
            dinner: {
              mealType: "dinner",
              veggie: [],
              fruits: [],
              grains: [],
              protein: [],
            },
          };

          // mealType
          // name
          // date
          // veggie array
          // fruits array
          // grains
          // protien
          let meal = req.body.mealType.toUpperCase();
          let temp = meal;
          console.log(meal);
          switch (meal) {
            case "BREAKFAST":
              {
                for (let i = 0; i < req.body.veggie.length; i++) {
                  temp_object.breakfast.veggie.push(req.body.veggie[i]);
                }
                for (let i = 0; i < req.body.fruits.length; i++) {
                  temp_object.breakfast.fruits.push(req.body.fruits[i]);
                }
                for (let i = 0; i < req.body.protein.length; i++) {
                  temp_object.breakfast.protein.push(req.body.protein[i]);
                }
                for (let i = 0; i < req.body.grains.length; i++) {
                  temp_object.breakfast.grains.push(req.body.grains[i]);
                }
              }
              break;
            case "LUNCH":
              {
                for (let i = 0; i < req.body.veggie.length; i++) {
                  temp_object.lunch.veggie.push(req.body.veggie[i]);
                }
                for (let i = 0; i < req.body.fruits.length; i++) {
                  temp_object.lunch.fruits.push(req.body.fruits[i]);
                }
                for (let i = 0; i < req.body.protein.length; i++) {
                  temp_object.lunch.protein.push(req.body.protein[i]);
                }
                for (let i = 0; i < req.body.grains.length; i++) {
                  temp_object.lunch.grains.push(req.body.grains[i]);
                }
              }
              break;
            case "DINNER":
              {
                for (let i = 0; i < req.body.veggie.length; i++) {
                  temp_object.dinner.veggie.push(req.body.veggie[i]);
                }
                for (let i = 0; i < req.body.fruits.length; i++) {
                  temp_object.dinner.fruits.push(req.body.fruits[i]);
                }
                for (let i = 0; i < req.body.protein.length; i++) {
                  temp_object.dinner.protein.push(req.body.protein[i]);
                }
                for (let i = 0; i < req.body.grains.length; i++) {
                  temp_object.dinner.grains.push(req.body.grains[i]);
                }
              }
              break;
          }
          // if (temp) {
          //     console.log(temp_object.breakfast)
          //     for (let i = 0; i < req.body.veggie.length; i++) {
          //         temp_object.temp.veggie.push(req.body.veggie[i]);
          //     }
          //     for (let i = 0; i < req.body.fruits.length; i++) {
          //         temp_object.temp.fruits.push(req.body.veggie[i]);
          //     }
          //     for (let i = 0; i < req.body.protein.length; i++) {
          //         temp_object.temp.protein.push(req.body.veggie[i]);
          //     }
          //     for (let i = 0; i < req.body.grains.length; i++) {
          //         temp_object.temp.grains.push(req.body.veggie[i]);
          //     }
          // }

          // data -> breakfast -- > 4 different objects

          // db.collection("test").findOne({ name: `${req.body.name}`,date:`${req.body.date}` }\
          db.collection("FoodHistory").insertOne(temp_object, (err, result) => {
            if (err) throw err;
            if (result) {
              console.log(result);
              console.log(
                `User Data Inserted with name and date:${temp_object.name} and ${temp_object.date}`
              );

              // res.header("Access-Control-Allow-Origin", "http://localhost:3000");
              // res.header("Access-Control-Allow-Headers", "*");
              // res.status(200).send({ "isSucceed": "true", "message": " Data Inserted up successfully!!" });
            }
          });
          res.header("Access-Control-Allow-Headers", "*");
          res.status(200).send({
            isSucceed: "true",
            message: "Data Record Inserted successfully!!",
          });

          /////////////////////////////////
        }
      }
    );
  }
});

app.post("/api/FoodHistory", (req, res, next) => {
  console.log(req.body);
  console.log("FoodHistory trigger");
  // console.log(req.body.name)
  // console.log(req.body.date)

  //
  // db.collection("FoodHistory").findOne(
  //     {
  //       name: `${req.body.name}`,
  //       date: `${req.body.date}`,
  //     },
  //     function (err, result) {
  //       if (err) throw new Error(err);

  db.collection("FoodHistory")
    .findOne({ name: `${req.body.name}`, date: `${req.body.date}` })
    .then((res1) => {
      console.log(res1);
      res.header("Access-Control-Allow-Headers", "*");
      res.status(200).send({
        res1,
      });
    })
    .catch((err) => {
      console.log("Something goes wrong ");
      console.log(err);
    });
});
