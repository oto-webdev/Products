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
const product_model_1 = __importDefault(require("../models/product.model"));
const async_handler_1 = require("../utils/async.handler");
exports.getProducts = (0, async_handler_1.asyncHandler)((request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = yield product_model_1.default.find({}).sort({ createdAt: -1 });
        if (!product) {
            return response.status(404).json({ message: "Prroduct Not Found" });
        }
        return response.status(200).json({ message: "All products", product });
    }
    catch (error) {
        console.log(error);
        return response.status(500).json({ message: "An unknown error occurred" });
    }
}));
exports.getProduct = (0, async_handler_1.asyncHandler)((request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
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
    }
    catch (error) {
        console.log(error);
        return response.status(500).json({ message: "An unknown error occurred" });
    }
}));
exports.updateProduct = (0, async_handler_1.asyncHandler)((request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
    }
    catch (error) {
        console.log(error);
        return response.status(500).json({ message: "An unknown error occurred" });
    }
}));
exports.deleteProduct = (0, async_handler_1.asyncHandler)((request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
    }
    catch (error) {
        console.log(error);
        return response.status(500).json({ message: "An unknown error occurred" });
    }
}));
