import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Create = () => {

    const [item, setItem] = useState({
        productName: "",
        productImage: "",
        productPrice: "",
        productQuantity: "",
        productDescription: "",
    });

    const addHandler = async () => {
        
        try {
            axios.post('http://localhost:9009/api/products', item);
            alert("Mehsul Yaradildi !");
            setItem( { productName: "", productImage: "", productPrice: "", productQuantity: "", productDescription: "" } )
        } catch (error) {
            alert("Xetadan dolayi Mehsul yaradila bilmedi !", error.message);
        }

    }

  return (
    <div className='products'>

            <h1 className='head_name'>Mehsul Yarat</h1>

            <form>

                <div className='form_container'>
                    <input type="text" placeholder='Mehsulun adini daxil edin' required onChange={(e) => setItem({...item, productName: e.target.value})} value={item.productName}/>
                    <input type="text" placeholder='Mehsulun seklini daxil edin' required onChange={(e) => setItem({...item, productImage: e.target.value})} value={item.productImage}/>
                    <input type="text" placeholder='Mehsulun qiymetini daxil edin' required onChange={(e) => setItem({...item, productPrice: e.target.value})} value={item.productPrice}/>
                    <input type="text" placeholder='Mehsulun sayini daxil edin' required onChange={(e) => setItem({...item, productQuantity: e.target.value})} value={item.productQuantity}/>
                    <textarea type="text" placeholder='Mehsulun haqqinda melumat daxil edin' required onChange={(e) => setItem({...item, productDescription: e.target.value})} value={item.productDescription}/>
                </div>
                
                <div className='create_buttons'>
                    <Link to={'/'}>
                        <button onClick={addHandler}>Mehsul Yarat</button>
                    </Link>
                    <Link to={'/'}>
                        <button>Geri Qayit</button>
                    </Link>
                </div>
                
            </form>

    </div>
  )
}

export default Create;