const express = require("express");
const router = express.Router();
const { calculatePrice } = require("../services/pricingService");
const { validatePriceRequest } = require("../utils/validateRequest");

router.post("/", (req, res, next) => {
  const error = validatePriceRequest(req.body);
  if (error) {
    return res.status(400).json({ error });
  }

  try {
    const result = calculatePrice(req.body);
    res.json(result);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
