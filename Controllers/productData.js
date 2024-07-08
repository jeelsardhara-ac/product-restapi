const productData = require("../Json/productData.json");

exports.product = async function(req, res) {
    return res.json(productData);
}

exports.product_id = async function(req, res) {
    const id = req.params.id;
    const Product = Product.find(Product => Product.id === id);

    return res.json(Product);
}