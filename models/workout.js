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
            type: String,
        },
        duration: {
            type: String,
            require: true
        },
        weight: {
            type: String
        },
        sets: {
            type: String
        },
        reps: {
            type: String
        }
    }]
});

const WorkOut = mongoose.model("WorkOut", WorkOutSchema);

module.exports = WorkOut;