"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProduct = exports.updateProduct = exports.createProduct = exports.getProduct = exports.getProducts = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const product_model_1 = __importDefault(require("../models/product.model"));
const async_handler_1 = require("../utils/async.handler");
exports.getProducts = (0, async_handler_1.asyncHandler)((request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield product_model_1.default.find({}).sort({ createdAt: -1 });
        return response.status(200).json({ message: "All products", products });
    }
    catch (error) {
        console.log(error);
        return response.status(500).json({ message: "An unknown error occurred" });
    }
}));
exports.getProduct = (0, async_handler_1.asyncHandler)((request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const id = request.params.id;
    if (!mongoose_1.default.Types.ObjectId.isValid(id)) {
        return response.status(400).json({ message: "Invalid Id" });
    }
    try {
        const product = yield product_model_1.default.findById(id);
        if (!product) {
            return response.status(404).json({ message: "Product Not Found" });
        }
        return response.status(200).json({ message: "Found Product", product });
    }
    catch (error) {
        console.log(error);
        return response.status(500).json({ message: "An unknown error occurred" });
    }
}));
exports.createProduct = (0, async_handler_1.asyncHandler)((request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, description, price, image, stock, category } = request.body;
    if (!name || !description || !price || !image || !stock || !category) {
        return response.status(400).json({ message: "All fields are required" });
    }
    try {
        const product = yield product_model_1.default.create({ name, description, price, image, stock, category });
        return response.status(201).json({ message: "New Product", product });
    }
    catch (error) {
        console.log(error);
        return response.status(500).json({ message: "An unknown error occurred" });
    }
}));
exports.updateProduct = (0, async_handler_1.asyncHandler)((request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const id = request.params.id;
    if (!mongoose_1.default.Types.ObjectId.isValid(id)) {
        return response.status(400).json({ message: "Invalid Id" });
    }
    try {
        const product = yield product_model_1.default.findByIdAndUpdate(id, request.body, { new: true });
        if (!product) {
            return response.status(404).json({ message: "Product Not Found" });
        }
        return response.status(200).json({ message: "Updated Product", product });
    }
    catch (error) {
        console.log(error);
        return response.status(500).json({ message: "An unknown error occurred" });
    }
}));
exports.deleteProduct = (0, async_handler_1.asyncHandler)((request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const id = request.params.id;
    if (!mongoose_1.default.Types.ObjectId.isValid(id)) {
        return response.status(400).json({ message: "Invalid Id" });
    }
    try {
        const product = yield product_model_1.default.findByIdAndDelete(id);
        if (!product) {
            return response.status(404).json({ message: "Product Not Found" });
        }
        return response.status(200).json({ message: "Deleted Product", product });
    }
    catch (error) {
        console.log(error);
        return response.status(500).json({ message: "An unknown error occurred" });
    }
}));
