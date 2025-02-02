"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const productSchema = new mongoose_1.default.Schema({
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
        type: mongoose_1.default.Schema.Types.ObjectId,
        required: true,
        ref: "Categorie"
    }
}, {
    timestamps: true
});
const Product = mongoose_1.default.model("Product", productSchema);
exports.default = Product;
