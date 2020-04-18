// import express router
// import database from db folder
// create getNotes routes and create postNotes router and deleteNotes router
// export the router
const router = require("express").Router();
var express = require("express");
var app = express();

fs = require("fs");

var notes = require("../db/storenotes");


// get notes using function in index js

router.get("/notes", (req,res) => {
    notes.getNotes()
    .then(function(notes){
        return res.json(notes);
    })
    
})


router.post("/notes",(req,res) => {
    let newnote1 = req.body
    notes.addNotes(newnote1)
    .then(function(notes){
        return res.json(notes)

    })
  
  

})

router.delete("/notes/:id", function(req,res){

    let idVal = req.params.id;
    notes.deleteNotes(idVal)
    .then(function(){
        return res.json({ok: true})
    })
   

   
   

})


module.exports = router;