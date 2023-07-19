<template>
  <div class="relative pt-[25.5px] pb-[27px] before:absolute before:w-full before:h-full before:left-0 before:top-0 before:bg-primary-light-opacity before:-skew-y-2">
    <div class="pb-[7px] border-b border-white-opacity mb-[7px]">
      <div class="relative z-20">
        <Title title="popular games" class="py-[6px]" />
        <div class="flex absolute right-2 bottom-0">
          <img
            src="../../assets/arrow-down.svg"
            alt="arrow"
            class="w-[14px] opacity-40 transition"
            :class="{
              '-rotate-90': !open
            }"
            @click="handleClick()"
          >
        </div>
      </div>
    </div>
    <div
      class="relative grid gap-1 overflow-hidden transition-all grid-cols-2 z-20"
      :class="{
        'max-h-[1000px]': open,
        'max-h-[0px]': !open,
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
      <img src="../../assets/jungle-gold.png" alt="jungle-gold" class="rounded-[10px] w-full">
      <img src="../../assets/jungle-games.png" alt="jungle-games" class="rounded-[10px] w-full">
      <img src="../../assets/jungle-gold.png" alt="jungle-gold" class="rounded-[10px] w-full">
      <img src="../../assets/jungle-games.png" alt="jungle-games" class="rounded-[10px] w-full">
    </div>
  </div>
</template>

<script>
import Title from './Title.vue';

export default {
  name: "mobile-popular-games-component",
  components: { Title },
  props: {
    flag: Boolean
  },
  data() {
    return {
      open: true,
    }
  },
  methods: {
    handleClick() {
      this.open = !this.open;
    }
  }
}
</script>