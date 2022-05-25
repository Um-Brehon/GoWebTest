import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import ProductCard from '../ProductCard';
import SHome from './style';

function Home() {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products').then(({ data }) => {
      setProductList(data);
    });
  }, []);

  return (
    <SHome>
      <div className="pageTitle">
        <h3>Products Management</h3>
      </div>
      <div className="listHeader">
        <p className="itemTitle">Product name</p>
        <p className="itemCategory">Category</p>
        <p className="itemPrice">Price</p>
        <p className="itemVAT">(including VAT)</p>
      </div>
      <ul className="productList">
        {productList.map((product) => (
          <li className="productItem">
            <NavLink to={`/product/${product.id}`}>
              <ProductCard
                key={product.id}
                title={product.title}
                price={product.price}
                description={product.description}
                category={product.category}
                image={product.image}
              />
            </NavLink>
          </li>
        ))}
      </ul>
    </SHome>
  );
}

export default Home;
