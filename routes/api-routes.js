const express = require("express");
const app = express();
const path = require("path");
const db = require("../models")
    //16 Put

module.exports = function(app) {
    app.get("/api/workouts/", (req, res) => {
        db.WorkOut.create(req)
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.json(err);
            });
    });
};