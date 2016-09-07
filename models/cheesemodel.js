// var uuid         = require("uuid");
var db              = require("../app").db;
var mongoose        = require("mongoose");

var cheeseSchema    = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    classification: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    }
}, {
    timestamps: true
});

// schema defined. Now we need to create and export a model to use it in other applications
cheeseModel = mongoose.model('cheeses', cheeseSchema);

module.exports = cheeseModel;