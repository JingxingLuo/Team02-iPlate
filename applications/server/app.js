const express = require('express')
var mongoose = require('mongoose')
var bodyParser=require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var fact = "mongodb://localhost:27017/";

const app = express()
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

app.listen(8000, () => {
    console.log("TEST express")
})

var db;

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

            db.collection("test").findOne({ name: `${TargetUsername}` }, function (err, result) {

            if (err) throw err;
            if(result)
            {
                if(result.password === `${TargetPassword}`){
                    console.log(`user password matched!`);
                    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
                    res.header("Access-Control-Allow-Headers", "*");
                    res.send({"isSucceed":true, "message": "Logged in!!", "username":`${TargetUsername}`});
                }else{
                    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
                    res.header("Access-Control-Allow-Headers", "*");
                    console.log(`password in failed!`);
                    res.send({"isSucceed":false, "message": "Password is wrong!!"} );

                }

            }else{
                res.header("Access-Control-Allow-Origin", "http://localhost:3000");
                res.header("Access-Control-Allow-Headers", "*");
                console.log('USER NAME NOT MATCHED')
                res.send({"isSucceed":false, "message": "Can not find the user!"});
            }
        })
})


var delete_name=null;


app.post('/users/signup', (req, res, next) => {

    var temp = req.body;
    let temp_string=[];
    console.log(temp);
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
    
            if((TargetPassword!=Target_confirmpassword)){
                res.header("Access-Control-Allow-Origin", "http://localhost:3000");
                res.header("Access-Control-Allow-Headers", "*");
                res.status(200).send({"isSucceed":"false", "message": "Password and confirmPassword does not match!!"});
                
            }else{


            db.collection("test").findOne({ name: `${TargetUsername}` }, function (err, result) {
                console.log(result);
                if (err) throw err;
                if(result)
                {
                    console.log('User already exists');
                    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
                    res.header("Access-Control-Allow-Headers", "*");
                    res.status(200).send({"isSucceed":"false", "message": "User already exists"});
                    

                }else{
    
                    db.collection('test').insertOne({
                        "name": `${TargetUsername}`,
                        "password": `${TargetPassword}`
                    },(err,result)=> {
                        if(err) throw err;
                        if(result) {
                            console.log(result);
                            console.log(`User signed up with name:${TargetUsername}`)
                            delete_name=TargetUsername;
                            res.header("Access-Control-Allow-Origin", "http://localhost:3000");
                            res.header("Access-Control-Allow-Headers", "*");
                            res.status(200).send({"isSucceed":"true", "message": "Signed up successfully!!"});
                           
                        }
                    })
                }
            })
        }

})


