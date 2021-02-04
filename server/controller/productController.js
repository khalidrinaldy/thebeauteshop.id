const Products = require('../model/productModel');
const mongoose = require('mongoose');

exports.getAll = (req, res) => {
    Products.find()
        .then(data => res.status(200).send(data))
        .catch(error => res.status(404).send(error))
}

exports.getOne = (req, res) => {
    Products.findById(req.params.id)
        .then(data => res.status(200).send(data))
        .catch(error => res.status(404).send("404 Not Found"))
}

exports.create = (req, res) => {
    const product = new Products({
        productName: req.body.productName,
        productCategory: req.body.productCategory,
        productBrand: req.body.productBrand,
        productPrice: req.body.productPrice,
        productSkinType: req.body.productSkinType,
        productSize: req.body.productSize,
        productDescription: req.body.productDescription,
        productSold: req.body.productSold,
        productImage: req.body.productImage
    });
    product.save()
        .then(data => res.status(200).json({
            message: "New Product Created",
            data: data
        })).catch(error => res.status(400).send(error))
}

