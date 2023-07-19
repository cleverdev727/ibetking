<template>
  <div class="relative" @click="handleRedirect(id)">
    <div class="flex justify-between h-6 mb-[1px]">
      <div class="flex overflow-hidden rounded-t-[5px]">
        <div class="flex justify-center items-center w-[13px] h-6 bg-primary" v-if="isPlaying">
          <span class="font-bold text-[8px] leading-[11px] text-light-secondary -rotate-90">LIVE</span>
        </div>
        <div class="flex items-center px-[10px] bg-primary-more-opacity">
          <span class="font-semibold text-[10px] leading-[14px]">{{ name }}</span>
        </div>
      </div>
      <div class="flex justify-between items-center px-[10px] rounded-t-[5px] bg-primary">
        <span>{{ date }} {{ time }}</span>
      </div>
    </div>
    <div class="px-[2px] bg-primary-light-opacity rounded-b-[5px]">
      <div class="flex justify-between p-2 border-b border-white-opacity">
        <div class="flex items-center">
          <img :src="$getImage(`../assets/${countries[0]}.svg`)" :alt="countries[0]" class="w-[13px] mr-1" />
          <span class="font-bold text-xs capitalize">{{ countries[0] }}</span>
        </div>
        <div class="flex items-center">
          <img src="../../assets/play.svg" alt="play" class="w-[10px] mr-[3px]">
          <img src="../../assets/chart.svg" alt="chart" class="w-[10px] mr-[10px]">
          <PointCard
            :flag="points[0][2]"
            :val1="points[0][0]"
            :val2="points[0][1]"
            class="mr-[5px]"
          />
          <PointCard
            :flag="points[1][2]"
            :val1="points[1][0]"
            :val2="points[1][1]"
            class="mr-[5px]"
          />
        </div>
      </div>
      <div class="flex justify-between p-2">
        <div class="flex items-center">
          <img :src="$getImage(`../assets/${countries[1]}.svg`)" :alt="countries[1]" class="w-[13px] mr-1" />
          <span class="font-bold text-xs capitalize">{{ countries[1] }}</span>
        </div>
        <div class="flex items-center">
          <img src="../../assets/play.svg" alt="play" class="w-[10px] mr-[3px]">
          <img src="../../assets/chart.svg" alt="chart" class="w-[10px] mr-[10px]">
          <PointCard
            :flag="points[2][2]"
            :val1="points[2][0]"
            :val2="points[2][1]"
            class="mr-[5px]"
          />
          <PointCard
            :flag="points[3][2]"
            :val1="points[3][0]"
            :val2="points[3][1]"
            class="mr-[5px]"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PointCard from './PointCard.vue'
export default {
  name: "mobile-match-row-component",
  components: {
    PointCard,
  },
  props: {
    id: Number,
    isPlaying: Boolean,
    date: String,
    time: String,
    countries: Array,
    name: String,
    points: Array
  },
  methods: {
    handleRedirect(id) {
      this.$router.push(`/mobile/match/${id}`);
    }
  }
}
</script>