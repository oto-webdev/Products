import { Request, Response } from 'express'
import Category from "../models/category.model";
import { asyncHandler } from "../utils/async.handler";
import mongoose from 'mongoose';

export const createCategory = asyncHandler(async (request: Request, response: Response) => {
    const { name } = request.body;  
    if (!name) {
        return response.status(400).json({ message: "Category name is required" }); 
    }

    try {
        const category = await Category.create({ name }); 

        return response.status(201).json({
            message: "New Category Created",
            category
        });
    } catch (error) {
        console.log(error);
        return response.status(500).json({ message: "An unknown error occurred" });
    }
});

export const getCategories = asyncHandler(async (request: Request, response: Response) => {
    try{
        const category = await Category.find({}).sort({ createdAt: -1 })
        return response.status(200).json({ message: "All Categories", category })
    }catch(error) {
        console.log(error)
        return response.status(500).json({ message: "An unknown error occurred" })
    }
})

export const getCategory = asyncHandler(async (request: Request, response: Response) => {
    const id = request.params.id;
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return response.status(400).json({ message: "Invalid Id" })
    }

    try{
        const categoryId = await Category.findById(id)
        if(!categoryId) {
            return response.status(404).json({ message: "Category Not Found" })
        }

        return response.status(200).json({ message: "Found Category", categoryId })
    }catch(error) {
        console.log(error)
        return response.status(500).json({ message: "An unknown error occurred" })
    }
})