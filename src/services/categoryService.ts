import categoryRepository from "../repositories/categoryRepository.js";

async function getAllCategories () {
    const categories = await categoryRepository.findCategories();
    const data = getCategoriesArray(categories);
    return data;
};

const categoryService = {
    getAllCategories
};

export default categoryService;


function getCategoriesArray(categories) {
    return categories.map((category) => category.name);
};