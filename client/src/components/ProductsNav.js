import React from 'react';
import '../css/productsNav.css';
import { Link } from 'react-router-dom';

function ProductsNav({ products, current }) {
    if (!products || products.length < 0) return null;

    return (
        <div>
            <div className="bbb_viewed">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="bbb_main_container">
                                <div className="bbb_viewed_title_container">
                                    <h3 className="bbb_viewed_title">Best selling products</h3>
                                    <div className="bbb_viewed_nav_container">
                                        <div className="bbb_viewed_nav bbb_viewed_prev"><i className="fas fa-chevron-left" /></div>
                                        <div className="bbb_viewed_nav bbb_viewed_next"><i className="fas fa-chevron-right" /></div>
                                    </div>
                                </div>
                                <div className="bbb_viewed_slider_container">
                                    <div className="owl-carousel owl-theme bbb_viewed_slider">

                                        {products.map(product => product._id !== current._id && (
                                            <div className="owl-item" key={product._id}>
                                                <div className="bbb_viewed_item discount d-flex flex-column align-items-center justify-content-center text-center">
                                                    <div className="bbb_viewed_image"><img src={product.img} alt="Failed" /></div>
                                                    <div className="bbb_viewed_content text-center">
                                                        <div className="bbb_viewed_price">${product.price}</div>
                                                        <div className="bbb_viewed_name"><Link to={`/products/${product._id}`}>{product.title}</Link></div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductsNav;