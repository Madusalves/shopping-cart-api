import express from "express";
import { Cart } from "../models/Cart";
import { applyPromotions } from "../services/promotions";

const router = express.Router();
const cart = new Cart();  // Initialize a new shopping cart instance


// Route to add an item to the cart
router.post("/add", (req, res) => {
  const { sku, quantity } = req.body;
  try {
    cart.addItem(sku, quantity); // Add the item to the cart
    res.json({ message: "Item added to cart!", cart: cart.getItems() });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Route to remove an item from the cart
router.post("/remove", (req, res) => {
  const { sku } = req.body; // Extract SKU from the request body
  cart.removeItem(sku);
  res.json({ message: "Item removed from cart!", cart: cart.getItems() });
});

// Route to calculate the total price with promotions applied
router.get("/total", (req, res) => {
  const total = applyPromotions(cart.getItems());
  res.json({ total });
});

export default router;
