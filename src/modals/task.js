const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    description: {
        type : String,
        required : true
    },
    completed: {
        type : Boolean,
        default : false
    }
},
{ timestamps: true }
)

const TASK = mongoose.model("task", taskSchema);

module.exports = TASK