function validatePriceRequest(body) {
  const requiredFields = [
    "productId",
    "metal",
    "purity",
    "weight",
    "diamondCarat"
  ];

  for (const field of requiredFields) {
    if (!body[field]) {
      return `Missing required field: ${field}`;
    }
  }

  if (typeof body.weight !== "number" || body.weight <= 0) {
    return "Weight must be a positive number";
  }

  return null;
}

function validateAvailabilityRequest(body) {
  const requiredFields = [
    "productId",
    "metal",
    "purity",
    "ringSize",
    "diamondCarat"
  ];

  for (const field of requiredFields) {
    if (!body[field]) {
      return `Missing required field: ${field}`;
    }
  }

  return null;
}

module.exports = {
  validatePriceRequest,
  validateAvailabilityRequest
};
