import { Schema, model } from 'mongoose';

const outfit = new Schema({
    image_outfit: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    typeClothe: {
        type: String,
        required: true
    },
    clean: {
        type: Boolean,
        required: false
    }
})

export const Outfit = model("Ropa", outfit);