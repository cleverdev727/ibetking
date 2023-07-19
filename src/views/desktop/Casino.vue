<template>
  <div>
    <div class="max-h-[480px] overflow-hidden rounded-[10px] mb-[10px]">
      <img src="../../assets/home.png" alt="home">
    </div>
    <div class="flex justify-center mb-[30px]">
      <ProviderTabs />
    </div>
    <div
      class="grid gap-2.5"
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
      <img src="../../assets/blazing-bull.png" alt="blazing-bull" class="rounded-[10px] w-full">
      <img src="../../assets/caribbean-anne.png" alt="caribbean-anne" class="rounded-[10px] w-full">
      <img src="../../assets/jungle-stripes.png" alt="jungle-stripes" class="rounded-[10px] w-full">
      <img src="../../assets/blazing-bull.png" alt="blazing-bull" class="rounded-[10px] w-full">
      <img src="../../assets/caribbean-anne.png" alt="caribbean-anne" class="rounded-[10px] w-full">
      <img src="../../assets/jungle-stripes.png" alt="jungle-stripes" class="rounded-[10px] w-full">
      <img src="../../assets/cowboy-coins.png" alt="cowboy-coins" class="rounded-[10px] w-full">
      <img src="../../assets/jungle-gold.png" alt="jungle-gold" class="rounded-[10px] w-full">
      <img src="../../assets/blazing-bull.png" alt="blazing-bull" class="rounded-[10px] w-full">
      <img src="../../assets/caribbean-anne.png" alt="caribbean-anne" class="rounded-[10px] w-full">
      <img src="../../assets/jungle-stripes.png" alt="jungle-stripes" class="rounded-[10px] w-full">
      <img src="../../assets/blazing-bull.png" alt="blazing-bull" class="rounded-[10px] w-full">
      <img src="../../assets/caribbean-anne.png" alt="caribbean-anne" class="rounded-[10px] w-full">
      <img src="../../assets/jungle-stripes.png" alt="jungle-stripes" class="rounded-[10px] w-full">
      <img src="../../assets/cowboy-coins.png" alt="cowboy-coins" class="rounded-[10px] w-full">
      <img src="../../assets/jungle-gold.png" alt="jungle-gold" class="rounded-[10px] w-full">
      <img src="../../assets/blazing-bull.png" alt="blazing-bull" class="rounded-[10px] w-full">
      <img src="../../assets/caribbean-anne.png" alt="caribbean-anne" class="rounded-[10px] w-full">
      <img src="../../assets/jungle-stripes.png" alt="jungle-stripes" class="rounded-[10px] w-full">
      <img src="../../assets/blazing-bull.png" alt="blazing-bull" class="rounded-[10px] w-full">
      <img src="../../assets/caribbean-anne.png" alt="caribbean-anne" class="rounded-[10px] w-full">
      <img src="../../assets/jungle-stripes.png" alt="jungle-stripes" class="rounded-[10px] w-full">
      <img src="../../assets/cowboy-coins.png" alt="cowboy-coins" class="rounded-[10px] w-full">
      <img src="../../assets/jungle-gold.png" alt="jungle-gold" class="rounded-[10px] w-full">
      <img src="../../assets/blazing-bull.png" alt="blazing-bull" class="rounded-[10px] w-full">
      <img src="../../assets/caribbean-anne.png" alt="caribbean-anne" class="rounded-[10px] w-full">
      <img src="../../assets/jungle-stripes.png" alt="jungle-stripes" class="rounded-[10px] w-full">
      <img src="../../assets/blazing-bull.png" alt="blazing-bull" class="rounded-[10px] w-full">
      <img src="../../assets/caribbean-anne.png" alt="caribbean-anne" class="rounded-[10px] w-full">
      <img src="../../assets/jungle-stripes.png" alt="jungle-stripes" class="rounded-[10px] w-full">
      <img src="../../assets/cowboy-coins.png" alt="cowboy-coins" class="rounded-[10px] w-full">
      <img src="../../assets/jungle-gold.png" alt="jungle-gold" class="rounded-[10px] w-full">
    </div>
  </div>
</template>

<script>
import ProviderTabs from '../../components/desktop/ProviderTabs.vue';

export default {
  name: "casino-view",
  components: { ProviderTabs },
  props: {
    flag: Boolean
  }
}
</script>