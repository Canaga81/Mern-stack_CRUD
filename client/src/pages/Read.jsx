import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Read = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:9009/api/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => alert("Mehsulun icine daxil oluna bilinmedi", err));
  }, [id]);

  return (
    <div className="product_in">
      <h1 className="head_name">Mehsul haqqinda etrafli melumat</h1>

      <div className="product_in_info">
        <div className="card_info">
          <h3 className="prdc_name">Adi: {product.productName}</h3>
          <span className="prdc_price">Qiymeti: {product.productPrice}</span>
          <h4 className="prdc_quantity">Sayi: {product.productQuantity}</h4>
          <p className="prdc_description">
            Haqqinda: {product.productDescription}
          </p>
        </div>

        <div>
          <img src={product.productImage} alt={product.productName} />
        </div>
      </div>

      <div className="btn_cont">
        <Link to={"/"}>
          <button className="create_button">Geri Qayit</button>
        </Link>
      </div>
    </div>
  );
};

export default Read;
