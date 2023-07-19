<template>
  <div class="relative p-5 w-[337px] h-[258px] border-2 rounded-[20px]">
    <p class="font-bold text-sm mb-5">{{ title }}</p>
    <p class="max-w-[120px] font-bold text-xl mb-2">{{ comment }}</p>
    <GetBonus class="self-end w-[298px] mb-[7px]" :timeLeft="timeLeft" @detail="$emit('detail')" />
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