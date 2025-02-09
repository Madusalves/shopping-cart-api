import { Product, products } from "./Product";


// Define the Cart class to manage shopping cart operations
export class Cart {
  private items: { product: Product; quantity: number }[] = [];

   // Method to add an item to the cart
  addItem(sku: string, quantity: number = 1) {
    const product = products.find((p) => p.sku === sku);
    if (!product) {
      throw new Error("Product not found");
    }

    // Check if the product is already in the cart
    const item = this.items.find((item) => item.product.sku === sku);
    if (item) {
      item.quantity += quantity;
    } else {
      this.items.push({ product, quantity });
    }
  }

  // Method to remove an item from the cart by SKU
  removeItem(sku: string) {
    this.items = this.items.filter((item) => item.product.sku !== sku);
  }

  // Method to get all items in the cart
  getItems() {
    return this.items;
  }

  updateItemQuantity(sku: string, quantity: number){
    const item = this.items.find(item => item.product.sku === sku);
    if (!item) {
      throw new Error ("Product not found");
    }
    item.quantity = quantity;
  }

  // Method to clear the cart (remove all items)
  clear() {
    this.items = [];
  }
}
