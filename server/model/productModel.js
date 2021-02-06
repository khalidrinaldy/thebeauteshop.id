const mongoose = require('mongoose');
const {Schema} = mongoose;

const productSchema = new Schema({
    productName: {
        type: String,
        required: true
    },
    productCategory: {
        type: String,
    },
    productBrand: {
        type: String,
    },
    productPrice: {
        type: Number,
    },
    productSkinType: {
        type: String,
    },
    productSize: {
        type: Number,
    },
    productDescription: {
        type: String,
    },
    productRating: {
        rating: {
            type: mongoose.Types.Decimal128,
            default: 0
        },
        ratingList: {
            type: Array
        }
    },
    productSold: {
        type: Number,
    },
    productImage: {
        type: String,
    }
});

const Products = module.exports = mongoose.model('Products', productSchema);

module.exports.get = (callback, limit) => {
    Products.find(callback).limit(limit);
}