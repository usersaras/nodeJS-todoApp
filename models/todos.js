const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema(
{
    title: {
        type: String,
        required: true
    },  
    body: {
        type: String,
        required: false
    },
    postedDate: {
        type: Date,
        default: Date.now
    },
    completed: Boolean,
    completedDate: Date
},
{timestamps: true}
);

const td = mongoose.model('todo', todoSchema);

module.exports = td;