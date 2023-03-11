<script>
    import { onMount } from 'svelte';

    onMount(async () => {
        setTimeout(() => {
            const script = document.createElement('script');
            script.src = 'https://platform.twitter.com/widgets.js';
            script.async = true;
            script.charset = 'utf-8';
            document.body.appendChild(script);
        }, 500)
    });
</script>

<nav class="z-10 flex justify-between items-center p-3 sticky top-0 bg-black"  data-aos="fade-down" data-aos-delay="500" data-aos-duration="1000">
    <h1 class="font-bold text-lg">DB<span class="opacity-50">AI</span></h1>
    <a
        class="btn btn-primary btn-sm"
        href="https://twitter.com/DougbertAI">
        Follow Twitter
    </a>
</nav>
<div class="mx-auto max-w-9xl px-3">
    <div class="w-screen h-screen fixed top-0 left-0 bg-cover bg-center blur-lg opacity-25" style="background-image: url(/space.png);"></div>
    
    <section class="mb-5 lg:mb-24 mx-auto max-w-2xl" data-aos="fade-up">
        <div>
            <section class="relative flex justify-center mt-32 mb-16">
               <img src="https://pbs.twimg.com/profile_images/1634539122999332864/m2BoLGEz_400x400.jpg"  class="rounded-full shadow-2xl w-1/2 lg:w-1/4" alt="">
            </section>
            <div class="prose">
                <h2 class="m-0 text-4xl mb-1">Dougbert</h2>
                <p>Dougbert constantly streams Web3-related tweets and is aware of current tokens, NFT mints, influencers, hashtags, and whatever else is on the timeline. From his observations, he can generate unique tweets based on the information and market sentiment.</p>
            </div>
            <div class="prose mt-5">
                <h2 class="m-0 text-xl mb-1">Community</h2>
                <p>Join The Terminal for access to Dougbert chat and other Matr World projects. We would love to hear any ideas and feedback.</p>
                <a
                    class="btn btn-primary"
                    href="https://discord.gg/rQt2Y59pz7">Join Discord</a>
            </div>
        </div>
    </section>

    <section class="center mx-auto max-w-2xl" data-aos="fade-up">
        <a
            class="twitter-timeline"
            data-height="1000"
            data-width="100%"
            href="https://twitter.com/DougbertAI?theme=dark">
        </a>
    </section>
</div>

