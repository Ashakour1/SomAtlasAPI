<script>
    import 'iconify-icon';
    let isNavOpen = false;

    function toggleNav() {
        isNavOpen = !isNavOpen;
    }

    function closeNav() {
        isNavOpen = false;
    }
</script>
<header class="fixed w-full backdrop-blur-sm pt-2 z-40 bg-[rgba(0,0,0,.5)]">
    <div class="flex justify-between items-center max-w-[1125px] mx-auto relative px-4 md:px-0">
        <div class="text-2xl font-bold">
            <a href="/"><img src="/images/White.png" alt="logo" class="w-28"></a>
        </div>
        <div class="">
            <ul class="hidden md:flex">
                <li class="p-5 text-sm hover:underline hover:text-green-300"><a href="/">Home</a></li>
                <li class="p-5 text-sm hover:underline hover:text-green-300"><a href="#resources">Resources</a></li>
                <li class="p-5 text-sm hover:underline hover:text-green-300"><a href="#features">Features</a></li>
                <li class="p-5 text-sm hover:underline hover:text-green-300"><a href="https://docs.somatlas.dev">Docs</a></li>
            </ul>
        </div>
        {#if isNavOpen}
    <button on:click={toggleNav} class="text-3xl md:hidden">
        <iconify-icon icon="mdi:close" class="border border-green-300 rounded-sm"></iconify-icon>
    </button>
{:else}
    <button on:click={toggleNav} class="text-3xl md:hidden">
        <iconify-icon icon="mdi:menu" class="border border-green-300 rounded-sm"></iconify-icon>
    </button>
{/if}
        {#if isNavOpen}
            <div class="md:hidden absolute top-10 right-0 bg-green-300 text-center text-black rounded-sm w-[35]">
                <ul class="font-bold">
                    <li class="p-5 hover:underline hover:text-green-300">
                        <a href="/" on:click={closeNav}>Home</a>
                    </li>
                    <li class="p-5 hover:underline">
                        <a href="#resources" on:click={closeNav}>Resources</a>
                    </li>
                    <li class="p-5 hover:underline">
                        <a href="#features" on:click={closeNav}>Features</a>
                    </li>
                    <li class="p-5 hover:underline">
                        <a href="https://docs.somatlas.dev" on:click={closeNav}>Docs</a>
                    </li>
                </ul>
            </div>
        {/if}
    </div>
</header>
