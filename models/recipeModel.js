// var uuid         = require("uuid");
var db              = require("../app").db;
var mongoose        = require("mongoose");

var recipeSchema    = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    imagePath: {
        type: String,
        required: false
    }
}, {
    timestamps: true
});

// schema defined. Now we need to create and export a model to use it in other applications
recipeModel = mongoose.model('recipes', recipeSchema);

module.exports = recipeModel;