import React, { useState, useEffect } from 'react';
import cartApi from '../api/cart';
import Product from '../components/Product';
import { toast } from 'react-toastify';

function CartScreen(props) {
    const [products, setProducts] = useState([]);

    const renderPaypal = async () => {
        const {data: total} = await cartApi.getTotal();
        window.paypal.Buttons({
            createOrder: function (data, actions) {
                return actions.order.create({
                    purchase_units: [{
                        amount: {
                            value: total,
                        }
                    }]
                });
            },
            onApprove: function (data, actions) {
                return actions.order.capture().then(function (details) {
                    toast.success('Transaction completed by ' + details.payer.name.given_name);
                    setProducts([])
                    cartApi.deleteAllProducts()
                });
            }
        }).render('#paypal-btn');
    };

    useEffect(() => {
        (async () => {
            const { data } = await cartApi.getProducts();
            setProducts(data);

            if (data.length > 0) renderPaypal();
        })();
    }, []);

    const handleRemoveProduct = async (id) => {
        await cartApi.deleteProduct(id);
        setProducts(products.filter(p => p._id !== id));
    };

    return (
        <div className="row g-3">
            <div id="paypal-btn"></div>
            {products.map(product => (
                <Product key={product._id} product={product} removeProduct={handleRemoveProduct} />
            ))}
        </div>
    );
}

export default CartScreen;