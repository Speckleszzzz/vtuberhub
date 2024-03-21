var express = require("express");
var MongoClient = require("mongodb").MongoClient;
var cors = require("cors");
const multer = require("multer");

var app = express();
app.use(cors());

var CONNECTION_STRING = "mongodb+srv://akashcharles:englandss2406@cluster0.lxuq4oq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
var DATABASE_NAME = "PostItems";

var database;

app.listen(8080, () => {
    MongoClient.connect(CONNECTION_STRING, (error, client) => {
        if (error) {
            console.error("Error connecting to MongoDB:", error);
        } else {
            database = client.db(DATABASE_NAME);
            console.log("Mongo DB Connection Successful");
        }
    });
});

app.get("/api/vtuber/getpost", (req, res) => {
    database.collection("postitemscollections").find({}).toArray((error,result) => {
        res.send(result);
    })
});

app.post("/api/vtuber/addpost",multer().none(),(req,res) => {
    database.collection("postitemscollections").count({},function(error,numOfDocs){
        database.collection("postitemscollections").insertOne({
            id:(numOfDocs+1).toString(),
            description:express.request.body.newNotes
        });
        response.json("Added Successfully");
    })
})