var RecipeModel = require("../models/recipemodel");
var appRouter = function (app) {

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

};

module.exports = appRouter;
