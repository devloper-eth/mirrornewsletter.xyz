<script>
import axios from "axios";
import { ChevronRightIcon, CheckCircleIcon, ExclamationCircleIcon } from "@heroicons/vue/outline";

export default {
  components: {
    ChevronRightIcon,
    CheckCircleIcon,
    ExclamationCircleIcon,
  },
  props: {
    email: String,
  },
  data: function () {
    return {
      success: null,
      pending: false,
    };
  },
  methods: {
    async subscribe(event) {
      event.preventDefault();
      this.success = null;
      this.pending = true;
      try {
        const res = await axios.post("https://us-central1-devloper-eth.cloudfunctions.net/mailchimp-proxy", {
          email: this.email,
        });
        this.success = true;
      } catch (error) {
        console.error(error);
        this.success = false;
      }
      this.pending = false;
    },
  },
};
</script>

<template>
  <div>
    <transition name="fade">
      <div v-show="success === false" class="inline-flex items-center">
        <ExclamationCircleIcon class="h-6 w-6 mr-1 inline-block" />
        Something went wrong!
      </div>
    </transition>

    <transition name="fade">
      <div v-show="success === true" class="flex flex-col inline-flex items-center sm:items-start sm:flex-row">
        <CheckCircleIcon class="h-16 w-16 mb-4 sm:h-8 sm:w-8 sm:mb-0 sm:mr-2" />
        <span class="text-lg sm:text-xl">You successfully subscribed to the newsletter!</span>
      </div>
    </transition>

    <div class="flex sm:flex-wrap" :class="{'animate-pulse': pending}" v-show="success !== true">
      <div class="flex-grow border-b-2 border-white">
        <input
          type="email"
          name="email"
          v-model="email"
          class="block w-full bg-black text-white h-12 pl-1 border-0 ring-0 focus:ring-0 focus:border-0"
          placeholder="your@email.com"
        />
      </div>
      <div class="flex-none border-b-2 border-white">
        <div class="inline-flex items-center">
          <button class="cursor-pointer h-12 pr-1" type="button" @click="subscribe" :disabled="pending">
            Subscribe<ChevronRightIcon
              class="inline-block font-bold h-4 w-4 -mt-1 text-white"
              :class="{'animate-ping': pending}"
            />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>