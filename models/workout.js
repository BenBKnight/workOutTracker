const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkOutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [{
        type: {
            type: String,
            trim: true,
            require: true
        },
        name: {
            type: String,
            trim: true,
            require: true
        },
        distance: {
            type: Number,
        },
        duration: {
            type: Number,
            require: true
        },
        weight: {
            type: Number
        },
        sets: {
            type: Number
        },
        reps: {
            type: Number
        }
    }]
});

const WorkOut = mongoose.model("WorkOut", WorkOutSchema);

module.exports = WorkOut;