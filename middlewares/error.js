module.exports = errorMid = (err, req, res) => {
    console.log(err);
    res.status(500).send('Something went wrong');
};