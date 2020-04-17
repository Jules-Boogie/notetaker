// import express router
// import database from db folder
// create getNotes routes and create postNotes router and deleteNotes router
// export the router

var express = require("express");
var app = express();

PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static("public"))

var notes = require("./db/db.json");

app.route('/api/notes');

app.get((req,res) => {
    return res.json(notes);
})

app.post((res,req) => {
    let newnote = req.body
    newnote.id = parseInt(notes[notes.length - 1].id) + 1
    notes.push(newnote);
    fs.writeFile("./db/db.json",JSON.stringify(notes,null,2), function(err,data){
        if (err) throw err;
        return res.json(data);
    })

})

app.delete("/api/notes/:id", function(req,res){

    let id = req.params.id;
    res.json((notes.splice(id-1,1)))
    fs.writeFile("./db/db.json",JSON.stringify(notes,null,2), function(err,data){
        if(err) throw err
        return res.json(data);

    })


   
   

})

app.listen(PORT, function(){
    console.log("Listening on:" + PORT)

})

modules.export = apiRoute;