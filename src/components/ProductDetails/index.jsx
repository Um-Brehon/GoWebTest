import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import backArrow from '../../assets/backArrow.png';
import SProductDetails from './style';

function ProductDetails() {
  const [productDetails, setProductDetails] = useState({});
  const { id } = useParams();
  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`).then(({ data }) => {
      setProductDetails(data);
    });
  }, [id]);

  return (
    <SProductDetails>
      {/* PRODUCT NAME */}
      <div className="productHead">
        <div className="arrowDiv">
          <NavLink to="/">
            <button className="arrowBtn" type="button">
              <img src={backArrow} alt="back" />
            </button>
          </NavLink>
        </div>
        <div className="productTitle">
          <h3> {productDetails.title}</h3>
        </div>
      </div>
      {/* PRODUCT DETAILS */}
      <div className="productDetails">
        {/* PICTURE */}
        <div className="productPictureBox">
          <img
            className="productPicture"
            src={productDetails.image}
            alt="productPicture"
          />
        </div>
        {/* INFOS */}
        <div className="productRightBox">
          <div className="productText">
            {/* DESCRIPTION */}
            <div className="productDescription">
              <h3>Description</h3>
              <p>{productDetails.description}</p>
            </div>
            {/* CATEGORY */}
            <div className="productCategory">
              <h3>Category</h3>
              <p>{productDetails.category}</p>
            </div>
          </div>
          {/* PRICE */}
          <div className="productPriceBox">
            <div className="productPrice">
              <h3>Price</h3>
              <p className="priceLabel">{productDetails.price}€</p>
            </div>
            <div className="productVAT">
              <p>Price (including VAT): </p>
            </div>
          </div>
          {/* UPDATE BUTTON */}
          <button className="updateBtn" type="button">
            Update product
          </button>
        </div>
      </div>
    </SProductDetails>
  );
}

export default ProductDetails;
