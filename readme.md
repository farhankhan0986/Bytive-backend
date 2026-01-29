Bytive Backend Developer Intern Assignment
💎 Overview
This project is a backend service designed for a jewelry Product Detail Page (PDP). It manages product customization, dynamic pricing calculations, and real-time inventory availability checks. The focus is on robust data modeling, clean API design, and centralized error handling.

🚀 Features
Product Configuration: Support for multiple metals and ring sizes.

Dynamic Pricing: Real-time calculation based on metal purity, weight, diamond carats, and making charges.

Exchange Program: Support for exchange discounts (15%).

Inventory Tracking: Check stock and estimated delivery times for specific product combinations.

Validation: Strict input validation with meaningful error responses.

Centralized Error Handling: Consistent JSON error structures across all endpoints.

🛠 Tech Stack
Runtime: Node.js

Framework: Express.js

Storage: In-memory JavaScript objects (for rapid prototyping and assessment).

📂 Project Structure
Plaintext
├── index.js               # Entry point of the application
├── data                   # Mock database (In-memory storage)
│   ├── products.js
│   ├── metals.js
│   ├── diamonds.js
│   └── inventory.js
├── routes                 # API Route definitions
│   ├── products.js
│   ├── pricing.js
│   └── availability.js
├── services               # Business logic & pricing algorithms
│   └── pricingService.js
├── utils                  # Helper functions & middleware
│   └── validateRequest.js
└── README.md
⚙️ Setup Instructions
Clone the repository (or navigate to the project folder).

Install dependencies:

Bash
npm install
Start the server:

Bash
node index.js
Access the API: The server will be running at http://localhost:3000.

🛣 API Endpoints
1. Get Product Details
GET /api/products/:id

Fetches configuration options for a specific product.

2. Calculate Price
POST /api/price

Calculates the total price based on user selection.

Request Body:

JSON
{
  "productId": "ring_aurora",
  "metal": "gold",
  "purity": "18K",
  "weight": 5,
  "diamondCarat": "0.5",
  "exchange": false
}
Response:

JSON
{
  "finalPrice": 57500,
  "breakdown": {
    "metal": 22500,
    "diamond": 30000,
    "making": 5000,
    "exchangeApplied": false
  }
}
3. Check Availability
POST /api/availability

Checks if a specific configuration is in stock.

Request Body:

JSON
{
  "productId": "ring_aurora",
  "metal": "gold",
  "purity": "18K",
  "ringSize": 7,
  "diamondCarat": "0.5"
}
⚖️ Business Logic & Assumptions
Pricing Logic
Metal Price: Rate per gram * Weight

Diamond Price: Based on selected carat weight.

Making Charges: Fixed fee per product.

Exchange: Applies a 15% discount to the total price if exchange is true.

Validation
400 Bad Request: Returned if required fields are missing.

422 Unprocessable Entity: Returned for invalid product IDs or unsupported configurations.

Assumptions
Metal and diamond rates are static for the purpose of this assignment.

Each product is limited to a single diamond.

Authentication and payment processing are out of scope.