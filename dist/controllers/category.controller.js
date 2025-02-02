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
exports.getCategory = exports.getCategories = exports.createCategory = void 0;
const category_model_1 = __importDefault(require("../models/category.model"));
const async_handler_1 = require("../utils/async.handler");
const mongoose_1 = __importDefault(require("mongoose"));
exports.createCategory = (0, async_handler_1.asyncHandler)((request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { name } = request.body;
    if (!name) {
        return response.status(400).json({ message: "Category name is required" });
    }
    try {
        const category = yield category_model_1.default.create({ name });
        return response.status(201).json({
            message: "New Category Created",
            category
        });
    }
    catch (error) {
        console.log(error);
        return response.status(500).json({ message: "An unknown error occurred" });
    }
}));
exports.getCategories = (0, async_handler_1.asyncHandler)((request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const category = yield category_model_1.default.find({}).sort({ createdAt: -1 });
        return response.status(200).json({ message: "All Categories", category });
    }
    catch (error) {
        console.log(error);
        return response.status(500).json({ message: "An unknown error occurred" });
    }
}));
exports.getCategory = (0, async_handler_1.asyncHandler)((request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const id = request.params.id;
    if (!mongoose_1.default.Types.ObjectId.isValid(id)) {
        return response.status(400).json({ message: "Invalid Id" });
    }
    try {
        const categoryId = yield category_model_1.default.findById(id);
        if (!categoryId) {
            return response.status(404).json({ message: "Category Not Found" });
        }
        return response.status(200).json({ message: "Found Category", categoryId });
    }
    catch (error) {
        console.log(error);
        return response.status(500).json({ message: "An unknown error occurred" });
    }
}));
