<!-- <script>
    
    import { writable } from 'svelte/store';

    export const cart = writable([]);
</script>

<h1>Shopping Cart</h1> -->

<script>
    import ShoppingCartCard from "$lib/components/shoppingCartCard.svelte"
    import { cart, addToCart, removeFromCart } from '$lib/stores.js';
    export let data;

    // let subtotal = "3000.00";
    // let tax = "3.00"
    // let total = "3003.00";

    let subtotal = $cart.reduce((sum, item) => sum + item.price * item.amount, 0);

    const TAX_RATE = 0.06;

    let tax = subtotal * TAX_RATE;
    let total = subtotal + tax;
</script>
    
  <main>
      <section>
        <h1>Your Cart</h1>

        <div>
            {#if $cart.length === 0}
                <p>No items yet.</p>
                {:else}
                    {#each $cart as item}
                        <ShoppingCartCard perfume={item} />
                    {/each}
            {/if}
        </div>

        <div class="price">
            <div class="price-row gray">
                <p>Subtotal:</p>
                <p>${subtotal.toFixed(2)}</p>
            </div>
            <div class="price-row gray">
                <p>Tax:</p>
                <p>${tax.toFixed(2)}</p>
            </div>
            <div class="price-row gray">
                <p>Shipping:</p>
                <p>${tax.toFixed(2)}</p>
            </div>
            <div class="price-row black">
                <p>Total:</p>
                <p>${total.toFixed(2)}</p>
            </div>
            <button class="primary-button">checkout</button>
        </div>
      </section>
  </main>

<style>
    main {
        width: 100%;
        min-height: 100vh;
        display: flex;
        justify-content: start;
        flex-direction: column;
        align-items: center;
        gap: 24px;
    }

    div {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    h1 {
        text-align: start;
        width: 100%;
    }

    section {
        width: 50%;
        display: flex;
        flex-direction: column;
        gap: 24px;
        height: auto;
        padding-bottom: 90px;
    }

    .price {
        width: 100%;
        text-align: right;
    }

    .price-row {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .gray {
        color:#6B6B79;
    }

    .black {
        font-size: 24px;
    }
</style>