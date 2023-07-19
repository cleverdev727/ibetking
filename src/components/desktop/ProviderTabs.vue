<template>
  <div class="flex font-sans font-semibold text-base text-white">
    <div
      v-for="(provider, index) in providers"
      :key="index"
      class="flex items-center justify-center h-[42px] px-5 rounded-[5px] mr-[10px] hover:bg-primary"
      :class="{
        'bg-primary': activeTab == provider.id,
        'bg-heavy-primary': activeTab != provider.id,
      }"
      @click="handleClick(provider.id)"
    >
      <span v-if="provider.label !== ''">{{ provider.label }}</span>
      <img v-if="provider.img !== ''" :src="$getImage(`../assets/${provider.img}.svg`)" :alt="provider.img" :class="`h-[${provider.height}px]`">
    </div>
    <div
      class="flex items-center justify-center h-[42px] px-5 rounded-[5px] hover:bg-primary"
      :class="{
        'bg-primary': activeTab == 'search',
        'bg-heavy-primary': activeTab != 'search'.id,
      }"
      @click="handleClick('search')"
    >
      <img src="../../assets/search.svg" alt="search" class="h-5 mr-[10px]">
      <span>Search</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'provider-tab-component',
  data() {
    return {
      activeTab: 'favorite',
      providers: [
        { id: 'all', label: 'All', img: '' },
        { id: 'favorite', label: 'My Favorite', img: '' },
        { id: '7mojos', label: '', img: '7mojos', height: 22 },
        { id: 'superspade', label: '', img: 'superspade', height: 22 },
        { id: 'onlyplay', label: '', img: 'onlyplay', height: 15 },
        { id: 'evolution', label: '', img: 'evolution', height: 15 },
        { id: 'supernowa', label: '', img: 'supernowa', height: 15 },
        { id: 'ezugi', label: '', img: 'ezugi', height: 22 },
      ]
    }
  },
  methods: {
    handleClick(tab) {
      this.activeTab = tab;
    }
  }
}
</script>