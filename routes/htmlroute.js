// import express router
// create a variable for path
// create getNotes router and this returns public/notes.html file
// create a wildcard router and this returns public/index.html file
// export the router

// const router = require("express").Router();
const path = require("path");
module.exports = function(app){




app.get("/notes", function(req, res){
    res.sendFile(path.join(__dirname,"../public/notes.html"))



})



app.get("*", function(req, res){
    res.sendFile(path.join(__dirname,"../public/index.html"))


})



//module.exports = router;

}