const express = require('express')
var mongoose = require('mongoose')
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var fact = "mongodb://localhost:27017/";
var bcrypt = require('bcrypt');

const app = express()
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())

app.listen(8000, () => {
    console.log("TEST express")
})

app.post("/api/", (req, res, next) => {
    console.log(req.body);
    console.log("This is trigged!");
    //res.header("Access-Control-Allow-Headers", "*");
    res.status(200).send("ASDASAADSDSD");

})

var db;

MongoClient.connect(fact)
    .then((dbo) => {
        return Promise.resolve(dbo.db('MyDatabase'))
    })
    .then((client) => {
        db = client;
    }).catch((err) => {
    console.log(err);
})

app.post('/api/login', (req, res, next) => {
    console.log("login trigged");
    var temp = req.body;
    let temp_string = [];

    for (let [key, value] of Object.entries(temp)) {
        temp_string.push(key)
    }

    let TargetUsername, TargetPassword;

    for (let [key, value] of Object.entries(JSON.parse(temp_string))) {
        if (key === 'username') {
            TargetUsername = value;
        }
        if (key === 'password') {
            TargetPassword = value;
        }
    }

    db.collection("test").findOne({name: `${TargetUsername}`}, function (err, result) {

        if (err) throw err;
        if (result) {
            if (bcrypt.compare(TargetPassword, result.password)) {
                console.log(`user password matched!`);
                res.header("Access-Control-Allow-Origin", "http://localhost:80");
                res.header("Access-Control-Allow-Headers", "*");
                res.send({"isSucceed": true, "message": "Logged in!!", "username": `${TargetUsername}`});
            } else {
                res.header("Access-Control-Allow-Origin", "http://localhost:80");
                res.header("Access-Control-Allow-Headers", "*");
                console.log(`password in failed!`);
                res.send({"isSucceed": false, "message": "Password is wrong!!"});

            }

        } else {
            res.header("Access-Control-Allow-Origin", "http://localhost:80");
            res.header("Access-Control-Allow-Headers", "*");
            console.log('USER NAME NOT MATCHED')
            res.send({"isSucceed": false, "message": "Can not find the user!"});
        }
    })
})


var delete_name = null;


app.post('/api/signup', (req, res, next) => {
    console.log("signup trigged");
    var temp = req.body;
    let temp_string = [];
    console.log(temp);
    for (let [key, value] of Object.entries(temp)) {
        temp_string.push(key)
    }

    let TargetUsername, TargetPassword, Target_confirmpassword;

    for (let [key, value] of Object.entries(JSON.parse(temp_string))) {
        if (key === 'username') {
            TargetUsername = value;
        }
        if (key === 'password') {
            TargetPassword = value;
        }
        if (key === 'confirmPassword') {
            Target_confirmpassword = value;
        }
    }

    if ((TargetPassword != Target_confirmpassword)) {
        res.header("Access-Control-Allow-Origin", "http://localhost:80");
        res.header("Access-Control-Allow-Headers", "*");
        res.status(200).send({"isSucceed": "false", "message": "Password and confirmPassword does not match!!"});

    } else {


        db.collection("test").findOne({name: `${TargetUsername}`}, function (err, result) {
            console.log(result);
            if (err) throw err;
            if (result) {
                console.log('User already exists');
                res.header("Access-Control-Allow-Origin", "http://localhost:80");
                res.header("Access-Control-Allow-Headers", "*");
                res.status(200).send({"isSucceed": "false", "message": "User already exists"});


            } else {
                // hash the password
                console.log("API triggered")
                bcrypt.hash(TargetPassword, 10)
                    .then((result) => {
                        console.log(result)
                        db.collection('test').insertOne({
                            "name": `${TargetUsername}`,
                            "password": `${result}`
                        }, (err, result) => {
                            if (err) throw err;
                            if (result) {
                                console.log(result);
                                console.log(`User signed up with name:${TargetUsername}`)
                                delete_name = TargetUsername;
                                res.header("Access-Control-Allow-Origin", "http://localhost:3000");
                                res.header("Access-Control-Allow-Headers", "*");
                                res.status(200).send({"isSucceed": "true", "message": "Signed up successfully!!"});

                            }
                        })
                    });


            }
        })
    }
})


app.post('/api/FoodRecord', (req, res, next) => {
    console.log("trigged")

    if (!req) {
        err('Invalid input');
    } else {
        console.log("Checkpoint 1")
        db.collection("FoodHistory").findOne({
            name: `${req.body.name}`,
            date: `${req.body.date}`
        }, function (err, result) {
            if (err)
                throw new Error(err);

            if (result) {
                //Update and cry later : )
                // mealType
                // name
                // date
                // veggie array
                // fruits array
                // grains
                // protien


                let old_result = result;

                let temp_val = {
                    "name": `${req.body.name}`,
                    "date": `${req.body.date}`,
                    "breakfast": {
                        "veggie": [],
                        "fruits": [],
                        "grains": [],
                        "protein": [],
                    },
                    "lunch": {
                        "veggie": [],
                        "fruits": [],
                        "grains": [],
                        "protein": [],
                    },
                    "dinner": {
                        "veggie": [],
                        "fruits": [],
                        "grains": [],
                        "protein": [],
                    }

                }
                temp_val.breakfast.veggie = JSON.parse(JSON.stringify(result.breakfast.veggie));
                temp_val.breakfast.fruits = JSON.parse(JSON.stringify(result.breakfast.fruits));
                temp_val.breakfast.grains = JSON.parse(JSON.stringify(result.breakfast.grains));
                temp_val.breakfast.protein = JSON.parse(JSON.stringify(result.breakfast.protein));

                temp_val.lunch.veggie = JSON.parse(JSON.stringify(result.lunch.veggie));
                temp_val.lunch.fruits = JSON.parse(JSON.stringify(result.lunch.fruits));
                temp_val.lunch.grains = JSON.parse(JSON.stringify(result.lunch.grains));
                temp_val.lunch.protein = JSON.parse(JSON.stringify(result.lunch.protein));


                temp_val.dinner.veggie = JSON.parse(JSON.stringify(result.dinner.veggie));
                temp_val.dinner.fruits = JSON.parse(JSON.stringify(result.dinner.fruits));
                temp_val.dinner.grains = JSON.parse(JSON.stringify(result.dinner.grains));
                temp_val.dinner.protein = JSON.parse(JSON.stringify(result.dinner.protein));


                let old_veggie_container = [];
                let new_veggie_container = [];
                let old_fruit_container = [];
                let new_fruit_container = [];
                let old_grain_container = [];
                let new_grain_container = [];
                let old_protein_container = [];
                let new_protein_container = [];
                switch (req.body.mealType.toUpperCase()) {

                    case "BREAKFAST": {


                        // sorting and updating the new veggie data
                        for (let i = 0; i < temp_val.breakfast.veggie.length; i++) {
                            let [key] = Object.entries(temp_val.breakfast.veggie[i])
                            old_veggie_container.push(key[0]);
                        }

                        for (let i = 0; i < req.body.veggie.length; i++) {
                            let [key] = Object.entries(req.body.veggie[i]);
                            if (old_veggie_container.length !== 0 && old_veggie_container.includes(key[0])) {

                                let index = old_veggie_container.indexOf(key[0]);
                                old_veggie_container.splice(index, 1);
                                // old_veggie_container.remove(key[0]);
                            }
                            new_veggie_container.push(key);

                        }

                        for (let i = 0; i < temp_val.breakfast.veggie.length; i++) {
                            let [key] = Object.entries(temp_val.breakfast.veggie[i])
                            if (old_veggie_container.length !== 0 && old_veggie_container.includes(key[0])) {
                                new_veggie_container.push(key);
                            }
                        }

                        // sorting and updating the new fruits data
                        for (let i = 0; i < temp_val.breakfast.fruits.length; i++) {
                            let [key] = Object.entries(temp_val.breakfast.fruits[i])
                            old_fruit_container.push(key[0]);
                        }

                        for (let i = 0; i < req.body.fruits.length; i++) {
                            let [key] = Object.entries(req.body.fruits[i]);
                            if (old_fruit_container.length !== 0 && old_fruit_container.includes(key[0])) {

                                let index = old_fruit_container.indexOf(key[0]);
                                old_fruit_container.splice(index, 1);
                                // old_veggie_container.remove(key[0]);
                            }
                            new_fruit_container.push(key);

                        }

                        for (let i = 0; i < temp_val.breakfast.fruits.length; i++) {
                            let [key] = Object.entries(temp_val.breakfast.fruits[i])
                            if (old_fruit_container.length !== 0 && old_fruit_container.includes(key[0])) {
                                new_fruit_container.push(key);
                            }
                        }


                        // sorting and updating the new grains data
                        for (let i = 0; i < temp_val.breakfast.grains.length; i++) {
                            let [key] = Object.entries(temp_val.breakfast.grains[i])
                            old_grain_container.push(key[0]);
                        }

                        for (let i = 0; i < req.body.grains.length; i++) {
                            let [key] = Object.entries(req.body.grains[i]);
                            if (old_grain_container.length !== 0 && old_grain_container.includes(key[0])) {

                                let index = old_grain_container.indexOf(key[0]);
                                old_grain_container.splice(index, 1);

                            }
                            new_grain_container.push(key);

                        }

                        for (let i = 0; i < temp_val.breakfast.grains.length; i++) {
                            let [key] = Object.entries(temp_val.breakfast.grains[i])
                            if (old_grain_container.length !== 0 && old_grain_container.includes(key[0])) {
                                new_grain_container.push(key);
                            }
                        }

                        // sorting and updating the new pr- data


                        for (let i = 0; i < temp_val.breakfast.protein.length; i++) {
                            let [key] = Object.entries(temp_val.breakfast.protein[i])
                            old_protein_container.push(key[0]);
                        }

                        for (let i = 0; i < req.body.protein.length; i++) {
                            let [key] = Object.entries(req.body.protein[i]);
                            if (old_protein_container.length !== 0 && old_protein_container.includes(key[0])) {

                                let index = old_protein_container.indexOf(key[0]);
                                old_protein_container.splice(index, 1);

                            }
                            new_protein_container.push(key);

                        }

                        for (let i = 0; i < temp_val.breakfast.protein.length; i++) {
                            let [key] = Object.entries(temp_val.breakfast.protein[i])
                            if (old_protein_container.length !== 0 && old_protein_container.includes(key[0])) {
                                new_protein_container.push(key);
                            }
                        }


                        temp_val.breakfast.veggie = JSON.parse(JSON.stringify(new_veggie_container));
                        temp_val.breakfast.fruits = JSON.parse(JSON.stringify(new_fruit_container));
                        temp_val.breakfast.grains = JSON.parse(JSON.stringify(new_grain_container));
                        temp_val.breakfast.protein = JSON.parse(JSON.stringify(new_protein_container));

                    }
                        break;
                    case "LUNCH": {


                        // sorting and updating the new veggie data
                        for (let i = 0; i < temp_val.lunch.veggie.length; i++) {
                            let [key] = Object.entries(temp_val.lunch.veggie[i])
                            old_veggie_container.push(key[0]);
                        }

                        for (let i = 0; i < req.body.veggie.length; i++) {
                            let [key] = Object.entries(req.body.veggie[i]);
                            if (old_veggie_container.length !== 0 && old_veggie_container.includes(key[0])) {

                                let index = old_veggie_container.indexOf(key[0]);
                                old_veggie_container.splice(index, 1);
                                // old_veggie_container.remove(key[0]);
                            }
                            new_veggie_container.push(key);

                        }

                        for (let i = 0; i < temp_val.lunch.veggie.length; i++) {
                            let [key] = Object.entries(temp_val.lunch.veggie[i])
                            if (old_veggie_container.length !== 0 && old_veggie_container.includes(key[0])) {
                                new_veggie_container.push(key);
                            }
                        }

                        // sorting and updating the new fruits data
                        for (let i = 0; i < temp_val.lunch.fruits.length; i++) {
                            let [key] = Object.entries(temp_val.lunch.fruits[i])
                            old_fruit_container.push(key[0]);
                        }

                        for (let i = 0; i < req.body.fruits.length; i++) {
                            let [key] = Object.entries(req.body.fruits[i]);
                            if (old_fruit_container.length !== 0 && old_fruit_container.includes(key[0])) {

                                let index = old_fruit_container.indexOf(key[0]);
                                old_fruit_container.splice(index, 1);
                                // old_veggie_container.remove(key[0]);
                            }
                            new_fruit_container.push(key);

                        }

                        for (let i = 0; i < temp_val.lunch.fruits.length; i++) {
                            let [key] = Object.entries(temp_val.lunch.fruits[i])
                            if (old_fruit_container.length !== 0 && old_fruit_container.includes(key[0])) {
                                new_fruit_container.push(key);
                            }
                        }


                        // sorting and updating the new grains data
                        for (let i = 0; i < temp_val.lunch.grains.length; i++) {
                            let [key] = Object.entries(temp_val.lunch.grains[i])
                            old_grain_container.push(key[0]);
                        }

                        for (let i = 0; i < req.body.grains.length; i++) {
                            let [key] = Object.entries(req.body.grains[i]);
                            if (old_grain_container.length !== 0 && old_grain_container.includes(key[0])) {

                                let index = old_grain_container.indexOf(key[0]);
                                old_grain_container.splice(index, 1);

                            }
                            new_grain_container.push(key);

                        }

                        for (let i = 0; i < temp_val.lunch.grains.length; i++) {
                            let [key] = Object.entries(temp_val.lunch.grains[i])
                            if (old_grain_container.length !== 0 && old_grain_container.includes(key[0])) {
                                new_grain_container.push(key);
                            }
                        }

                        // sorting and updating the new pr- data


                        for (let i = 0; i < temp_val.lunch.protein.length; i++) {
                            let [key] = Object.entries(temp_val.lunch.protein[i])
                            old_protein_container.push(key[0]);
                        }

                        for (let i = 0; i < req.body.protein.length; i++) {
                            let [key] = Object.entries(req.body.protein[i]);
                            if (old_protein_container.length !== 0 && old_protein_container.includes(key[0])) {

                                let index = old_protein_container.indexOf(key[0]);
                                old_protein_container.splice(index, 1);

                            }
                            new_protein_container.push(key);

                        }

                        for (let i = 0; i < temp_val.lunch.protein.length; i++) {
                            let [key] = Object.entries(temp_val.lunch.protein[i])
                            if (old_protein_container.length !== 0 && old_protein_container.includes(key[0])) {
                                new_protein_container.push(key);
                            }
                        }


                        temp_val.lunch.veggie = JSON.parse(JSON.stringify(new_veggie_container));
                        temp_val.lunch.fruits = JSON.parse(JSON.stringify(new_fruit_container));
                        temp_val.lunch.grains = JSON.parse(JSON.stringify(new_grain_container));
                        temp_val.lunch.protein = JSON.parse(JSON.stringify(new_protein_container));


                    }
                        break;
                    case "DINNER": {


                        // sorting and updating the new veggie data
                        for (let i = 0; i < temp_val.dinner.veggie.length; i++) {
                            let [key] = Object.entries(temp_val.dinner.veggie[i])
                            old_veggie_container.push(key[0]);
                        }

                        for (let i = 0; i < req.body.veggie.length; i++) {
                            let [key] = Object.entries(req.body.veggie[i]);
                            if (old_veggie_container.length !== 0 && old_veggie_container.includes(key[0])) {

                                let index = old_veggie_container.indexOf(key[0]);
                                old_veggie_container.splice(index, 1);
                                // old_veggie_container.remove(key[0]);
                            }
                            new_veggie_container.push(key);

                        }

                        for (let i = 0; i < temp_val.dinner.veggie.length; i++) {
                            let [key] = Object.entries(temp_val.dinner.veggie[i])
                            if (old_veggie_container.length !== 0 && old_veggie_container.includes(key[0])) {
                                new_veggie_container.push(key);
                            }
                        }

                        // sorting and updating the new fruits data
                        for (let i = 0; i < temp_val.dinner.fruits.length; i++) {
                            let [key] = Object.entries(temp_val.dinner.fruits[i])
                            old_fruit_container.push(key[0]);
                        }

                        for (let i = 0; i < req.body.fruits.length; i++) {
                            let [key] = Object.entries(req.body.fruits[i]);
                            if (old_fruit_container.length !== 0 && old_fruit_container.includes(key[0])) {

                                let index = old_fruit_container.indexOf(key[0]);
                                old_fruit_container.splice(index, 1);
                                // old_veggie_container.remove(key[0]);
                            }
                            new_fruit_container.push(key);

                        }

                        for (let i = 0; i < temp_val.dinner.fruits.length; i++) {
                            let [key] = Object.entries(temp_val.dinner.fruits[i])
                            if (old_fruit_container.length !== 0 && old_fruit_container.includes(key[0])) {
                                new_fruit_container.push(key);
                            }
                        }


                        // sorting and updating the new grains data
                        for (let i = 0; i < temp_val.dinner.grains.length; i++) {
                            let [key] = Object.entries(temp_val.dinner.grains[i])
                            old_grain_container.push(key[0]);
                        }

                        for (let i = 0; i < req.body.grains.length; i++) {
                            let [key] = Object.entries(req.body.grains[i]);
                            if (old_grain_container.length !== 0 && old_grain_container.includes(key[0])) {

                                let index = old_grain_container.indexOf(key[0]);
                                old_grain_container.splice(index, 1);

                            }
                            new_grain_container.push(key);

                        }

                        for (let i = 0; i < temp_val.dinner.grains.length; i++) {
                            let [key] = Object.entries(temp_val.dinner.grains[i])
                            if (old_grain_container.length !== 0 && old_grain_container.includes(key[0])) {
                                new_grain_container.push(key);
                            }
                        }

                        // sorting and updating the new pr- data


                        for (let i = 0; i < temp_val.dinner.protein.length; i++) {
                            let [key] = Object.entries(temp_val.dinner.protein[i])
                            old_protein_container.push(key[0]);
                        }

                        for (let i = 0; i < req.body.protein.length; i++) {
                            let [key] = Object.entries(req.body.protein[i]);
                            if (old_protein_container.length !== 0 && old_protein_container.includes(key[0])) {

                                let index = old_protein_container.indexOf(key[0]);
                                old_protein_container.splice(index, 1);

                            }
                            new_protein_container.push(key);

                        }

                        for (let i = 0; i < temp_val.dinner.protein.length; i++) {
                            let [key] = Object.entries(temp_val.dinner.protein[i])
                            if (old_protein_container.length !== 0 && old_protein_container.includes(key[0])) {
                                new_protein_container.push(key);
                            }
                        }


                        temp_val.dinner.veggie = JSON.parse(JSON.stringify(new_veggie_container));
                        temp_val.dinner.fruits = JSON.parse(JSON.stringify(new_fruit_container));
                        temp_val.dinner.grains = JSON.parse(JSON.stringify(new_grain_container));
                        temp_val.dinner.protein = JSON.parse(JSON.stringify(new_protein_container));


                    }
                        break;

                }
                console.log(temp_val.breakfast)

                db.collection("FoodHistory").deleteOne(old_result, (err, result) => {
                    if (err)
                        console.log("Error in deleting the old doc");

                    db.collection("FoodHistory").insertOne(temp_val, (err, result) => {
                        if (err)
                            console.log("Error in updating the new doc");
                        console.log("Sucessfully updated the new data!");
                        console.log(result)
                    })

                })
                res.send("Record Existed and updated!");


            } else {


                let temp_object = {
                    "name": `${req.body.name}`,
                    "date": `${req.body.date}`,
                    "breakfast": {
                        "veggie": [],
                        "fruits": [],
                        "grains": [],
                        "protein": [],
                    },
                    "lunch": {
                        "veggie": [],
                        "fruits": [],
                        "grains": [],
                        "protein": [],
                    },
                    "dinner": {
                        "veggie": [],
                        "fruits": [],
                        "grains": [],
                        "protein": [],
                    }

                }

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
                    case "BREAKFAST": {
                        for (let i = 0; i < req.body.veggie.length; i++) {
                            temp_object.breakfast.veggie.push(req.body.veggie[i]);
                        }
                        for (let i = 0; i < req.body.fruits.length; i++) {
                            temp_object.breakfast.fruits.push(req.body.veggie[i]);
                        }
                        for (let i = 0; i < req.body.protein.length; i++) {
                            temp_object.breakfast.protein.push(req.body.veggie[i]);
                        }
                        for (let i = 0; i < req.body.grains.length; i++) {
                            temp_object.breakfast.grains.push(req.body.veggie[i]);
                        }
                    }
                        break;
                    case "LUNCH": {
                        for (let i = 0; i < req.body.veggie.length; i++) {
                            temp_object.lunch.veggie.push(req.body.veggie[i]);
                        }
                        for (let i = 0; i < req.body.fruits.length; i++) {
                            temp_object.lunch.fruits.push(req.body.veggie[i]);
                        }
                        for (let i = 0; i < req.body.protein.length; i++) {
                            temp_object.lunch.protein.push(req.body.veggie[i]);
                        }
                        for (let i = 0; i < req.body.grains.length; i++) {
                            temp_object.lunch.grains.push(req.body.veggie[i]);
                        }
                    }
                        break;
                    case "DINNER": {
                        for (let i = 0; i < req.body.veggie.length; i++) {
                            temp_object.dinner.veggie.push(req.body.veggie[i]);
                        }
                        for (let i = 0; i < req.body.fruits.length; i++) {
                            temp_object.dinner.fruits.push(req.body.veggie[i]);
                        }
                        for (let i = 0; i < req.body.protein.length; i++) {
                            temp_object.dinner.protein.push(req.body.veggie[i]);
                        }
                        for (let i = 0; i < req.body.grains.length; i++) {
                            temp_object.dinner.grains.push(req.body.veggie[i]);
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
                db.collection('FoodHistory').insertOne(
                    temp_object
                    , (err, result) => {
                        if (err) throw err;
                        if (result) {
                            console.log(result);
                            console.log(`User Data Inserted with name and date:${temp_object.name} and ${temp_object.date}`);

                            // res.header("Access-Control-Allow-Origin", "http://localhost:3000");
                            // res.header("Access-Control-Allow-Headers", "*");
                            // res.status(200).send({ "isSucceed": "true", "message": " Data Inserted up successfully!!" });

                        }
                    })
                res.send("Data Inserted");


                /////////////////////////////////
            }


        })
    }


})





