<script>
    import { page } from '$app/stores';
    import { fade, fly, slide } from 'svelte/transition';

    import Carousel from "$lib/components/carousel.svelte";
    import Accordion from "$lib/components/accordion.svelte";
    import AddToCartButton from "$lib/components/addToCartBtn.svelte";
    import Slideshow from "$lib/components/slideshow.svelte";


    import { addToCart } from "$lib/stores.js";

    $: perfume = $page.data.perfume;
    $: featuredPerfumes = $page.data.featuredPerfumes;
    $: firstImage = perfume?.images?.split('*')[0].trim();
    $: images = perfume?.images?.split('*').map(i => i.trim());
</script>
  
    <section class="hero-section" in:slide>
        <Slideshow {images}/>
        <!-- <img src={firstImage} alt={perfume.perfume_name} width="555" height="736"/> -->
        <div class="right-side-hero">
            <a href="/perfumes" class="link">back to perfumes</a>
            <div class="perfume-info">
                <div class="perfume-text">
                        <p class="subheading">{perfume.brand}</p>
                        <h1>{perfume.perfume_name}</h1>
                        <div class="row">
                            <p>{perfume.price}</p>
                            <p class="size">{perfume.size}</p>
                        </div>
                        <p class="description">{perfume.description}</p>
                    </div>
                    <AddToCartButton 
                        text="add to cart" 
                        onClick={() => addToCart(perfume)}
                    />
            </div>
            <div class="details-div">
                <p class="subheading">details</p>
                <Accordion title='Product Description' content={perfume.description}/>
                <Accordion title='Notes' content={perfume.notes}/>
                <Accordion title='Ingredients' content={perfume.ingredients}/>
            </div>
        </div>
    </section>

  <Carousel perfumes={featuredPerfumes} />

  
  
  <style>
    
    .hero-section {
        display: flex;
        gap: 40px;
        align-items: flex-start;
        flex-wrap: wrap;
        padding: 0px 60px;
        height: auto;
        width: 100%;
        padding-top: 30px;

    }

    .link {
        text-decoration: underline;
    }

    h1 {
      line-height: 5rem;
    }

    /* img {
        width: 100%;
        max-width: 450px;
        border-radius: 8px;
        object-fit: contain;
        height: auto
    } */
    

    .row {
        display: flex;
        flex-direction: row;
        gap: 30px;
    }

    .size {
        font-weight: 300;
    }

    .description {
        display: -webkit-box;             /* flex-like box for text */
        -webkit-box-orient: vertical;     /* vertical layout */
        -webkit-line-clamp: 2;    
        line-clamp: 2;        /* number of lines to show */
        overflow: hidden;                 /* hide overflow */
    }

    .perfume-info {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 30px;
        align-self: stretch;
    }

    .perfume-text {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    .right-side-hero {
        flex: 1;
        min-width: 260px;
        display: flex;
        flex-direction: column;
        gap: 45px;
    }

    .details-div {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 16px;
        align-self: stretch;
        width: 100%;
    }

    @media (max-width: 900px) {
        h1 {
            font-size: 4rem;
        }
      
        .right-side-hero {
        padding-bottom: 60px;
        height: auto;
        }

        .hero-section {
            padding: 0px 30px;
        }

    }
  </style>
  


