import React from 'react';
import '../css/product.css';

function SingleProduct({product, handleAddToCart}) {
    return (
        <div>
      <link rel="stylesheet" href="https://sachinchoolur.github.io/lightslider/dist/css/lightslider.css" />
      <div className="container-fluid mt-2 mb-3">
        <div className="row no-gutters">
          <div className="col-md-5 pr-2">
            <div className="card">
              <div className="demo">
                <ul id="lightSlider">
                  <li > <img src={product.img} alt="Failed" /> </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-7">
            <div className="card">
              <div className="about">
                <span className="font-weight-bold">{product.title} </span>
                <h4 className="font-weight-bold">${product.price}</h4>
              </div>
              <div className="buttons">
                <button className="btn btn-warning btn-long buy" onClick={handleAddToCart}>Add to cart</button>
              </div>
              <hr />
              <div className="product-description">
                <div className="mt-2"> <span className="font-weight-bold">About</span>
                  <p>{product.about}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
}

export default SingleProduct;