import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const getAllProducts = async () => {
      try {
        const res = await axios.get("http://localhost:9009/api/products");
        setProducts(res.data);
        console.log(res.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    getAllProducts();

  }, []);

  const deleteHandler = async (id) => {

    try {
        await axios.delete(`http://localhost:9009/api/products/${id}`);
        setProducts((prev) => prev.filter((item) => item._id !== id));
        alert("Mehsul Silindi !");
    } catch (error) {
        console.log("Mehsul Silinmedi !");
    }

  }

  return (

    <div className="products">

        <h1 className="head_name">CNG Restaurant</h1>

      <div className="btn_cont">

        <Link to={'/create'} >
            <button className="create_button">Create Product</button>
        </Link>

      </div>

      <div className="cards_container">

        {loading ? (
          <h1 className="loading">Loading...</h1>
        ) : (
          products &&
          products.map((product) => (
            <div className="card" key={product._id}>

              <div className="image_cont">
                <img
                  className="prdc_image"
                  src={product.productImage}
                  alt={product.productName}
                />
              </div>

              <div className="card_info">
                <h3 className="prdc_name">Adi: {product.productName}</h3>
                <span className="prdc_price">
                  Qiymeti: {product.productPrice} AZN
                </span>
                <h4 className="prdc_quantity">
                  Sayi: {product.productQuantity}
                </h4>
                <p className="prdc_description">
                  Haqqinda: {product.productDescription.substring(0, 18)}...
                </p> 
              </div>

              <div className="card_btns_cont">
                <Link to={`/route/${product._id}`}>
                    <button className="card_button">🎯</button>
                </Link>
                <Link to={`/update/${product._id}`}>
                    <button className="card_button">🖊️</button>
                </Link>
                <button onClick={() => deleteHandler(product._id)} className="card_button">❌</button>
              </div>

            </div>

          ))

        )}

      </div>

    </div>

  );

};

export default Home;