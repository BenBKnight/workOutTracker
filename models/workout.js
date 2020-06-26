const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkOutSchema = new Schema({
    type: {
        type: String,
        trim: true
    },

    name: {
        type: String,
        trim: true
    },

    distance: {
        type: String,
    },

    duration: {
        type: String
    }
});
const WorkOut = mongoose.model("WorkOut", WorkOutSchema);

module.exports = WorkOut;