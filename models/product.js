// including required files into this file
const mongoose = require('mongoose');

//creating a new schema to store data
const productSchema = new mongoose.Schema({
   name: {
    type: String,
    required: true,
    unique: true
   },
   quantity: {
        type: Number,
        required: true
   }
},{
    versionKey: false
});

const Product = mongoose.model('Product', productSchema);

//exporting schema
module.exports = Product;