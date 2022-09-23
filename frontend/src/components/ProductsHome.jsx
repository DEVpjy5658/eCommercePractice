import axios from 'axios';
import React, {useState, useEffect } from 'react'
// import { products } from "../data"
import ProductHome from './ProductHome'
import '../styles/productshome.css';

const ProductsHome = () => {

  const [products, setProducts] = useState([]) //default is empty database or json, no products

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('/api/products');
      setProducts(result.data);
    }
    fetchData();
  }, []);

  return (
    <div className='hps-container'>
        <h2>Latest Products</h2>
        <div className="hps-row">

            {products.slice(-8).map((item) => (
              <ProductHome item={item} key={item._id}/>
            ))}
        </div>
    </div>
  )
}

export default ProductsHome
