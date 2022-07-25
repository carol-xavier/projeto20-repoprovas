import { Request, Response } from "express";
import categoryService from "../services/categoryService.js";
import { CategoryData } from "../utils/types.js"; 

export async function getCategories(req: Request, res: Response) {
    const categories: CategoryData[] = await categoryService.getAllCategories();

    res.send({ categories });
};