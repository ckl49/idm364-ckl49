<script>
	import PerfumeCard from '$lib/components/perfumeCard.svelte';
	// import aurnerImg from '$lib/assets/images/aesop_aurner/aurner_1.webp';

    let {perfumes} = $props()
</script>


<section class="carousel-section">
    <h2>featured fragrances</h2>

    <div class="carousel-div">
        {#each perfumes as perfume}
            <PerfumeCard perfume={perfume} />
        {/each}
    </div>
</section>


<style>
    .carousel-section {
        display: flex;
        padding: 0 var(--padding-l, 30px) var(--padding-xl, 60px) var(--padding-l, 30px);
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        gap: var(--gap-small, 16px);
        align-self: stretch;
    }

    .carousel-div {
        display: flex;
        align-items: flex-start;
        gap: var(--gap-m, 30px);
        align-self: stretch;
        overflow-x: auto;
        padding-bottom: 20px;
    }
</style>