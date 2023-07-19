<template>
  <div class="relative px-2 pt-4 w-full h-[258px] border-2 rounded-[10px]">
    <p class="font-bold text-sm mb-5">{{ title }}</p>
    <p class="max-w-[120px] font-bold text-xl mb-2">{{ comment }}</p>
    <GetBonus class="self-end w-full" :timeLeft="timeLeft" @detail="$emit('detail')" />
    <slot></slot>
  </div>
</template>

<script>
import GetBonus from './GetBonus.vue';

export default {
  name: "bonus-card-component",
  components: { GetBonus },
  props: {
    title: String,
    comment: String,
    timeLeft: Array,
  },
}
</script>