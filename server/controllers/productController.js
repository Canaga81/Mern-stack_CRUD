const Product = require('../models/productModel.js');

//^ Get All Products
const getAllProducts = async (req, res) => {

    try {

        const products = await Product.find({});
        res.status(200).json(products);
        
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

};

//^ Get 1 Product
const getProductByID = async (req, res) => {

    try {

        const id = req.params.id;
        const product = await Product.findById(id);

        if (!product) {
            return res.status(404).json({ message: 'Mehsul yoxdur!' });
        }

        res.status(200).json(product);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }

};

//^ Create Product
const createProduct = async (req, res) => {

    try {

        const product = await Product.create(req.body);
        res.status(201).json(product);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }

};

//^ Update Product
const updateProductFunc = async (req, res) => {

    try {

        const id = req.params.id;
        const product = await Product.findByIdAndUpdate(id, req.body, { new: true });

        if (!product) {
            return res.status(404).json({ message: 'Mehsul yoxdur!' });
        }

        res.status(200).json(product);

    } catch (error) {

        if (!res.headersSent) {
            res.status(500).json({ message: error.message });
        }

    }

};

//^ Delete Product
const deleteProductFunc = async (req, res) => {

    try {

        const id = req.params.id;
        const deleteProduct = await Product.findByIdAndDelete(id);

        if (!deleteProduct) {
            return res.status(404).json({ message: 'Silinecek Mehsul yoxdur!' });
        }

        res.status(200).json({ message: 'Mehsul silindi!' });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }

};


module.exports = { getAllProducts, getProductByID, createProduct, updateProductFunc, deleteProductFunc };