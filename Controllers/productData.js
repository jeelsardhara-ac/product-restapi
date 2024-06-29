const productData = require("../Json/productData.json");

exports.product = async function(req, res) {
    return res.json(productData);
}

exports.product_id = async function(req, res) {
    const id = req.params.id;
    const user = productData.find(user => user.id === id);
    return res.json(user);
}