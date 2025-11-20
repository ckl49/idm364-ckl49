import { writable } from "svelte/store";

// Load from localStorage
let stored = [];
if (typeof localStorage !== "undefined") {
  const saved = localStorage.getItem("cart");
  stored = saved ? JSON.parse(saved) : [];
}

export const cart = writable(stored);

// Sync to localStorage
cart.subscribe((value) => {
  if (typeof localStorage !== "undefined") {
    localStorage.setItem("cart", JSON.stringify(value));
  }
});

// Add item or increase quantity
export function addToCart(item) {
    cart.update((current) => {
      const existing = current.find((i) => i.id === item.id);
  
      if (existing) {
        return current.map((i) =>
          i.id === item.id
            ? { ...i, amount: i.amount + 1 }
            : i
        );
      }
  
      // Convert price to a number here
      const numericPrice =
        typeof item.price === "string"
          ? Number(item.price.replace(/[^0-9.]/g, "")) : item.price;
  
      return [...current, { ...item, amount: 1, price: numericPrice }];
    });
  }
// Decrease quantity OR remove item completely
export function removeFromCart(item) {
  cart.update((current) => {
    const existing = current.find((i) => i.id === item.id);

    if (!existing) return current;

    if (existing.amount > 1) {
      return current.map((i) =>
        i.id === item.id ? { ...i, amount: i.amount - 1 } : i
      );
    }

    return current.filter((i) => i.id !== item.id);
  });
}

// Completely remove item (no quantity logic)
export function removeItemCompletely(id) {
  cart.update((current) => current.filter((i) => i.id !== id));
}

export function clearCart() {
  cart.set([]);
}
