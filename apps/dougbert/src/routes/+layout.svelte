<script>
    import { onMount } from "svelte";
    import "../app.postcss";
    import AOS from "aos";
    
    import 'aos/dist/aos.css';  
    onMount(() => {
        AOS.init();
    })
</script>

<style>
    a {
        color: white;
    }
</style>

<main>
    <slot />
</main>

<footer class="flex justify-center my-16 relative">
  
</footer>
