<!-- <script>
    import perfumeImg from '$lib/assets/images/aesop_aurner/aurner_1.webp';
    const perfumeName = "Aurner";
    const perfumeBrand = "Aesop";
    const perfumePrice = "$200";

</script> -->

<script>
    let { perfume } = $props();
  
    import { addToCart } from '$lib/stores.js';
  
    const imageArray = perfume.images.split("*");
    const firstImage = imageArray[0];
  
    const slug = perfume.perfume_name
      .toLowerCase()
      .replaceAll(" ", "-")
      .replace(/[^a-z0-9-]/g, ""); //removes special characters
</script>

<div class="perfume-card">
	<img src={firstImage} alt={`${perfume.brand} ${perfume.perfume_name}`} />

    <div class="card-text">
        <div class="card-title">
            <a href={`/perfumes/${slug}`} class="name">
                {perfume.perfume_name}
            </a>
            <p class="price">{perfume.price}</p>
        </div>

        <div class="card-title">
            <p class="brand">{perfume.brand}</p>
            <p class="brand">{perfume.size}</p>
        </div>
    </div>

    <!-- <PrimaryButton text="add to cart", onclick={() => addToCart(perfume)} /> -->

    <button
    class="add-to-cart primary-button"
    onclick={() => addToCart(perfume)}
  >
    add to cart
  </button></div>


<style>
    .perfume-card {
        display: flex;
        flex-direction: column;
        gap: 12px;
        width: 100%; /* takes full grid column width */
        min-width: 300px;
    }

    .perfume-card img {
        width: 100%;
        height: auto;
        object-fit: cover;
        border-radius: 8px;
    }

    .brand {
        color: gray;
        font-weight: 200;
    }

    .card-title {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 8px;
    }

    .perfume-card button {
        width: 100%;
    }
</style>
