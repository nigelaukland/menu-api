// var uuid         = require("uuid");
var db              = require("../app").db;
var mongoose        = require("mongoose");

var MenuSchema    = new mongoose.Schema({
  name: {
    type: String,
    required: false,
    unique: true
  },
  startDate: {
    type: Date,
    required: true
  },
  dayMenuIDs :{
    type: [string],
    required: false
  }
}, {
    timestamps: true
});

// schema defined. Now we need to create and export a model to use it in other applications
menuModel = mongoose.model('Menus', menuSchema);

module.exports = menuModel;