# Lighthouse Backend Challenge - Shopping Cart

This project implements a checkout system with promotions using **Node.js**, **Express.js**, and **TypeScript**.

## 🚀 How to Run the Project

1. **Clone the repository**
```sh
git clone https://github.com/Madusalves/shopping-cart-api.git
cd shopping-cart-api
```

2. **Install dependencies**
```sh
npm install
```

3. **Start the server**
```sh
npm run dev
```

The server will start at `http://localhost:3000`.

## 📌 Implementation Plan

1. **Create the project structure**  
2. **Define product and cart models**  
3. **Create routes to add and remove cart items**  
4. **Implement promotion logic**  
5. **Create a route to calculate the final price**  
6. **Test the API**  

## 📌 API Routes

### 1️⃣ Add a product to the cart (POST)
```sh
curl -X POST http://localhost:3000/checkout/add \
     -H "Content-Type: application/json" \
     -d '{"sku":"120P90","quantity":3}'
```
**Description:** Adds 3 units of **Google Home** to the cart.

---

### 2️⃣ Get cart items (GET)
```sh
curl -X GET http://localhost:3000/checkout/cart
```
**Description:** Returns all items added to the cart.

---

### 3️⃣ Remove an item from the cart (DELETE)
```sh
curl -X DELETE http://localhost:3000/checkout/remove \
     -H "Content-Type: application/json" \
     -d '{"sku":"120P90"}'
```
**Description:** Removes the **Google Home (SKU: 120P90)** product from the cart.

---

### 4️⃣ Complete the purchase (Checkout)
```sh
curl -X POST http://localhost:3000/checkout/complete
```
**Description:** Completes the purchase by applying promotions.

## 📜 Promotion Rules
- **Buy 3 Google Homes for the price of 2**
- **Each sale of a MacBook Pro includes a free Raspberry Pi**
- **Purchases of more than 3 Alexa Speakers get a 10% discount**

## 🛠 Technologies Used
- **Node.js**
- **Express.js**
- **TypeScript**

## 📌 Future Improvements
- Add persistence with a database (MongoDB or PostgreSQL)
- Implement user authentication
- Create automated tests

---

✌ Made with ❤️ by [Your Name]

