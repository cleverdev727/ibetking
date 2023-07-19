<template>
  <div
    class="absolute h-full overflow-hidden font-sans font-semibold text-[10px] leading-[14px] text-white transition-all shrink-0 top-0 z-40"
    :class="{
      'w-full': open,
      'w-0': !open
    }"
  >
    <div class="flex flex-col w-[189px] h-full pt-3 bg-dark">
      <div
        v-for="(route, index) in routes"
        :key="index"
        class="flex h-[35px] pl-[10px] items-center hover:bg-more-primary rounded-r-md cursor-pointer"
        :class="{
          'bg-more-primary': route.path == $route.path,
          'bg-heavy-primary': route.path != $route.path,
          'mb-[5px]': route.id === 'login',
          'mb-[1px]': route.id !== 'login'
        }"
        @click="redirectTo(route.path)"
      >
        <img
          :src="$getImage(`../assets/${route.id}.svg`)"
          :alt="route.id"
          class="w-[15px] mr-[5px]"
        >
        <span
          class="whitespace-nowrap transition"
          :class="{
            'opacity-100': open,
            'opacity-0': !open
          }"
        >{{ route.label }}</span>
      </div>
      <div class="flex flex-grow bg-heavy-primary rounded-r-md"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'mobile-sidebar-component',
  props: {
    open: Boolean,
  },
  data() {
    return {
      routes: [
        {
          id: 'signup',
          path: '/mobile/signup',
          label: 'Sign Up',
        },
        {
          id: 'login',
          path: '/mobile/login',
          label: 'Sign In',
        },
        {
          id: 'home',
          path: '/mobile',
          label: 'Home',
        },
        {
          id: 'inplay',
          path: '/mobile/inplay',
          label: 'In Play',
        },
        {
          id: 'sportbook',
          path: '/mobile/sportbook',
          label: 'Sportbook',
        },
        {
          id: 'casino',
          path: '/mobile/casino',
          label: 'Casino',
        },
        {
          id: 'live-casino',
          path: '/mobile/live-casino',
          label: 'Live Casino',
        },
      ]
    }
  },
  methods: {
    redirectTo(path) {
      this.$router.push(path);
      this.$emit('toggle');
    }
  }
}
</script>