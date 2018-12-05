// var uuid         = require("uuid");
var db              = require("../app").db;
var mongoose        = require("mongoose");

var dayMenuSchema    = new mongoose.Schema({
    date: {
        type: Date,
        required: true,
        unique: true
    },
    morningText: {
        type: String,
        required: false
    },
    morningRecipeId: {
        type: String,
        required: false
    },
    lunchText: {
        type: String,
        required: false
    },
    lunchRecipeId: {
        type: String,
        required: false
    },
    dinnerText: {
        type: String,
        required: false
    },
    dinnerRecipeId: {
        type: String,
        required: false
    }
}, {
    timestamps: true
});

// schema defined. Now we need to create and export a model to use it in other applications
dayMenuModel = mongoose.model('dayMenus', dayMenuSchema);

module.exports = dayMenuModel;