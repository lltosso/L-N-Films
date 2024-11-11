import axios from "axios";
const apiProductsUrl = "http://localhost:3000/products";

const getAllProducts = async () => {
    const response = await axios.get(apiProductsUrl);
    return response.data;
}

export {
    getAllProducts,
}