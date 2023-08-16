import React, { useEffect, useState } from "react";
import { getAllProducts } from "../../ApiService/api";
import "./Home.css";

function Home() {
  const [products, setProduct] = useState([]);
  useEffect(() => {
    const fetchAllProducts = async () => {
      const data = await getAllProducts();
      console.log(data, "data");
      setProduct(data);
    };
    fetchAllProducts();
  }, []);
  return (
    <div className="product-grid">


      {products.map((product) => (
        <div className="product" key={product.id}>
          <img src={product.image} alt="alternative"></img>
          <h2>{product.title}</h2>
          <p>
            <span className="price">{product.price}</span>
          </p>
          <button>Product Details</button>
        </div>
      ))}



    </div>
  );
}

export default Home;
