# Sporting Goods E-Commerce Backend

This repository contains the backend code for the Sporting Goods E-Commerce website. The backend is built using Node.js, Express.js, TypeScript, and MongoDB. It provides APIs for managing products, handling the shopping cart, and processing orders.

# Live Link
https://sporting-goods-server-murex.vercel.app

# Github Link
https://github.com/emayethossen/sporting-goods-server.git

# Sporting Goods E-Commerce Backend

This repository contains the backend code for the Sporting Goods E-Commerce website. The backend is built using Node.js, Express.js, TypeScript, and MongoDB. It provides APIs for managing products, handling the shopping cart, and processing orders.

## Features

- **Product Management**:
  - Create, update, delete, and retrieve products.
  - Products include details such as name, description, price, category, brand, stock quantity, and more.
  
- **Shopping Cart**:
  - Add products to the cart.
  - Adjust quantities and remove products from the cart.
  - Calculate total price including VAT.

- **Checkout**:
  - Collect user information such as name, email, and address.
  - Choose between cash on delivery or Stripe for payment processing.

- **Error Handling**:
  - Graceful handling of errors with appropriate status codes and messages.
  
- **Middleware**:
  - Request logging, data parsing, and other essential middlewares.

## Tech Stack

- **Node.js**: JavaScript runtime for building server-side applications.
- **Express.js**: Web framework for Node.js.
- **TypeScript**: Superset of JavaScript for type-safe code.
- **MongoDB**: NoSQL database for storing product, cart, and order data.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB and Node.js.

### Installation

1. Clone the repository:
    ```sh
    https://github.com/emayethossen/sporting-goods-server.git
    cd sporting-goods-server
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Create a `.env` file in the root directory and add the following environment variables:
    ```env
    PORT=5000
    MONGODB_URI=mongodb://localhost:5000
    JWT_SECRET=your_jwt_secret
    ```

4. Start the development server:
    ```sh
    npm run dev
    ```
