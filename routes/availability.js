const express = require("express");
const router = express.Router();
const inventory = require("../data/inventory");
const { validateAvailabilityRequest } = require("../utils/validateRequest");

router.post("/", (req, res) => {
  const error = validateAvailabilityRequest(req.body);
  if (error) {
    return res.status(400).json({ error });
  }

  const { productId, metal, purity, ringSize, diamondCarat } = req.body;
  const key = `${productId}_${metal}_${purity}_${ringSize}_${diamondCarat}`;
  const item = inventory[key];

  if (!item || item.stock <= 0) {
    return res.json({ inStock: false });
  }

  res.json({
    inStock: true,
    deliveryDays: item.deliveryDays
  });
});

module.exports = router;
