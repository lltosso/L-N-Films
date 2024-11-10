import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Products from "../pages/products/Products"
import CreateProduct from "../pages/createProduct/CreateProduct";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "products",
                element: <Products/>
            },
            {
                path: "createProduct",
                element: <CreateProduct/>
            }
        ]

    }
])