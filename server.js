// Dependencies
// ===========================================================
var express = require("express");
let bodyParser = require('body-parser');
let path = require('path');

var app = express();
var PORT = 3000;

// set up app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

// Data
var characters = [{
    routeName: "yoda",
    name: "Yoda",
    role: "Jedi Master",
    age: 900,
    forcePoints: 2000
  }, {
    routeName: "darthmaul",
    name: "Darth Maul",
    role: "Sith Lord",
    age: 200,
    forcePoints: 1200
  }, {
    routeName: "obiwankenobi",
    name: "Obi Wan Kenobi",
    role: "Jedi Knight",
    age: 60,
    forcePoints: 1350
  }];

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

//api route
app.get('/api/characters', function(req, res){
    return res.json(characters);
});

// I just want to get a character at a time
app.get('/api/characters/:character', function(req, res){
    // connect to db and make a sequelize call to db to get yoda
    let chosen = req.params.character;
    for(let i = 0; i < characters.length; i++){
        if(chosen === characters[i].routeName){
            return res.json(characters[i])
        }
    }
    return res.send('no character found');
});

//create new characters

app.post('/api/characters', function(req, res){
    let newcharacter = req.body;
    characters.push(newcharacter);

    console.log(newcharacter);

    res.json(characters);
});

// Create a new Express route that leads users to the new Obi Wan Kenobi Data
// Follow the same format as the Yoda and Darth Maul routes
//

// YOUR CODE GOES HERE
//
//

// Listener
// ===========================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});


