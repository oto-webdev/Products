import mongoose from "mongoose";
import { Request, Response } from 'express';
import Product from "../models/product.model";
import { asyncHandler } from "../utils/async.handler";

export const getProducts = asyncHandler(async (request: Request, response: Response) => {
    try {
        const products = await Product.find({}).sort({ createdAt: -1 });

        return response.status(200).json({ message: "All products", products });
    } catch (error) {
        console.log(error);
        return response.status(500).json({ message: "An unknown error occurred" });
    }
});

export const getProduct = asyncHandler(async (request: Request, response: Response) => {
    const id = request.params.id;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return response.status(400).json({ message: "Invalid Id" });
    }

    try {
        const product = await Product.findById(id);
        if (!product) {
            return response.status(404).json({ message: "Product Not Found" });
        }

        return response.status(200).json({ message: "Found Product", product });
    } catch (error) {
        console.log(error);
        return response.status(500).json({ message: "An unknown error occurred" });
    }
});

export const createProduct = asyncHandler(async (request: Request, response: Response) => {
    const { name, description, price, image, stock, category } = request.body;
    if (!name || !description || !price || !image || !stock || !category) {
        return response.status(400).json({ message: "All fields are required" });
    }

    try {
        const product = await Product.create({ name, description, price, image, stock, category });
        return response.status(201).json({ message: "New Product", product });
    } catch (error) {
        console.log(error);
        return response.status(500).json({ message: "An unknown error occurred" });
    }
});

export const updateProduct = asyncHandler(async (request: Request, response: Response) => {
    const id = request.params.id;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return response.status(400).json({ message: "Invalid Id" });
    }

    try {
        const product = await Product.findByIdAndUpdate(id, request.body, { new: true });
        if (!product) {
            return response.status(404).json({ message: "Product Not Found" });
        }

        return response.status(200).json({ message: "Updated Product", product });
    } catch (error) {
        console.log(error);
        return response.status(500).json({ message: "An unknown error occurred" });
    }
});

export const deleteProduct = asyncHandler(async (request: Request, response: Response) => {
    const id = request.params.id;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return response.status(400).json({ message: "Invalid Id" });
    }

    try {
        const product = await Product.findByIdAndDelete(id);
        if (!product) {
            return response.status(404).json({ message: "Product Not Found" });
        }

        return response.status(200).json({ message: "Deleted Product", product });
    } catch (error) {
        console.log(error);
        return response.status(500).json({ message: "An unknown error occurred" });
    }
});
