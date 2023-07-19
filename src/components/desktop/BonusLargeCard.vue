<template>
  <div class="relative flex justify-between px-[30px] pt-[30px] pb-7 w-[694px] h-[258px] border-2 rounded-[20px]">
    <div class="flex flex-col justify-between">
      <span class="font-bold text-3xl leading-10">{{ title }}</span>
      <span class="font-bold text-2xl max-w-[196px]">{{ comment }}</span>
    </div>
    <GetBonus class="self-end w-[298px] mb-[7px]" :timeLeft="timeLeft" @detail="$emit('detail')" />
    <slot></slot>
  </div>
</template>

<script>
import GetBonus from './GetBonus.vue';

export default {
  name: "bonus-large-card-component",
  components: { GetBonus },
  props: {
    title: String,
    comment: String,
    timeLeft: Array,
  },
}
</script>