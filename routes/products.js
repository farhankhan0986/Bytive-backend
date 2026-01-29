const express = require("express");
const router = express.Router();
const products = require("../data/products");

router.get("/:id", (req, res)=> {
    const product = products[req.params.id];
    if(!product) {
        return res.status(404).json({ error: "Product not found" });
    }
    res.json(product);
})

module.exports = router;