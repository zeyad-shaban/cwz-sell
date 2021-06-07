const express = require('express');
const router = express.Router();
const User = require('../models/User');


router.post('/', async (req, res) => {
    const { username, password } = req.body;

    if (!username) return res.status(400).send('Username is required');
    if (!password) return res.status(400).send('Password is required');

    const user = await User.findOne({ username });
    if (!user) return res.status(404).send("User with given username doesn't exist");

    const isMatch = await user.checkPassword(password);
    if (!isMatch) return res.status(400).send('Password not correct for given user');

    return res.send(user.genAuthToken());
});


module.exports = router;