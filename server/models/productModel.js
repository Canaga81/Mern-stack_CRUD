const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema ({

    productName: {
        type: String,
        required: [true, 'Bu hisseni bos biraxmayin !'],
    },

    productPrice: {
        type: Number,
        required: [true, 'Bu hisseni bos biraxmayin !'],
        default: 0,
    },

    productQuantity: {
        type: Number,
        required: [true, 'Bu hisseni bos biraxmayin !'],
        default: 0,
    },

    productDescription: {
        type: String,
        required: [true, 'Bu hisseni bos biraxmayin !'],
    },

    productImage: {
        type: String,
        required: [true, 'Bu hisseni bos biraxmayin !'],
    },

    createDate: {
        type: Date,
        default: new Date().toISOString().substring(0, 10),
    },

});


const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;