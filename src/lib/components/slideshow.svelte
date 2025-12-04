<script>
  import { fade } from "svelte/transition";

  let { images = [] } = $props();
  let index = $state(0);

  // Reset index whenever the images array changes
  $effect(() => {
    index = 0;
  });

  function next() {
    index = (index + 1) % images.length;
    
  }

  function prev() {
    index = (index - 1 + images.length) % images.length;
  }
</script>
  
  <div class="slideshow">
    <button class="prev" onclick={prev} aria-label="back"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="#000603" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m15 18l-6-6l6-6"/></svg></button>
  
    <img src={images[index]} alt="perfume" />
  
    <button class="next" onclick={next} aria-label="right"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="#000603" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m9 18l6-6l-6-6"/></svg></button>
  </div>

<style>

  
    .slideshow {
    position: relative;
    width: 50vw;
    max-width: 450px;
  }

  img {
    width: 100%;
    border-radius: 8px;
    object-fit: contain;
  }

  /* Arrow Buttons */
  button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    border: none;    
    font-size: 24px;
    cursor: pointer;
    border-radius: 30px;
    padding: 2px 2px;
  }

  button > svg {
    display: flex;
    justify-self: center;
    align-self: center;
  }

  .prev {
    left: 10px;
  }

  .next {
    right: 10px;
  }

  button:hover {
    background: rgba(255, 255, 255, 0.95);
  }

  @media (max-width: 876px) {
    .slideshow {
      width: 100vw;
      max-width: none;
    }
  }
</style>

