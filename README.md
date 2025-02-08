## 📌 Plano para Implementação do Backend

1. **Criar a estrutura do projeto**  
2. **Definir os modelos dos produtos e do carrinho**  
3. **Criar rotas para adicionar e remover itens do carrinho**  
4. **Implementar a lógica de promoções**  
5. **Criar a rota para calcular o preço final**  
6. **Testar a API**

[Lighthouse Backend Challenge.pdf](https://github.com/user-attachments/files/18715579/Lighthouse.Backend.Challenge.pdf)
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
curl -X POST http://localhost:3000/checkout/total
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

---

✌ Made with ❤️ by [MADUSALVES]



