var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        var hbsObject = {
            burgers: data
        };
        // console.log(data);
        // console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/burger", function(req, res) {
    console.log(req.body.name);
    burger.insertOne(req.body.name, function(result) {
        res.json({ id: result.insertId });
    });
});

router.put("/burger/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    // console.log("condition", condition);
    // console.log(req.body.id);
    // console.log(req.body.devoured);

    burger.updateOne(condition, function(result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
          } else {
            res.status(200).end();
          }
    });
});

module.exports = router;