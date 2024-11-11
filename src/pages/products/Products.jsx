import { useEffect } from "react";
import { useState } from "react"
import './Products.css'

import { Link } from "react-router-dom";

const Products = () => {
  const apiProductsUrl = "http://localhost:3000/products";
  const [products, setProducts] = useState([]);

  const getAllProducts = async () => {
    const response = await getAllProducts(apiProductsUrl);
    console.log(response.data);
    setProducts(response.data)
  }
  useEffect(() => {
    getAllProducts()
  }, [])

  return (
    <>
      <Link to={"/createProduct"}><button>Añadir producto</button></Link>
      <div className="container-card">
        {
          products.map((product) => (
            <div className="cards" key={product.id}>
              <p>{product.id}</p>
              <img src={product.imageurl} alt="" />
            </div>

          ))
        }

      </div >
    </>
  )
}

export default Products