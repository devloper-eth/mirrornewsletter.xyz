<script setup>
import SignupForm from "./components/SignupForm.vue";
</script>

<template>
  <div class="grid grid-cols-1 lg:grid-cols-2 h-full">
    <div class="bg-black">
      <div class="container p-12 xl:p-24 text-white">
        <a href="/"><img class="h-8 w-8" src="/mirrornewsletter.svg" /></a>
        <h1 class="mt-16 text-4xl header-font">mirror newsletter</h1>
        <h2 class="mt-8 text-l paragraph-font">
          mirrornewsletter.xyz is your weekly information source on all things NFT, web3 and DAO. All links curated by
          hand (with top secret ranking algo coming soon).
        </h2>
        <SignupForm class="mt-12" />
        <h1 class="mt-8 text-sm paragraph-font">
          <span class="pr-2">
            Past Issues
          </span>
          <span class="pr-2 text-sm paragraph-font">
            <a class="hover:underline" href="https://mirrornewsletter.xyz/issue/1">#1</a>,
            <a class="hover:underline" href="https://mirrornewsletter.xyz/issue/2">#2</a>,
            <a class="hover:underline" href="https://mirrornewsletter.xyz/issue/3">#3</a>
          </span>
        </h1>

      </div>
      <div class="pl-12 xl:pl-24 mb-12 text-white bg-black">
        Follow us on
        <a href="https://twitter.com/devloper_eth"><span class="underline">twitter</span></a>
      </div>
    </div>
    <div class="hidden lg:block"><!-- empty white space --></div>
  </div>
</template>

<style>
#app {
  height: 100vh;
}
</style>
