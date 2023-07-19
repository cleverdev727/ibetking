<template>
  <div class="mix-blend-exclusion">
    <img src="../../assets/top-pattern.png" alt="top-pattern" class="h-[35px] object-cover object-center">
    <div class="pt-[14px] pb-[18px] bg-pattern">
      <Title title="our providers" class="py-[7px] mb-[30px]" />
      <div class="relative w-full h-8 overflow-x-auto overflow-y-hidden scrollbar-hide">
        <div
          class="absolute flex"
        >
          <div
            v-for="(provider, index) in providers"
            :key="index"
            class="first:-ml-8 -ml-2"
          >
            <img :src="$getImage(`../assets/${provider}.png`)" :alt="provider" class="min-w-[132px] h-8">
          </div>
        </div>
      </div>
    </div>
    <img src="../../assets/bottom-pattern.png" alt="bottom-pattern" class="h-[35px] object-cover object-center">
  </div>
</template>

<script>
import Title from './Title.vue';

export default {
    name: "mobile-provider-component",
    components: { Title },
    data() {
      return {
        providers: ['ezugi', 'evolution', '7mojos', 'supernowa', 'superspade', 'onlyplay']
      }
    }
}
</script>