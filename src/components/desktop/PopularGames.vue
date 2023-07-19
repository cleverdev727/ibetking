<template>
  <div class="relative pt-10 pb-[46px] before:absolute before:w-full before:h-full before:left-0 before:top-0 before:bg-primary-light-opacity before:-skew-y-2">
    <div class="relative mb-[29px] z-20">
      <Title title="popular games" class="py-[15px]" />
      <div class="flex absolute right-0 bottom-0">
        <img src="../../assets/next.svg" alt="prev" class="w-[29px] opacity-60 rotate-180 cursor-pointer mr-2">
        <img src="../../assets/next.svg" alt="next" class="w-[29px] cursor-pointer">
      </div>
    </div>
    <div
      class="relative grid gap-2.5 overflow-hidden z-20"
      :class="{
        'grid-cols-5 max-3xl:grid-cols-7': !flag,
        'grid-cols-4 max-3xl:grid-cols-6': flag,
      }"
    >
      <img src="../../assets/blazing-bull.png" alt="blazing-bull" class="rounded-[10px] w-full">
      <img src="../../assets/caribbean-anne.png" alt="caribbean-anne" class="rounded-[10px] w-full">
      <img src="../../assets/jungle-stripes.png" alt="jungle-stripes" class="rounded-[10px] w-full">
      <img src="../../assets/blazing-bull.png" alt="blazing-bull" class="rounded-[10px] w-full">
      <img src="../../assets/caribbean-anne.png" alt="caribbean-anne" class="rounded-[10px] w-full">
      <img src="../../assets/jungle-stripes.png" alt="jungle-stripes" class="rounded-[10px] w-full">
      <img src="../../assets/cowboy-coins.png" alt="cowboy-coins" class="rounded-[10px] w-full">
      <img src="../../assets/jungle-gold.png" alt="jungle-gold" class="rounded-[10px] w-full">
      <img src="../../assets/jungle-gold.png" alt="jungle-gold" class="rounded-[10px] w-full hidden max-3xl:flex">
      <img src="../../assets/jungle-games.png" alt="jungle-games" class="rounded-[10px] w-full hidden max-3xl:flex">
      <img src="../../assets/jungle-gold.png" alt="jungle-gold" class="rounded-[10px] w-full hidden max-3xl:flex">
      <img src="../../assets/jungle-games.png" alt="jungle-games" class="rounded-[10px] w-full hidden max-3xl:flex">
      <img src="../../assets/jungle-games.png" alt="jungle-games" class="rounded-[10px] w-full" v-if="!flag">
      <img src="../../assets/cowboy-coins.png" alt="cowboy-coins" class="rounded-[10px] w-full" v-if="!flag">
    </div>
  </div>
</template>

<script>
import Title from './Title.vue';

export default {
  name: "popular-games-component",
  components: { Title },
  props: {
    flag: Boolean
  }
}
</script>