var Express = require("express");
var MongoClient = require("mongodb").MongoClient;
var cors = require("cors");
const multer = require("multer");

var app = Express();
app.use(cors());

var CONNECTION_STRING = "mongodb+srv://akashcharles:englandss2406@cluster0.lxuq4oq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"










var DATABASENAME = "Postitems";
var database;

app.listen(5038,() =>{
    MongoClient.connect(CONNECTION_STRING,(error,client) =>{
        database=client.db(DATABASENAME);
        console.log("Mongo DB Connection Successfull");
    })
})