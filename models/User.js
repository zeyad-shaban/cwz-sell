const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../config')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
        },
    password: {
        type: String,
        required: true,
        min: 5,
        max: 300,
    },
    cart: [{
        type: mongoose.Types.ObjectId,
        ref: 'Product',
    }]
});

userSchema.pre('save', async function (next) {
    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(this.password, salt);

    this.password = hashed;

    next();
});


userSchema.methods.genAuthToken = function () {
    const token = jwt.sign(this.toJSON(), config.SECRET_KEY)
    console.log('token: ', token)
    
    return token;
};

userSchema.methods.checkPassword = function(password) {
    return bcrypt.compare(password, this.password)
}

module.exports = User = mongoose.model('User', userSchema);