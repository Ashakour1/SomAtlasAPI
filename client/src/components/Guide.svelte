<section class="bg-white text-black">
    <div class="max-w-[1240px] mx-auto py-[4rem] px-5">
        <div class="max-w-[850px] mx-auto text-center">
            <h1 class="text-3xl font-bold ">Guides</h1>
            <p class="text-2xl  my-5">While the examples below demonstrate the Fetch API in JavaScript, you can integrate SomAtlasAPI with any language of your choice.</p>
            <p class="text-2xl text-center">You can copy paste the code in your browser console to quickly test SomAtlasAPI.</p>
        </div>
        <h1 class="font-bold text-3xl pt-10">Getting Resources</h1>
        <div class="bg-black text-white text-2xl text-left my-5 overflow-auto">
        <pre>
            <code>
     fetch('https://SomAtlasAPI.com/states/state/1')
        .then((response) => response.json())
        .then((json) => console.log(json));
         </code>
          </pre>
        </div>

    </div>
</section>