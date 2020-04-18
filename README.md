
# NoteTaker App

## Summary 
This is a basic app that enables a user to add, delete, and edit notes. This app was developed using expressjs routing, nodejs, CSS, and jquery ajax call.


## NoteTaker Video
[MP4 of the App](https://github.com/Jules-Boogie/notetaker/blob/master/Develop/public/assets/bandicam%202020-04-17%2022-39-50-164.mp4)

## NoteTaker Deployed App



## NoteTaker App Photos

![Site Photo](https://github.com/Jules-Boogie/notetaker/blob/master/Develop/public/assets/Capture.PNG)


![Site Photo](https://github.com/Jules-Boogie/notetaker/blob/master/Develop/public/assets/Capture1.PNG)



# Technologies Used
| [ES6-JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) | StartFragmentJavaScript is the programming language of HTML and the Web. JavaScript is easy to learn.  EndFragment |
|---------------------------------------------------------------------------|:------------------------------------------------------------------------------------------------------------------:|
| [Nodejs](https://nodejs.org/en/docs/)                                     |                StartFragmentNode.js is designed to build scalable network applications. EndFragment                |
| [Inquirer](https://www.npmjs.com/package/inquirer/v/0.2.3)                |           StartFragmentInquirer.js   provides the user interface and the inquiry session flow EndFragment          |
| [express](https://expressjs.com/EndFragment)                              |           StartFragmentExpress is a minimal and flexible Node.js web application framework   EndFragment           |


## Code Snippet
The code below executes a method getNotes(), then filters through every element in "notes" and returns into a "notes" only elements that meet the condition note.id !== parseInt(id). Basically, this line of code, gets the note we have and then removes the deleted note using the id. 
```
deleteNotes(id){
        return this.getNotes()
        .then(notes => notes.filter(note => note.id !== parseInt(id)))
        .then(updatenotes => this.write(updatenotes))



    }

```

## Author Links

**Author:**
Juliet George

**Contact:**
[LinkedIn](https://www.linkedin.com/in/juliet-george-864950b8/)
