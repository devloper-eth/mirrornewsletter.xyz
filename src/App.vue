<script setup>
import SignupForm from "./components/SignupForm.vue";
</script>

<template>
  <div class="grid grid-cols-1 lg:grid-cols-2 h-full">
    <div class="bg-black">
      <div class="container p-12 xl:p-24 text-white">
        <img class="h-12 w-12" src="/mirrornewsletter.svg" />
        <h1 class="mt-16 text-3xl">mirror newsletter</h1>
        <h2 class="mt-8 text-xl">
          mirrornewsletter.xyz is your weekly information source on all things NFT, web3 and DAO. All links curated by
          hand (with top secret ranking algo coming soon).
        </h2>
        <SignupForm class="mt-12" />
      </div>

      <div class="pl-12 xl:pl-24 mb-12 mt-12 text-white bg-black">
        built by
        <a href="https://twitter.com/devloper_eth">@<span class="underline">devloper_eth</span></a>
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
