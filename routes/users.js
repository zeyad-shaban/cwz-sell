const express = require('express');
const router = express.Router();
const User = require('../models/User');


router.post('/', async (req, res) => {
    const { username, password } = req.body;

    let user = await User.findOne({ username });

    if (user) return res.status(400).send('Username already taken');

    user = new User({ username, password });
    await user.save();
    return res.send(await user.genAuthToken());
});


module.exports = router;