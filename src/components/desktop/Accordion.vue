<template>
  <div
    class="px-[10px] pt-[10px] pb-[6px] bg-primary-light-opacity rounded-[10px]"
  >
    <div
      class="flex justify-between font-semibold text-sm text-white pr-5 pb-[10px] mb-[10px] border-b border-white-opacity cursor-pointer"
      @click="handleClick()"
    >
      <div class="flex items-center">
        <img
          :src="$getImage(`../assets/${type}.svg`)"
          :alt="type"
          class="brightness-0 invert mr-[11px] h-[25px]"
        />
        <span class="uppercase">{{ `${type} (${num})` }} </span>
      </div>
      <div class="relative flex w-[635px] items-center font-sans">
        <span class="w-1/3 text-center">{{ scores[0] }}</span>
        <span class="w-1/3 text-center">X</span>
        <span class="w-1/3 text-center">{{ scores[1] }}</span>
        <img
          src="../../assets/arrow-down.svg"
          alt="arrow"
          class="absolute w-[14px] bottom-0 right-0 cursor-pointer transition opacity-20"
          :class="{
            '-rotate-90': !open
          }"
        />
      </div>
    </div>
    <div
      class="pl-2 font-sans font-semibold text-sm text-center text-white overflow-hidden transition-all"
      :class="{
        'max-h-0' : !open,
        'opacity-100 max-h-[1000px]' : open,
      }"
    >
      <div v-for="(row, key) in matchRows" :key="key" class="mb-[5px] last:mb-0">
        <MatchRow v-bind="row" />
      </div>
    </div>
  </div>
</template>

<script>
import MatchRow from './MatchRow.vue';
export default {
  name: 'accordion-component',
  components: {
    MatchRow
  },
  props: {
    type: String,
    num: Number,
    scores: Array,
    matchRows: Array
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