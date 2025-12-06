<script>
    import { fade, slide } from 'svelte/transition';

    let open = $state(false);
    let {title, content} = $props()
</script>
  
  <div class="faq">
    <button class="question" onclick={() => open = !open}>
      {title}
        <span>{open ? '−' : '+'}</span>
    </button>
  
    {#if open}
      <div class="answer" transition:slide>
        {content}
      </div>
    {/if}
  </div>
  
  <style>
    .faq {
      border-bottom: 1px solid #ddd;
      padding: 1rem 0;
      width: 100%;
    }
  
    .question {
      background: none;
      border: none;
      font-size: 1.1rem;
      font-weight: 500;
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      text-align: left;
      color: #444;
      cursor: pointer;
    }
  
    .answer {
      margin-top: 0.5rem;
      color: #444;
      line-height: 1.5;
      font-family: 'Roboto';
      padding-left: 1rem;
    }
  </style>