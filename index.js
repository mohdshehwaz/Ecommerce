const bodyParser = require('body-parser');
const express = require('express');


const app = express();
const port = 8000;

const db = require('./config/mongoose');

// this is for parsing json
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({extended:true}));






app.use('/',require('./routes/index'));
//server start using port number
app.listen(port,(err) => {
    if(err){
        console.log(err);
        return;
    }
    console.log("Server is running on port", port);
});