const jwt = require('jsonwebtoken');
const config = require('../config');
const User = require('../models/User');

module.exports = authMid = async (req, res, next) => {
    const token = req.header('x-auth-token');
    if (!token) return res.status(401).send('Unauthorized, please login first');

    try {
        const user = jwt.verify(token, config.SECRET_KEY);
        req.user = await User.findById(user._id);
        next();
    } catch (err) {
        return res.status(401).send('Invalid token');
    }
};