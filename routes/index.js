module.exports = app => {
    app.use('/api/users', require('./users'));
    app.use('/api/auth', require('./auth'));
    app.use('/api/products', require('./products'));
    app.use('/api/cart', require('./cart'))
}