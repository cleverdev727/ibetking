<template>
  <div class="mix-blend-exclusion">
    <img src="../../assets/top-pattern.png" alt="top-pattern" class="w-full">
    <div class="pt-[26px] pb-[13px] bg-pattern" v-bind="$attrs">
      <Title title="our providers" class="py-[15px] mb-[50px]" />
      <div class="relative w-full h-20 overflow-hidden rounded-[10px]">
        <div
          class="absolute flex max-3xl:left-1/2 max-3xl:-translate-x-1/2"
          :class="{
            'left-1/2 -translate-x-1/2': !flag,
            '-left-[100px]': flag,
          }"
        >
          <div
            v-for="(provider, index) in providers"
            :key="index"
            class="first:ml-0 -ml-6 max-3xl:ml-0"
          >
            <img :src="$getImage(`../assets/${provider}.png`)" :alt="provider" class="min-w-[330px] h-20">
          </div>
        </div>
      </div>
    </div>
    <img src="../../assets/bottom-pattern.png" alt="bottom-pattern" class="w-full">
  </div>
</template>

<script>
import Title from './Title.vue';

export default {
    name: "provider-component",
    inheritAttrs: false,
    components: { Title },
    props: {
      flag: Boolean,
    },
    data() {
      return {
        providers: ['ezugi', 'evolution', '7mojos', 'supernowa', 'superspade', 'onlyplay']
      }
    }
}
</script>