# Bytive Backend Developer Intern Assignment

## Overview
This project is a backend service for a jewellery Product Detail Page.  
You use this service to handle product customization, pricing, and inventory checks.

The project focuses on backend logic, data modeling, and API clarity.  
Frontend work, authentication, and payments are intentionally excluded.

---

## Features
- Product configuration with multiple metals and ring sizes
- Dynamic pricing based on metal purity, weight, diamond carat, and making charges
- Exchange support with a fixed 15 percent discount
- Inventory checks with stock status and delivery timelines
- Input validation with clear error responses
- Centralized error handling across all APIs

---

## Tech Stack
- Node.js
- Express.js
- In memory JavaScript objects for data storage

---

## Project Structure
├── index.js
├── data
│ ├── products.js
│ ├── metals.js
│ ├── diamonds.js
│ └── inventory.js
├── routes
│ ├── products.js
│ ├── pricing.js
│ └── availability.js
├── services
│ └── pricingService.js
├── utils
│ └── validateRequest.js
└── README.md


---

## Setup Instructions
1. Navigate to the project directory.
2. Install dependencies.
npm install

3. Start the server.
node index.js

4. Access the API at:
http://localhost:3000


---

## API Endpoints

### Get Product Details
GET `/api/products/:id`

Example:
GET /api/products/ring_aurora


---

### Calculate Price
POST `/api/price`

Request body:
```json
{
  "productId": "ring_aurora",
  "metal": "gold",
  "purity": "18K",
  "weight": 5,
  "diamondCarat": "0.5",
  "exchange": false
}
Response:

{
  "finalPrice": 57500,
  "breakdown": {
    "metal": 22500,
    "diamond": 30000,
    "making": 5000,
    "exchangeApplied": false
  }
}
Check Availability
POST /api/availability

Request body:

{
  "productId": "ring_aurora",
  "metal": "gold",
  "purity": "18K",
  "ringSize": 7,
  "diamondCarat": "0.5"
}
Response:

{
  "inStock": true,
  "deliveryDays": 14
}
Validation and Error Handling
Missing required fields return status code 400

Invalid products or unsupported configurations return status code 422

Error responses follow a consistent JSON structure

Errors are handled centrally using Express middleware

Business Logic
Pricing Rules
Metal price equals rate per gram multiplied by weight

Diamond price depends on selected carat

Making charges are fixed per product

Exchange applies a fixed 15 percent discount

Assumptions
Metal and diamond prices are static

Weight is provided by the client

Each product supports a single diamond

Authentication and payment flows are out of scope

Purpose
This project demonstrates clean backend design, practical pricing logic, validation discipline, and real product driven API behavior.

::contentReference[oaicite:0]{index=0}
