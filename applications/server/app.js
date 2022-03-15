const express = require('express')
var mongoose = require('mongoose')

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

const app = express()
app.use(express.json());

app.listen(8000, () => {
    console.log("TEST express")
})
/** 
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("MyDatabase");
    var myobj = { name: "Company Inc", address: "Highway 37" };
    dbo.collection("test").insertOne(myobj, function(err, res) {
     /**  if (err) throw err;
      console.log("1 document inserted");
      db.close();
    });
  }); */

app.get('/', function (req, res) {
    console.log(req.body)
    res.send('Hello World!')
})

/*
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("MyDatabase");
    var myobj ={name:"Harry",phone:4211};
    dbo.collection("test").insertOne(myobj, function(err, res) {
       if (err) throw err;
      console.log("1 document inserted");
      db.close();
    })
})*/





app.get('/users/login', (req, res, next) => {

    console.log('user login!');


    let gg = "mongodb://localhost:27017/";
    MongoClient.connect(gg)
        .then((dbo) =>{
            return Promise.resolve(dbo.db('MyDatabase'))
         })
        .then((client) => {

            client.collection("test").findOne({ name: `${req.body.name}` }, function (err, result) {

            if (err) throw err;
            if(result)
            {
                if(result.password == `${req.body.phone}`){
                    console.log(`user password matched!`);
                    res.send('LOG IN!')
                }else{
                    console.log(`user log in failed!`);
                    res.redirect(`/`);
                }

            }else{
                console.log('user log in failed')

            }

        })

    }).catch((err) => {
        console.log(`something went wrong ${err}`);
        res.redirect('/');
    })

})
