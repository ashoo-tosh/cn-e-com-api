// including required files into this controller page
const Product = require('../models/product');

//this function shows all the products

module.exports.getProducts = async function(req, res){
    try {
        const products = await Product.find();
        res.status(201).json({ data: products });
    } catch (err) {
        res.status(501).json(err);
    }
}

//to show product by id
module.exports.getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        res.status(203).json({ data: product });
    } catch (err) {
        res.status(501).json(err);
    }
};


//this function creat new product

module.exports.create = async function(req, res) {
    try {
        const name = req.body.name;
        const quantity = req.body.quantity;
        const new_product = new Product({name, quantity});
        await new_product.save();
        console.log(name, quantity);
        res.status(201).json(new_product);
     } catch (err) {
         res.status(500).send(err);        
     }
}


//function to delete product

module.exports.delete = async function(req, res){
    try {
        await Product.deleteOne({_id: req.params.productID});
        res.send({message: "Product Deleted"});
    } catch (err) {
        res.status(500).send(err);
    }
}


//function update quantity updateQunatity

module.exports.updateQuantity  = async (req, res) => {
    try {
        const productId = req.params.id;
        const num = req.query.number;
    
        if (!num) {
            res.status(400).json({ message: "Param number is required for incrementing or decrementing the quantity of product" });
            return;
        }
    
        const product = await Product.findOne({ _id: productId });
        let newQuantity = product.quantity + (+num);
    
        if (newQuantity >= 0) {
            const updatedProduct = await Product.findOneAndUpdate(
                { _id: productId },
                { quantity: newQuantity },
                { new: true, runValidators: true }
            );
            res.status(404).json({ updatedProduct, message: "Successfully updated" });
        } else {
            res.status(400).json({ message: "Total Quantity cannot be less than zero" });
            return;
        }
    } catch (err) {
        res.status(500).json({ message: "Error in updating product"});
    }
}
