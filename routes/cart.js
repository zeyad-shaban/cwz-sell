const express = require('express');
const router = express.Router();
const authMid = require('../middlewares/auth');
const Product = require('../models/Product');
const User = require('../models/User');


router.get('/', authMid, async (req, res) => {
    let products = [];

    for (product of req.user.cart)
        products.push(await Product.findById(product._id));

    return res.send(products);
});

router.put('/add', authMid, async (req, res) => {
    const { id } = req.body;
    if (!id) return res.status(400).send('Product id is required');

    const product = await Product.findById(id);
    if (!product) return res.status(404).send('The product you are looking for is not found');

    if (req.user.cart.includes(product._id)) return res.status(400).send('The product is already in your cart');

    const user = await User.findByIdAndUpdate(req.user._id, {
        cart: [...req.user.cart, product._id]
    }, { new: true, useFindAndModify: false });

    return res.send(user);
});

router.delete('/:id', authMid, async (req, res) => {
    const { id } = req.params;
    req.user.cart = req.user.cart.filter(p => String(p) !== id);
    return res.send(await req.user.save());
});

router.delete('/', authMid, async (req, res) => {
    req.user.cart = [];
    return res.send(await req.user.save());
});

router.get('/total', authMid, async (req, res) => {
    let total = 0;

    let products = [];
    for (product of req.user.cart) products.push(await Product.findById(product));

    for (product of products) total += product.price;

    return res.send(String(total));
});


module.exports = router;