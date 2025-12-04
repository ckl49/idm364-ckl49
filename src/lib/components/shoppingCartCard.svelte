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
        <button onclick={() => removeFromCart(perfume)} aria-label="subtract">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="#000603" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 12h14"/></svg>
          </button>   
          <p>{perfume.amount}</p>
        <button onclick={() => addToCart(perfume)} aria-label="add">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="#000603" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 12h14m-7-7v14"/></svg>
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

    /* .shoppingCartCard > img {
        width: 100px;
        height: 100px;
    } */

    .incrementer {
        display: flex;
        flex-direction: row;
        gap: 16px;
        justify-content: end;
    }

    .incrementer > button {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 4px;
    }

    .incrementer > button:hover {
        background-color: #DDDDDD;
    }

    .incrementer > p {
        display: flex;
        justify-self: center;
        align-items: center;
    }

    .name {
        font-size: 18px;
    }

    .price > p {
        text-align: end;
    }


    @media (max-width: 488px) {

        
        .shoppingCartCard {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, 1fr);
        justify-content: center;
        align-items: center;
        }


        .text-column {
            grid-column: 1;
            grid-row: 2;
        }

        .price {
            grid-column: 2;
            grid-row: 2;
            text-align: end;
            
        }

        .incrementer {
            grid-column: 2;
            grid-row: 1;
            justify-content: end;        
        }


    }
</style>