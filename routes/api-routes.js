const express = require("express");
const app = express();
const path = require("path");
const db = require("../models");
const router = express.Router();


router.post("/api/workouts", (req, res) => {
    db.WorkOut.create(req)
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.get("/api/workouts", (req, res) => {
    db.WorkOut.find({})
        .then(dbWorkout => {
            res.json(dbWorkout)
        })
        .catch(err => {
            res.json(err);
        });
});

router.put("/api/workouts/:id", (req, res) => {
    console.log(req.params, req.body)
    db.WorkOut.findOneAndUpdate({ _id: req.params.id }, { $push: { exercises: req.body } }, { new: true })
        .then(result => {
            console.log(result)

            res.json(result);
        })
        .catch((err) => {
            console.error(err)
            res.status(401).json(err)
        });
});

router.put("/api/workouts", (req, res) => {
    db.WorkOut.create(req).then(result => {
        res.json(result);
    })
        .catch((err) => {
            res.status(401).json(err)
        });
});

router.get("/api/workouts/range", (req, res) => {
    db.WorkOut.find({}).then(result => {
        res.json(result);
    })
        .catch((err) => res.status(401).json(err));
});



module.exports = router;