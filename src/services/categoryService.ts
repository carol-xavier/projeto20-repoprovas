import categoryRepository from "../repositories/categoryRepository.js";

async function getAllCategories () {
    const categories = await categoryRepository.findCategories();

    return categories;
};

const categoryService = {
    getAllCategories
};

export default categoryService;
