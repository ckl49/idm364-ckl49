<script>
    let { images = [] } = $props();
    let index = $state(0);
  
    function next() {
      index = (index + 1) % images.length;
    }
  
    function prev() {
      index = (index - 1 + images.length) % images.length;
    }
  </script>
  
  <div class="slideshow">
    <button onclick={prev}>&lt;</button>
  
    <img src={images[index]} alt="perfume photo" />
  
    <button onclick={next}>&gt;</button>
  </div>

<style>
    .slideshow {
        display: flex;
        gap: 20px;
        align-items: center;
        width: 50%;
        height: auto;
        max-width: 450px;
        object-fit: contain;
    }
    
    img {
        width: 100%;
        max-width: 450px;
        border-radius: 8px;
        object-fit: contain;
        height: auto
    }
</style>