import axios from "axios";
import { useEffect } from "react";
import { useState } from "react"
import './Products.css'

const Products = () => {
  const apiProductsUrl = "http://localhost:3000/products";
  const [products, setProducts] = useState([]);

  const getAllProducts = async () => {
    const response = await axios.get(apiProductsUrl);
    console.log(response.data);
    setProducts(response.data)
  }
  useEffect(() => {
    getAllProducts()
  }, [])

  return (
    <div className="container-card">
      {
        products.map((product) =>  (
          <div className="cards">
            <p>{product.title}</p>
            <img src={product.imageurl} alt="" />
          </div>
        ))
      }
      
    </div>
  )
}

export default Products