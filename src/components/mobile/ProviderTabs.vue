<template>
  <div class="flex flex-wrap justify-center gap-y-[5px] font-sans font-semibold text-[8px] leading-[11px] text-white">
    <div
      v-for="(provider, index) in providers"
      :key="index"
      class="flex items-center justify-center h-6 px-[10px] rounded-[5px] mr-[5px] hover:bg-primary"
      :class="{
        'bg-primary': activeTab == provider.id,
        'bg-heavy-primary': activeTab != provider.id,
      }"
      @click="handleClick(provider.id)"
    >
      <span v-if="provider.label !== ''">{{ provider.label }}</span>
      <img
        v-if="provider.img !== ''"
        :src="$getImage(`../assets/${provider.img}.svg`)"
        :alt="provider.img"
        :class="{
          'h-[10px]': provider.id == 'ezugi',
          'h-[14px]': provider.id == '7mojos' || provider.id == 'superspade',
          'h-2': provider.id != '7mojos' & provider.id != 'superspade' && provider.id != 'ezugi',
        }"
      >
    </div>
    <div
      class="flex items-center justify-center h-6 px-[10px] rounded-[5px] hover:bg-primary"
      :class="{
        'bg-primary': activeTab == 'search',
        'bg-heavy-primary': activeTab != 'search'.id,
      }"
      @click="handleClick('search')"
    >
      <img src="../../assets/search.svg" alt="search" class="h-[10px] mr-[5px]">
      <span>Search</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'mobile-provider-tab-component',
  data() {
    return {
      activeTab: 'favorite',
      providers: [
        { id: 'all', label: 'All', img: '' },
        { id: 'favorite', label: 'My Favorite', img: '' },
        { id: '7mojos', label: '', img: '7mojos', height: 14 },
        { id: 'superspade', label: '', img: 'superspade', height: 14 },
        { id: 'onlyplay', label: '', img: 'onlyplay', height: 8 },
        { id: 'evolution', label: '', img: 'evolution', height: 8 },
        { id: 'supernowa', label: '', img: 'supernowa', height: 8 },
        { id: 'ezugi', label: '', img: 'ezugi', height: 10 },
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