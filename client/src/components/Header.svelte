<script>
    import 'iconify-icon'
    import whitelogo from '../../images/White.png'
    let isNavOpen = false;
    
    function toggleNav() {
        isNavOpen = !isNavOpen;
    }
</script>

<header class="fixed w-full backdrop-blur-sm pt-2 z-40">
    <div  class="flex justify-between items-center max-w-[1240px] mx-auto relative px-4 md:px-0">
   <div class="text-2xl font-bold">
    <a href="/"><img src={whitelogo} alt="logo" class="w-40"></a>
   </div>
   <div class="">
        <ul class=" hidden md:flex font-bold ">
            <li class="p-5 hover:underline"><a href="/">Home</a></li>
            <li class="p-5 hover:underline"><a href="#resources">Resources</a></li>
            <li class="p-5 hover:underline"><a href="#features">Features</a></li>
            <li class="p-5 hover:underline"><a href="/">Docs</a></li>
        </ul>
   </div>
   
   <button on:click={toggleNav} class="text-3xl md:hidden"><iconify-icon icon="mdi:home"></iconify-icon></button>

    {#if isNavOpen}
    <div class="md:hidden absolute top-8 right-0  bg-gray-400" class:open={isNavOpen}>
        <ul class="font-bold">
              <li class="p-5 hover:underline"><a href="/">Home</a></li>
              <li class="p-5 hover:underline"><a href="#resources">Resources</a></li>
              <li class="p-5 hover:underline"><a href="#features">Features</a></li>
              <li class="p-5 hover:underline"><a href="/">Docs</a></li>
        </ul>
        </div>
    {/if}

</div>

</header>

