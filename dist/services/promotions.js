"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyPromotions = applyPromotions;
// Function to apply promotions to a list of items in the cart
function applyPromotions(items) {
    let total = 0;
    let freeRaspberryPi = 0;
    // Loop through each item in the cart
    for (const item of items) {
        const { product, quantity } = item;
        switch (product.sku) {
            case "120P90": //  Google Home promotion (buy 3, pay for 2)
                const freeItems = Math.floor(quantity / 3);
                total += (quantity - freeItems) * product.price;
                break;
            case "43N23P": // Mac Pro promotion (comes with a free Raspberry Pi)
                total += quantity * product.price;
                freeRaspberryPi += quantity;
                break;
            case "A304SD": // Alexa Speaker promotion (10% off for more than 3 units)
                const discount = quantity > 3 ? 0.9 : 1;
                total += quantity * product.price * discount;
                break;
            default:
                total += quantity * product.price; // No promotion, just add the total price
        }
    }
    // Add free Raspberry Pi if a Mac Pro was purchased
    const raspberryPi = items.find((item) => item.product.sku === "344222");
    if (raspberryPi) {
        total += Math.max(0, raspberryPi.quantity - freeRaspberryPi) * raspberryPi.product.price;
    }
    return total.toFixed(2); // Return the total price as a string with 2 decimal places
}
