// import express router
// import database from db folder
// create getNotes routes and create postNotes router and deleteNotes router
// export the router


fs = require("fs");

var notes = require("../db/storenotes");

module.exports = function(app){

// get notes using function in index js

app.get("/api/notes", (req,res) => {
    notes.getNotes()
    .then(function(notes){
        return res.json(notes);
    })
    .catch(err => res.status(500).json(err));
    
})


app.post("/api/notes",(req,res) => {
    let newnote1 = req.body
    notes.addNotes(newnote1)
    .then(function(notes){
        return res.json(notes)

    })
    .catch(err => res.status(500).json(err))
  

})

app.delete("/api/notes/:id", function(req,res){

    let id = req.params.id;
    notes.deleteNotes(id)
    .then(function(){
        return res.json({ok: true})
    })
    .catch(err => res.status(500).json(err))
   

   
   

})
}

