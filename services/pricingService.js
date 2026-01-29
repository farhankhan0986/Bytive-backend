const products = require("../data/products");
const metals = require("../data/metals");
const diamonds = require("../data/diamonds");

function calculatePrice({
  productId,
  metal,
  purity,
  weight,
  diamondCarat,
  exchange = false,
}) {
  const product = products[productId];

  if (!product) {
    throw new Error("Invalid product");
  }

  const metalData = metals[metal];
  if (!metalData || !metalData[purity]) {
    throw new Error("Invalid metal or purity");
  }

  const diamond = diamonds[diamondCarat];
  if (diamondCarat && !diamond) {
    throw new Error("Unsupported diamond size");
  }

  const metalPrice = metalData[purity].ratePerGram * weight;
  const diamondPrice = diamond ? diamond.price : 0;
  const makingCharges = product.baseMakingCharge;

  let finalPrice = metalPrice + diamondPrice + makingCharges;

  if (exchange) {
    finalPrice = finalPrice * 0.85; //15% exchange discount
  }

  return {
    finalPrice: Math.round(finalPrice),
    breakdown: {
      metal: metalPrice,
      diamond: diamondPrice,
      making: makingCharges,
      exchangeApplied: exchange,
    },
  };
}

module.exports = {
  calculatePrice,
};
