// require util and fs
const util = require("util");
const fs = require("fs")

//promisify fs

var readFileAsyn = util.promisify(fs.readFile);
var writeFileAsyn = util.promisify(fs.writeFile);
var appendFileAsyn = util.promisify(fs.appendFile);



// create a class and this class has to have 3 functions 

class notes {
    constructor(id){
        this.id = id;
    }
    read(){
        return readFileAsyn("db.json", "utf8");

    }
    write(notes){

        return writeFileAsyn("db.json", JSON.stringify(notes))
    }

    getNotes(){
        return this.read()
        .then(notes => {
            console.log(notes)
            //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse
            let notesArray = [].concat(JSON.parse(notes));
            return notesArray;
        })



    }
    addNotes(note){
        const {title, text} = note;
        const newnote = { title, text, id: this.id}
        return this.getNotes()
        .then(notes => [...notes, newnote])
        .then(updatenotes => this.write(updatenotes))
        .then(() => newnote)
    }

    deleteNotes(id){
        return this.getNotes()
        .then(notes => notes.filter(note => note.id !== parseInt(id)))
        .then(updatenotes => this.write(updatenotes))



    }


}






// getNotes, addNotes, deleteNotes



// export the class


module.exports = new notes()