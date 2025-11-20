<script>
    let { perfume } = $props();
  
    import { addToCart, removeFromCart } from '$lib/stores.js';
  
    const imageArray = perfume.images.split("*");
    const firstImage = imageArray[0];

    let amount = 1;
  
    const slug = perfume.perfume_name
      .toLowerCase()
      .replaceAll(" ", "-")
      .replace(/[^a-z0-9-]/g, ""); //removes special characters
</script>

<div class="shoppingCartCard">
    <img src={firstImage} alt="{perfume.perfume_name}">
    <div class="text-column">
        <p class="name">{perfume.perfume_name}</p>
        <p class="brand">{perfume.brand}</p>
    </div>
    <div class="incrementer">
        <button onclick={() => removeFromCart(perfume)}>
            –
          </button>   
          <p>{perfume.amount}</p>
        <button onclick={() => addToCart(perfume)}>
        +
        </button>
    </div>
    <div class="text-column">
        <p>{perfume.price}</p>
        <p class="brand">{perfume.size}</p>
    </div>
    <!-- <button class="secondary-button" onclick={() => removeFromCart(item.id)}>Remove</button> -->
</div>


<style>

    .shoppingCartCard {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        justify-content: center;
        align-items: center;
    }

    .text-column {
        display: flex;
        flex-direction: column;
        gap: 4px;
    }

    .brand {
        font-weight: 200;
    }

    .shoppingCartCard > img {
        width: 100px;
        height: 100px;
    }

    .incrementer {
        display: flex;
        flex-direction: row;
        gap: 16px;
    }

    .name {
        font-size: 18px;
    }


</style>