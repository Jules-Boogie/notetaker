// import express router
// create a variable for path
// create getNotes router and this returns public/notes.html file
// create a wildcard router and this returns public/index.html file
// export the router

const router = require("express").Router();
var express = require("express");
var app = express();

PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static("public"))


app.get("/notes", function(req, res){
    res.sendFile(path.join(__dirname,"../public/notes.html"))



})



app.get("*", function(req, res){
    res.sendFile(path.join(__dirname,"../public/index.html"))


})



module.exports = router;

