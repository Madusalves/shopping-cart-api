import express from "express";
import { Cart } from "../models/Cart";
import { applyPromotions } from "../services/promotions";
import { ok } from "assert";
import { Request, Response } from 'express';


const router = express.Router();
const cart = new Cart();  // Initialize a new shopping cart instance


// Route to add an item to the cart
router.post("/add", (req, res) => {
  const { sku, quantity } = req.body;
  try {
    cart.addItem(sku, quantity); // Add the item to the cart
    res.json({ message: "Item added to cart!", cart: cart.getItems() });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
});

// Route to remove an item from the cart
router.post("/remove", (req, res) => {
  const { sku } = req.body; // Extract SKU from the request body
  cart.removeItem(sku);
  res.json({ message: "Item removed from cart!", cart: cart.getItems() });
});


router.put("/update", (req: Request, res: Response) => {
  const { sku, quantity } = req.body;

  try {
    cart.updateItemQuantity(sku, quantity);
    res.json({ message: "Quantity updated!", cart: cart.getItems() });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
});

/*
router.put("/update/:sku", (req, res) => {
  const { sku } = req.params;  // get the string
  const { quantity } = req.body;  // quantity 

  if (quantity === undefined || quantity >= 0) {
    return res.status(400).json({ message: "Qauntity not defined" });
  }

  try {
    // update the cart
    cart.updateItemQuantity(sku, quantity);
    res.json({ message: "Quantity of products updated" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});*/



router.get("/total", (req, res) => {
  const total = applyPromotions(cart.getItems());
  res.json({ total });
});

export default router;
