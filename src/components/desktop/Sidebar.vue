<template>
  <div
    class="overflow-hidden font-sans font-semibold text-sm text-white transition-all shrink-0"
    :class="{
      'w-[246px] max-3xl:w-[280px]': open,
      'w-[60px]': !open
    }"
  >
    <div
      v-for="(route, index) in routes"
      :key="index"
      class="flex h-10 pl-[21px] items-center hover:bg-more-primary rounded-r-md mb-[1px] cursor-pointer"
      :class="{
        'bg-more-primary': route.path == $route.path,
        'bg-heavy-primary': route.path != $route.path,
        'mb-[10px]': route.id == 'login'
      }"
      @click="redirectTo(route.path)"
    >
      <img
        :src="$getImage(`../assets/${route.id}.svg`)"
        :alt="route.id"
        class="w-5 mr-[10px]"
      >
      <span
        class="whitespace-nowrap transition"
        :class="{
          'opacity-100': open,
          'opacity-0': !open
        }"
      >{{ route.label }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'sidebar-component',
  props: {
    open: Boolean,
  },
  data() {
    return {
      routes: [
        {
          id: 'signup',
          path: '/signup',
          label: 'Sign Up',
        },
        {
          id: 'login',
          path: '/login',
          label: 'Sign In',
        },
        {
          id: 'home',
          path: '/',
          label: 'Home',
        },
        {
          id: 'inplay',
          path: '/inplay',
          label: 'In Play',
        },
        {
          id: 'sportbook',
          path: '/sportbook',
          label: 'Sportbook',
        },
        {
          id: 'casino',
          path: '/casino',
          label: 'Casino',
        },
        {
          id: 'live-casino',
          path: '/live-casino',
          label: 'Live Casino',
        },
      ]
    }
  },
  methods: {
    redirectTo(path) {
      this.$router.push(path);
    }
  }
}
</script>