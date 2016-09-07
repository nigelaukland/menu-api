var CheeseModel = require("../models/cheesemodel");
var appRouter = function (app) {

    app.delete("/api/cheeses", function (req, res) {
        cheeseModel.remove({}, function (error) {
            if (error) {
                return res.status(400).send(error);
            }
            res.send(result);
        });
    });
    
    app.delete("/api/cheeses/:cheesId", function (req, res) {
        cheeseModel.remove({ _id: req.params.cheeseId }, function (err) {
            if (error) {
                return res.status(400).send(error);
            }
            res.send(result);
        });
    });
    
    
    
    
    
        cheese.remove({ _id: req.params.cheeseId }, function (err) {

    app.post("/api/cheeses", function (req, res) {
        if (!req.body.name) {
            return res.status(400).send({
                "status": "error",
                "message": "A name is required"
            });
        } else if (!req.body.classification) {
            return res.status(400).send({
                "status": "error",
                "message": "A classification is required"
            });
        } else if (!req.body.description) {
            return res.status(400).send({
                "status": "error",
                "message": "A description is required"
            });
        }
        cheeseModel.create(req.body, function (error, result) {
            if (error) {
                return res.status(400).send(error);
            }

            res.send(result);
        });
    });

    /*
    if (err) throw err; // this needs more handling as a duplicate key bombs out #fail style
    var id = res._id;

    res.writeHead(200, {
    'Content-Type': 'text/plain'
    });
    res.end('Added cheese with id: ' + id);
    });
    });*/

    app.get("/api/cheeses", function (req, res) {
        cheeseModel.find({}, function (error, result) {
            if (error) {
                return res.status(400).send(error);
            }
            res.send(result);
        })
    });

    app.get("/api/cheeses/:cheeseId", function (req, res) {
        cheeseModel.findById(req.params.cheeseId, function (error, result) {
            if (error) {
                return res.status(400).send(error);
            }
            res.send(result);
        });
    });

};

module.exports = appRouter;