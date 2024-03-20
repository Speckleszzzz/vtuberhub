var express = require("express");
var MongoClient = require("mongodb").MongoClient;
var cors = require("cors");

var app = express();
app.use(cors());

var CONNECTION_STRING = "mongodb+srv://akashcharles:englandss2406@cluster0.lxuq4oq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
var DATABASE_NAME = "PostItems";

var database;

app.get("/", (req, res) => {
    res.send("Hello, world!"); 
});

app.listen(5038, () => {
    MongoClient.connect(CONNECTION_STRING, (error, client) => {
        if (error) {
            console.error("Error connecting to MongoDB:", error);
        } else {
            database = client.db(DATABASE_NAME);
            console.log("Mongo DB Connection Successful");
        }
    });
});
