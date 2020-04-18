// require util and fs
const util = require("util");
const fs = require("fs")

//promisify fs

var readFileAsyn = util.promisify(fs.readFile);
var writeFileAsyn = util.promisify(fs.writeFile);
var appendFileAsyn = util.promisify(fs.appendFile);



// create a class and this class has to have 3 functions 

class notes {
    constructor(){
        this.id = 0;
    }
    read(){
        return readFileAsyn("db/db.json", "utf8");

    }
    write(notes){

        return writeFileAsyn("db/db.json", JSON.stringify(notes))
    }

    getNotes(){
        return this.read()
        .then(notes => {
            console.log(notes)
            //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse
            let notesArray
            try {
            notesArray = [].concat(JSON.parse(notes));
            }

            catch(err){
                notesArray = [];
            }

            return notesArray;
        })



    }
    addNotes(note){
        const {title, text} = note;
        const newnote = { title, text, id: ++this.id}
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