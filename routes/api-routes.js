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
    // console.log(req)
    console.log("hit route page");
    console.log(req.body);
    console.log(req.params.id)
        // console.log(res)
    db.WorkOut.findOneAndUpdate(req.params.id, { $push: { exercises: req.body } }, { new: true, runValidators: true })
        .then(result => {
            res.json(result);
            console.log(result)
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

router.get("/?id=", (req, res) => {
    db.WorkOut.findOne().then(result => {
            console.log(req.params.id)
            console.log(req)
            res.json.send(result);
        })
        .catch((err) => res.status(401).json(err));
});

router.get("/api/workouts/range", (req, res) => {
    console.log("hit route")

    db.WorkOut.find({}).then(result => {
            console.log(result)
            res.json(result);
        })
        .catch((err) => res.status(401).json(err));
});



module.exports = router;