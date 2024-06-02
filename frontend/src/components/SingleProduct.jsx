import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';


function SingleProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:4000/apii/getone/${id}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((error) => {
        console.error('Error fetching product:', error);
      });
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-details">
      <div className="product-images">
        <div className="thumbnail-images">
          {product.images && product.images.map((image, index) => (
            <img key={index} src={image} alt={product.name} className="thumbnail" />
          ))}
        </div>
        <img src={product.picture} alt={product.name} className="main-image" />
      </div>
      <div className="product-info">
        <h1 className="product-title">{product.name}</h1>
        <div className="reviews">
          <span className="rating">⭐⭐⭐⭐⭐</span>
          <span className="review-count">(150 Reviews)</span>
          <span className="stock-status">{product.stock > 0 ? 'In Stock' : 'Out of Stock'}</span>
        </div>
        <p className="product-price">${product.price}</p>
        <p className="product-description">{product.description}</p>
        <div className="product-options">
          <div className="colors">
            <span>Colours:</span>
            
            {product.colors && product.colors.map((color, index) => (
              <button key={index} className="color-option" style={{ backgroundColor: color }}></button>
            ))}
          </div>
          <div className="sizes">
            <span>Size:</span>
            
            {product.sizes && product.sizes.map((size, index) => (
              <button key={index} className="size-option">{size}</button>
            ))}
          </div>
        </div>
        <div className="product-actions">
          <div className="quantity-selector">
            <button>-</button>
            <input type="text" value="1" readOnly />
            <button>+</button>
          </div>
          <button className="buy-now-button">Buy Now</button>
          <button className="wishlist-button">❤</button>
        </div>
        <div className="delivery-info">
          <div className="free-delivery">
            <span>🚚 Free Delivery</span>
            <p>Enter your postal code for Delivery Availability</p>
          </div>
          <div className="return-delivery">
            <span>🔄 Return Delivery</span>
            <p>Free 30 Days Delivery Returns. <a href="#">Details</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
