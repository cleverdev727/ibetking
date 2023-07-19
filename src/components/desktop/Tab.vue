<template>
  <div class="flex h-[34px] font-sans font-bold text-xs text-middle-heavy-primary">
    <div
      v-for="route in routes"
      :key="route.id"
      @click="this.$emit('changeTab', route.id)"
      class="group flex items-center justify-start w-[189px] px-4 mr-[10px] hover:bg-primary rounded-[7px] cursor-pointer"
      :class="{
        'bg-primary': activeTab == route.id,
        'bg-white': activeTab != route.id,
      }"
    >
      <img
        :src="$getImage(`../assets/${route.id}.svg`)"
        :alt="route.id"
        class="h-[15px] mr-[10px] group-hover:brightness-0 group-hover:invert"
        :class="{
          'brightness-0 invert': activeTab == route.id
        }"
      />
      <span :class="{'text-white': activeTab == route.id}" class="group-hover:text-white">{{ route.label }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "tab-component",
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