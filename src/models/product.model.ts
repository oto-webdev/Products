import mongoose from "mongoose";

const productSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
        trim: true,
    },

    description: {
        type: String,
        required: true
    },

    price: {
        type: Number,
        required: true,
        min: 0
    },

    image: {
        type: String,
        required: true
    },

    stock: {
        type: Number,
        default: 0
    },

    category: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Categorie"
    }

}, {
    timestamps: true
})

const Product = mongoose.model("Product", productSchema)

export default Product;