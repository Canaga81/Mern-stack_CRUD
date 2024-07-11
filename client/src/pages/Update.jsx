import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Update = () => {

  const { id } = useParams();

  const [item, setItem] = useState({
    productName: "",
    productImage: "",
    productPrice: "",
    productQuantity: "",
    productDescription: "",
  });

  useEffect(() => {
    axios
      .get(`http://localhost:9009/api/products/${id}`)
      .then((res) => setItem(res.data))
      .catch((err) => alert("Mehsulun icine daxil oluna bilinmedi", err));
  }, []);

  const updateProduct = async () => {
    try {
      axios.put(`http://localhost:9009/api/products/${id}`, item);
      alert("Mehsula Duzelis Edildi !");
      setItem({
        productName: "",
        productImage: "",
        productPrice: "",
        productQuantity: "",
        productDescription: "",
      });
    } catch (error) {
      alert("Xetadan dolayi Mehsul yaradila bilmedi !", error.message);
    }
  };

  return (
    <div className="products">
      <h1 className="head_name">Mehsul Yarat</h1>

      <form>
        <div className="form_container">
          <input
            type="text"
            placeholder="Mehsulun adini daxil edin"
            required
            onChange={(e) => setItem({ ...item, productName: e.target.value })}
            value={item.productName}
          />
          <input
            type="text"
            placeholder="Mehsulun seklini daxil edin"
            required
            onChange={(e) => setItem({ ...item, productImage: e.target.value })}
            value={item.productImage}
          />
          <input
            type="text"
            placeholder="Mehsulun qiymetini daxil edin"
            required
            onChange={(e) => setItem({ ...item, productPrice: e.target.value })}
            value={item.productPrice}
          />
          <input
            type="text"
            placeholder="Mehsulun sayini daxil edin"
            required
            onChange={(e) =>
              setItem({ ...item, productQuantity: e.target.value })
            }
            value={item.productQuantity}
          />
          <textarea
            type="text"
            placeholder="Mehsulun haqqinda melumat daxil edin"
            required
            onChange={(e) =>
              setItem({ ...item, productDescription: e.target.value })
            }
            value={item.productDescription}
          />
        </div>

        <div className="create_buttons">
          <Link to={"/"}>
            <button onClick={updateProduct}>Mehsulda Duzelisler et</button>
          </Link>
          <Link to={"/"}>
            <button>Geri Qayit</button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Update;