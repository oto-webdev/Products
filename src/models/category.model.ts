import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
        unique: true, 
        trim: true
    }

}, {
    timestamps: true
})

const Category = mongoose.model("Categorie", categorySchema)

export default Category;