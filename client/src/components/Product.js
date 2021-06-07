import React from 'react';
import { Link } from 'react-router-dom';

function Product({product, removeProduct}) {
    return (
        <div className="col-md-4">
            <div className="card">
                <img src={product.img} className="card-img-top" alt="Failed" />
                <div className="card-body">
                    <div className="d-flex justify-content-between">
                        <span className="font-weight-bold">{product.title}</span> <span className="font-weight-bold">${product.price}</span>
                    </div>
                    <p className="card-text mb-1 mt-1">{product.about}</p>
                </div>
                <hr />
                <div className="card-body">
                    <div className="text-right buttons">
                        <Link to={`/products/${product._id}`} className="btn btn-dark">Show</Link>
                        {removeProduct && <button className="btn btn-danger" onClick={() => removeProduct(product._id)}>Remove</button>}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product;