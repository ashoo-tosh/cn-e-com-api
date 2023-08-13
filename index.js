// including required files into index.js
const express = require('express');
const body_parser = require('body-parser');
const db = require('./config/mongoose');

const product_router = require('./routes/products'); 

//seting up express app
const app = express();

//using body parser to extract http and post request 
app.use(body_parser.urlencoded({extended: true}));


app.use('/products', product_router);
const port = 8000

//setting uo the server to listen on port 
app.listen(port, function(){
    try {
        console.log(`api is working on:- ${port} `)
    } catch (error) {
        console.log('error in starting server',error);
    }
});