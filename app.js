'use strict';

const express = require('express');
const cowsay = require('cowsay')

// Constants
const port = 8080;
const host = 'localhost';

// App
const app = express();

//Get Method
app.get('/', (req, res) => {
    var succesMessage = 'GET request was successful';

    if(res.statusCode === 200){
        res.send(succesMessage);
        console.log(cowsay.say({
            text : "This a successful GET request",
            e : "oO",
            T : "U " 
            }));
        }
});

//Post Method
app.post('/', function(req, res){
    var succesMessage = 'POST request was successful';

    if(res.statusCode === 200){
        res.send(succesMessage);
        console.log(cowsay.say({
            text : "This a successful POST request",
            e : "pp",
            T : "U " 
        })); 
    }
})

//URL
app.listen(port, host);
console.log(`Running on http://${host}:${port}`);