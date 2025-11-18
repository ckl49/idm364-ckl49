<script>
    import { supabase } from '$lib/supabase_client.js';
    import PerfumeCard from '$lib/components/PerfumeCard.svelte';

    console.log('Supabase client initialized:', !!supabase);

    export let data
    
    const { perfumes } = data
    
</script>

<main>
  <section>
    <div class="header">
      <h1>Perfumes</h1>
      <p class="subheading">Find your forever fragrance.</p>
    </div>
    <div class="cards-grid">
      {#each perfumes as perfume}
          <PerfumeCard class="perfume-card" perfume={perfume} />
      {/each}
    </div>
  </section>
</main>

<style>
  section {
    width: 90vw;
    display: flex;
    flex-direction: column;
    justify-self: center;
  }

  .header {
    padding-bottom: 30px;
  }

  /* .perfumes {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 30px;
  } */

  .cards-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 30px;
      row-gap: 60px;
      width: 100%;
      padding-bottom: 90px;
  }

  @media (max-width: 1000px) {
        .cards-grid {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media (max-width: 600px) {
        .cards-grid {
            grid-template-columns: 1fr;
        }
    }

</style>