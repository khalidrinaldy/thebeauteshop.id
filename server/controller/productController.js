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
        productRating: {
            rating: 0
        },
        productSold: req.body.productSold,
        productImage: req.body.productImage
    });
    product.save()
        .then(data => res.status(200).json({
            message: "New Product Created",
            data: data
        })).catch(error => res.status(400).send(error))
}

exports.edit = (req, res) => {
    Products.findByIdAndUpdate(req.params.id, {
        productName: req.body.productName,
        productCategory: req.body.productCategory,
        productBrand: req.body.productBrand,
        productPrice: req.body.productPrice,
        productSkinType: req.body.productSkinType,
        productSize: req.body.productSize,
        productDescription: req.body.productDescription,
        productSold: req.body.productSold,
        productImage: req.body.productImage
    }).then(data => res.status(200).json({
        message: "Data Edited",
        data: data
    })).catch(error => res.status(404).send(error))
}

exports.delete = (req, res) => {
    Products.findByIdAndDelete(req.params.id)
        .then(data => res.status(200).json({
            message: "Data Deleted",
            data: data
        })).catch(error => res.status(404).send(error))
}

exports.addReview = (req, res) => {
    Products.findByIdAndUpdate(req.params.id, {$push: {'productRating.ratingList': {
        userName: req.body.userName,
        reviewRating: req.body.reviewRating,
        reviewDescription: req.body.reviewDescription
    }}}).then(data => res.status(200).json({
        message: "Review Updated",
        data: data
    })).catch(error => res.send(error))
}