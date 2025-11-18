<!-- <script>
    import perfumeImg from '$lib/assets/images/aesop_aurner/aurner_1.webp';
    const perfumeName = "Aurner";
    const perfumeBrand = "Aesop";
    const perfumePrice = "$200";

</script> -->

<script>
	let {perfume} = $props()

    const imageArray = perfume.images.split("*");
    const firstImage = imageArray[0];
    
    const slug = perfume.perfume_name
        .toLowerCase()
        .replaceAll(" ", "-")
        .replace(/[^a-z0-9-]/g, ""); // removes special chars
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

        <p class="brand">{perfume.brand}</p>
    </div>

    <button class="add-to-cart primary-button">add to cart</button>
</div>


<style>
    .perfume-card {
        display: flex;
        flex-direction: column;
        gap: 12px;
        width: 100%; /* takes full grid column width */
    }

    .perfume-card img {
        width: 100%;
        height: auto;
        object-fit: cover;
        border-radius: 8px;
    }

    .brand {
        color: gray;
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
