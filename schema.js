import mongoose from 'mongoose';
const {Schema} = mongoose;
let productSchema = new Schema({
    productId: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    operation: {
        type: String,
        required: true
    }
});

module.exports(mongoose.model('Product', productSchema));