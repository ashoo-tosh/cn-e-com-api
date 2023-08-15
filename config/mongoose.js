const mongoose = require('mongoose');

// connecting mongoose to its default server and ecommapi
mongoose.connect('mongodb+srv://ashutoshr980:asdewq123@cluster0.jarnohp.mongodb.net/ecommapi', {
    useNewUrlParser: true
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to MongoDB"));

db.once('open', function(){
    console.log('Connected to Database :: MongoDB');
});

module.exports = db;
