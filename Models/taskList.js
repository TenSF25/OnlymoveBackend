import { Schema, model } from "mongoose";

const taskList = new Schema({
    title: {
        type: String,
        required: true
    },
    statusTask: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    description: {
        type: String,
        required: false
    }
})

export const TaskList = model('Pendientes', taskList);