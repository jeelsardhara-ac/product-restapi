const express = require("express");
const router = express.Router();
const { product, product_id } = require("../Controllers/productData");

router.get("/product", product);
router.get("/product/:id", product_id);

module.exports = router;