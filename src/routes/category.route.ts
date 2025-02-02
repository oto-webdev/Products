import express from 'express'
import { createCategory, getCategories, getCategory } from '../controllers/category.controller'

const router = express.Router()

router.get("/", getCategories)
router.post("/", createCategory)
router.get("/:id", getCategory)

export default router;