'use strict';

const express = require('express');

// Constants
const port = 8080;
const host = 'localhost';

// App
const app = express();

//Get Method
app.get('/', (req, res) => {
  res.send('Get Method');
});

//Post Method
app.post('/', function(req, res){
    res.send('POST Method')
})

//URL
app.listen(port, host);
console.log(`Running on http://${host}:${port}`);