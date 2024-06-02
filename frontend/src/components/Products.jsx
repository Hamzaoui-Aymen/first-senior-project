import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import SingleProduct from './SingleProduct';
import Category from '../component/category';

function Products({ prod=[], switchView, addToCart }) {
  const navigate = useNavigate();
  const sliderRef = useRef(null);
  const [isGridView, setIsGridView] = useState(false);

  const scrollLeft = () => {
    sliderRef.current.scrollLeft -= 200;
  };

  const scrollRight = () => {
    sliderRef.current.scrollLeft += 200;
  };

  const handleViewAllProducts = () => {
    setIsGridView(true);
  };

  return (
    <div className="products-container">
      {!isGridView ? (
        <>
          <button className="slider-button left" onClick={scrollLeft}>&lt;</button>
          <div className="slider" ref={sliderRef}>
            {prod.map((e) => (
              <div className="product-card" key={e.id}>
                <img
                  src={e.picture}
                  alt="Product"
                  className="product-image"
                  onClick={() => {navigate(`/SingleProduct/${e.id}`),<SingleProduct prod={e}/>}}
                />
                <h2 className="product-name">{e.name}</h2>
                <p className="card-item-price">Price: ${e.price}</p>
                <div className="product-card-buttons">
                  <button onClick={() => {
                    console.log('clicked', e);
                    if (addToCart) {
                      addToCart({ name: e.name, price: e.price, picture: e.picture });
                    }
                  }}>
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
          <button className="slider-button right" onClick={scrollRight}>&gt;</button>
        </>
      ) : (
        <div className="grid-view">
          {prod.map((e) => (
            <div className="product-card" key={e.id}>
              <img
                src={e.picture}
                alt="Product"
                className="product-image"
                onClick={() => navigate(`/oneProduct/${e.id}`)}
              />
              <h2 className="product-name">{e.name}</h2>
              <p className="card-item-price">Price: ${e.price}</p>
              <div className="product-card-buttons">
                <button onClick={() => {
                  console.log('clicked', e);
                  if (addToCart) {
                    addToCart({ name: e.name, price: e.price, picture: e.picture });
                  }
                }}>
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      {!isGridView && (
        <button className="view-all-button" onClick={handleViewAllProducts}>
          View All Products
        </button>
      )}
      <div><Category/></div>
    </div>
  );
}

Products.propTypes = {
  prod: PropTypes.array.isRequired,
  switchView: PropTypes.func,
  addToCart: PropTypes.func,
};

export default Products;
