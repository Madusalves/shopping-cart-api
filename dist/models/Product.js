"use strict";
// Define the Product interface, representing a product's structure
Object.defineProperty(exports, "__esModule", { value: true });
exports.products = void 0;
exports.products = [
    { sku: "120P90", name: "Google Home", price: 49.99 },
    { sku: "43N23P", name: "Mac Pro", price: 5399.99 },
    { sku: "A304SD", name: "Alexa Speaker", price: 109.50 },
    { sku: "344222", name: "Raspberry Pi", price: 30.00 },
];
console.log("Loaded Products:", exports.products);
