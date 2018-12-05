var recipeModel = require("../models/recipeModel");
var dayMenuModel = require("../models/dayMenuModel");
var menuModel = require("../models/menuModel");

var appRouter = function (app) {

  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  /*
  recipes methods
  */

  app.delete("/recipes", function (req, res) {
    recipeModel.remove({}, function (error, result) {
      if (error) {
        return res.status(400).send(error);
      }
      res.send(result);
    });
  });

  app.delete("/recipes/:recipeId", function (req, res) {
    recipeModel.remove({ _id: req.params.recipeId }, function (error, result) {
      if (error) {
        return res.status(400).send(error);
      }
      res.send(result);
    });
  });

  app.post("/recipes", function (req, res) {
    if (!req.body.name) {
      return res.status(400).send({
        "status": "error",
        "message": "A recipe name is required"
      });
    } else if (!req.body.description) {
      return res.status(400).send({
        "status": "error",
        "message": "A recipe description is required"
      });
    }
    recipeModel.create(req.body, function (error, result) {
      if (error) {
        return res.status(400).send(error);
      }
      res.send(result);
    });
  });

  app.get("/recipes", function (req, res) {
    recipeModel.find({}, function (error, result) {
      if (error) {
        return res.status(400).send(error);
      }
      res.send(result);
    })
  });

  app.get("/recipes/:recipeId", function (req, res) {
    recipeModel.findById(req.params.recipeId, function (error, result) {
      if (error) {
        return res.status(400).send(error);
      }
      res.send(result);
    });
  });

  /*
  dayMenus methods
  */

  app.post("/dayMenus", function (req, res) {
    if (!req.body.date) {
      return res.status(400).send({
        "status": "error",
        "message": "A date is required"
      });
    }
    dayMenuModel.create(req.body, function (error, result) {
      if (error) {
        return res.status(400).send(error);
      }

      res.send(result);
    });
  });

  app.get("/dayMenus", function (req, res) {
    dayMenuModel.find({}, function (error, result) {
      if (error) {
        return res.status(400).send(error);
      }
      res.send(result);
    })
  });

  app.get("/dayMenus/:dayMenuId", function (req, res) {
    dayMenuModel.findById(req.params.dayMenuId, function (error, result) {
      if (error) {
        return res.status(400).send(error);
      }
      res.send(result);
    });
  });

  app.delete("/dayMenus", function (req, res) {
    dayMenuModel.remove({}, function (error, result) {
      if (error) {
        return res.status(400).send(error);
      }
      res.send(result);
    });
  });

  app.delete("/dayMenus/:dayMenuId", function (req, res) {
    dayMenuModel.remove({ _id: req.params.dayMenuId }, function (error, result) {
      if (error) {
        return res.status(400).send(error);
      }
      res.send(result);
    });
  });

  /*
  menus methods
  */

  app.post("/menus", function (req, res) {
    if (!req.body.date) {
      return res.status(400).send({
        "status": "error",
        "message": "A date is required"
      });
    }
    menuModel.create(req.body, function (error, result) {
      if (error) {
        return res.status(400).send(error);
      }
      res.send(result);
    });
  });

  app.get("/menus", function (req, res) {
    menuModel.find({}, function (error, result) {
      if (error) {
        return res.status(400).send(error);
      }
      res.send(result);
    })
  });

  app.get("/menus/:menuId", function (req, res) {
    menuModel.findById(req.params.menuId, function (error, result) {
      if (error) {
        return res.status(400).send(error);
      }
      res.send(result);
    });
  });

  app.delete("/menus", function (req, res) {
    menuModel.remove({}, function (error, result) {
      if (error) {
        return res.status(400).send(error);
      }
      res.send(result);
    });
  });

  app.delete("/menus/:menuId", function (req, res) {
    menuModel.remove({ _id: req.params.dayMenuId }, function (error, result) {
      if (error) {
        return res.status(400).send(error);
      }
      res.send(result);
    });
  });

};

module.exports = appRouter;
