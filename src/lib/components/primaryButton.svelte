<script>
  let { text = "Button", onClick = () => {} } = $props();
</script>

<button class="primary-button" onclick={onClick}>
  {text}
</button>

<style>
button {
    display: flex;
    padding: var(--padding-s, 12px) var(--padding-l, 30px);
    justify-content: center;
    align-items: center;
    background: var(--purple-gray-700);
    color: white;
}

button:hover {
    background: var(--purple-gray-500);
    color: white;
    transition: ease-out 200ms;
}

button:focus {
    background: var(--purple-gray-400);
    color: white;
    text-decoration: underline;
    transition: ease-out 200ms;
}

button:active {
    background: var(--purple-gray-300);
    color: white;
    text-decoration: underline;
    transition: ease-out 200ms;
}
</style>