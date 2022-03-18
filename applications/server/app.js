const express = require('express')
var mongoose = require('mongoose')
var bodyParser=require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var fact = "mongodb://localhost:27017/";

const app = express()
//app.use(express.json());
//app.use(express.urlencoded({ extended: false }));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

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

var db;

//let gg = "mongodb://localhost:27017/";
MongoClient.connect(fact)
    .then((dbo) =>{
        return Promise.resolve(dbo.db('MyDatabase'))
    })
    .then((client)=>{
            db=client;
    }).catch((err)=>{
       console.log(err);
    })




app.post('/users/login', (req, res, next) => {

    var temp = req.body;
    let temp_string=[];

    for(let [key,value] of Object.entries(temp)){
       temp_string.push(key)
    }

    let TargetUsername,TargetPassword;

    for(let [key,value]of Object.entries(JSON.parse(temp_string))){
        if(key==='username'){
            TargetUsername=value;
        }
        if(key==='password'){
            TargetPassword=value;
        }
    }

    // let gg = "mongodb://localhost:27017/";
    // MongoClient.connect(gg)
    //     .then((dbo) =>{
    //         return Promise.resolve(dbo.db('MyDatabase'))
    //      })
    //     .then((client) => {

            db.collection("test").findOne({ name: `${TargetUsername}` }, function (err, result) {

            if (err) throw err;
            if(result)
            {
                if(result.password === `${TargetPassword}`){
                    console.log(`user password matched!`);
                    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
                    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
                    res.send({"isSucceed":true, "message": "Logged in!!", "username":`${TargetUsername}`});
                }else{
                    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
                    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
                    res.send({"isSucceed":false, "message": "Password is wrong!!"} );
                    console.log(`password in failed!`);
                }

            }else{
                res.header("Access-Control-Allow-Origin", "http://localhost:3000");
                res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

                res.send({"isSucceed":false, "message": "Can not find the user!"});
                console.log('USER NAME NOT MATCHED')

            }

        })

    // }).catch((err) => {
    //     console.log(`something went wrong ${err}`);
    //     res.redirect('/');
    // })

})


var delete_name=null;


app.post('/users/signup', (req, res, next) => {

    var temp = req.body;
    let temp_string=[];

    for(let [key,value] of Object.entries(temp)){
        temp_string.push(key)
    }

    let TargetUsername,TargetPassword,Target_confirmpassword;

    for(let [key,value]of Object.entries(JSON.parse(temp_string))){
        if(key==='username'){
            TargetUsername=value;
        }
        if(key==='password'){
            TargetPassword=value;
        }
        if(key==='confirmPassword'){
            Target_confirmpassword=value;
        }
    }

    // let gg = "mongodb://localhost:27017/";
    // MongoClient.connect(gg)
    //     .then((dbo) =>{
    //         return Promise.resolve(dbo.db('MyDatabase'))
    //     })
    //     .then((client) => {
            if(TargetPassword!==Target_confirmpassword){
                res.header("Access-Control-Allow-Origin", "http://localhost:3000");
                res.header("Access-Control-Allow-Headers", "*");
                res.send({"isSucceed":"false", "message": "Password and confirmPassword does not match!!"});
            }


            db.collection("test").findOne({ name: `${TargetUsername}` }, function (err, result) {

                if (err) throw err;
                if(result)
                {
                    console.log('User already exists');
                    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
                    res.header("Access-Control-Allow-Headers", "*");
                    res.send({"isSucceed":"false", "message": "User already exists"});

                }else{
    
                    db.collection('test').insertOne({
                        "name": `${TargetUsername}`,
                        "password": `${TargetPassword}`
                    },(err,result)=> {
                        if(err) throw err;
                        if(result) {
                            console.log(result);
                            console.log(`User signed up with name:${TargetUsername}`)
                            delete_name=TargetUsername
                            res.header("Access-Control-Allow-Origin", "http://localhost:3000");
                            res.header("Access-Control-Allow-Headers", "*");
                            res.send({"isSucceed":"true", "message": "Signed up successfully!!"});
                        }
                    })
                }
            })

    //     }).catch((err) => {
    //     console.log(`something went wrong ${err}`);
    //     res.redirect('/');
    // })

})


app.post('/users/fetchFailed',(req,res,next)=>{
    console.log("fetch failed is trigged");
//    let doc= db.collection('test').find().sort({_id:-1}).limit(1);
//    console.log(`The target doc to be deleted name: ${doc.name} :`,doc);
//     //db.collection('test').getLastInsertedDocument.find({}).sort({_id:-1}).limit(1);
    db.collection('test').deleteOne({name:delete_name});
    console.log(`The document is destroyed with name ${delete_name}`);
    res.send({"isSucceed":"false", "message": "Server busy,please try again!!"});
})



app.use((err,req,res,next)=>{
    console.log(`Error message${err}`);
    res.send({"isSucceed":"false", "message": "Error handler triggered!!"})
})

