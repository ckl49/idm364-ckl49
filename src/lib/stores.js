import { writable } from "svelte/store";

export const cart = writable([]);

// Load from localStorage on client only
if (typeof window !== "undefined") {
  const saved = localStorage.getItem("cart");
  cart.set(saved ? JSON.parse(saved) : []);

  cart.subscribe((value) => {
    localStorage.setItem("cart", JSON.stringify(value));
  });
}

// Add item or increase quantity
export function addToCart(item) {
  cart.update((current) => {
    const existing = current.find((i) => i.id === item.id);

    if (existing) {
      return current.map((i) =>
        i.id === item.id ? { ...i, amount: i.amount + 1 } : i
      );
    }

    const numericPrice =
      typeof item.price === "string"
        ? Number(item.price.replace(/[^0-9.]/g, "")) : item.price;

    return [...current, { ...item, amount: 1, price: numericPrice }];
  });
}

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

export function removeItemCompletely(id) {
  cart.update((current) => current.filter((i) => i.id !== id));
}

export function clearCart() {
  cart.set([]);
}