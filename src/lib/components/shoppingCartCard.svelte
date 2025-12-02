<script>
    let { perfume } = $props();
  
    import { addToCart, removeFromCart } from '$lib/stores.js';
  
    // Main image(s)
    const imageArray = perfume.images.split("*");
    const firstImage = imageArray[0];

    // Responsive small image(s)
    const smallImageArray = (perfume.small_images ?? "").split("*");
    const firstSmallImage = smallImageArray[0] || firstImage;

    let amount = 1;

    const slug = perfume.perfume_name
      .toLowerCase()
      .replaceAll(" ", "-")
      .replace(/[^a-z0-9-]/g, "");
</script>

<div class="shoppingCartCard">
    <!-- <img src={firstImage} alt="{perfume.perfume_name}"> -->

    <picture>
        <source srcset={firstSmallImage} media="(max-width: 799px)" />
        <img src={firstImage} alt={perfume.perfume_name}>
    </picture>
    
    <div class="text-column">
        <p class="name">{perfume.perfume_name}</p>
        <p class="brand">{perfume.brand}</p>
        <p class="brand">{perfume.size}</p>

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
    <div class="text-column price">
        <p>${(perfume.amount * perfume.price).toFixed(2)}</p>
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

    img {
        width: 60%;
        height: auto;
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
        wi