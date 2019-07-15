import { Schema, model } from 'mongoose';

const ItemsSchema = Schema({
    name: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    isAvailable: {
        type: Boolean,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    images: {
        type: Array,
        require: true
    },
    colours: {
        type: Array,
        require: true
    },
    merchent: {
        type: String,
        require: true
    }
});

const ItemsModel = model("Items",ItemsSchema);

export default ItemsModel;
