const express = require("express")

const fs = require("fs");

var app = express(); 
const apiRoute = require("./routes/apiRoute");
const htmlRoute = require("./routes/htmlRoute");

// need a port
// make express use json 
// make sure app used url encoded and make sure extended is true.

var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//express app has to know public folder
app.use(express.static("public"))

//has to use 2 routes ( APi and HTML routes) and has to be in the main directory in a new folder called route.
app.use("/api", apiRoute);
app.use("/", htmlRoute);
// the app has to start and listen to the port 
app.listen(PORT, function(){
    console.log("Listening on:" + PORT)

})
