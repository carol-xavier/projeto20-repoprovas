import prisma from "../config/database.js";

async function findCategories() {
    return await prisma.category.findMany({
        select:{
            id:true,
            name:true
        }
    });
};

const categoryRepository = {
    findCategories
};

export default categoryRepository;
