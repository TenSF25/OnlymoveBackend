import { Schema, model } from 'mongoose';

const methodStudy = new Schema({
    subject: {
        type: String,
        required: true
    },
    theme: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    image_study: {
        type: String,
        required: false
    }
})

export const MethodStudy = model("methodStudy", methodStudy);