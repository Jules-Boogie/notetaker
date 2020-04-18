// import express router
// create a variable for path
// create getNotes router and this returns public/notes.html file
// create a wildcard router and this returns public/index.html file
// export the router

const router = require("express").Router();
var express = require("express");
var app = express();
const path = require("path");






router.get("/notes", function(req, res){
    res.sendFile(path.join(__dirname,"../public/notes.html"))



})



router.get("*", function(req, res){
    res.sendFile(path.join(__dirname,"../public/index.html"))


})



module.exports = router;

