<template>
  <div class="w-full flex h-[22px] font-sans font-bold text-[10px] leading-[14px] text-middle-heavy-primary overflow-x-auto scrollbar-hide overflow-y-hidden">
    <div
      v-for="route in routes"
      :key="route.id"
      @click="this.$emit('changeTab', route.id)"
      class="group flex shrink-0 items-center justify-center px-[10px] mr-[5px] last:mr-0 hover:bg-primary rounded-[3px] cursor-pointer"
      :class="{
        'bg-primary': activeTab == route.id,
        'bg-white': activeTab != route.id,
      }"
    >
      <img
        :src="$getImage(`../assets/${route.id}.svg`)"
        :alt="route.id"
        class="w-[15px] mr-[5px] group-hover:brightness-0 group-hover:invert"
        :class="{
          'brightness-0 invert': activeTab == route.id,
          'w-[13px]': route.id == 'cricket'
        }"
      />
      <span :class="{'text-white': activeTab == route.id}" class="group-hover:text-white whitespace-nowrap">{{ route.label }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "mobile-tab-component",
  props: {
    activeTab: String,
  },
  data() {
    return {
      routes: [
        {
          id: "live",
          label: "L I V E",
        },
        {
          id: "cricket",
          label: "C R I C K E T",
        },
        {
          id: "soccer",
          label: "S O C C E R",
        },
        {
          id: "tennis",
          label: "T E N N I S",
        },
        {
          id: "badminton",
          label: "B A D M I N T O N",
        }
      ]
    };
  },
};
</script>