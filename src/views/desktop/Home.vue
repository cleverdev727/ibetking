<template>
  <div>
    <div class="max-h-[480px] overflow-hidden rounded-[10px] mb-[10px]">
      <img src="../../assets/home.png" alt="home">
    </div>
    <Tab :active-tab="activeTab" @changeTab="handleChangeTab" class="mb-[10px]" />
    <div v-if="activeTab === 'live'">
      <Accordion
        v-for="(type, index) in getLiveMatchTypes"
        :key="index"
        :type="type"
        :scores="[1, 2]"
        :num="10"
        :matchRows="getLiveMatchRowsByType(type)"
        class="mb-[10px] last:mb-0"
      />
    </div>
    <div v-else>
      <Accordion :type="activeTab" :scores="[1, 2]" :num="10" :matchRows="getMatchRowsByType()" />
    </div>
  </div>
</template>

<script>
import Accordion from '../../components/desktop/Accordion.vue';
import Tab from '../../components/desktop/Tab.vue';

export default {
    name: "home-view",
    components: { Tab, Accordion },
    data() {
      return {
        activeTab: 'live',
        matchRows: [
          {
            id: 1,
            isPlaying: true,
            type: 'cricket',
            date: 'Today',
            time: '08:43 PM',
            countries: ['india', 'pakistan'],
            name: 'ICC World Cricket League Matches',
            points: [
              [0, 1690, true],
              [1.7, 1740, false],
              [1.69, 1690, true],
              [1.7, 1740, false],
              [1.69, 1690, true],
              [1.7, 1740, false]
            ]
          },
          {
            id: 2,
            isPlaying: true,
            type: 'cricket',
            date: 'Today',
            time: '08:43 PM',
            countries: ['india', 'pakistan'],
            name: 'ICC World Cricket League Matches',
            points: [
              [1.69, 1690, true],
              [1.7, 1740, false],
              [1.69, 1690, true],
              [1.7, 1740, false],
              [1.69, 1690, true],
              [1.7, 1740, false]
            ]
          },
          {
            id: 3,
            isPlaying: false,
            type: 'cricket',
            date: 'Today',
            time: '08:43 PM',
            countries: ['india', 'pakistan'],
            name: 'ICC World Cricket League Matches',
            points: [
              [1.69, 1690, true],
              [1.7, 1740, false],
              [1.69, 1690, true],
              [1.7, 1740, false],
              [1.69, 1690, true],
              [1.7, 1740, false]
            ]
          },
          {
            id: 4,
            isPlaying: true,
            type: 'cricket',
            date: 'Today',
            time: '08:43 PM',
            countries: ['india', 'pakistan'],
            name: 'ICC World Cricket League Matches',
            points: [
              [1.69, 1690, true],
              [1.7, 1740, false],
              [1.69, 1690, true],
              [1.7, 1740, false],
              [1.69, 1690, true],
              [1.7, 1740, false]
            ]
          },
          {
            id: 5,
            isPlaying: true,
            type: 'cricket',
            date: 'Today',
            time: '08:43 PM',
            countries: ['india', 'pakistan'],
            name: 'ICC World Cricket League Matches',
            points: [
              [1.69, 1690, true],
              [1.7, 1740, false],
              [1.69, 1690, true],
              [1.7, 1740, false],
              [1.69, 1690, true],
              [1.7, 1740, false]
            ]
          },
          {
            id: 6,
            isPlaying: false,
            type: 'cricket',
            date: 'Today',
            time: '08:43 PM',
            countries: ['india', 'pakistan'],
            name: 'ICC World Cricket League Matches',
            points: [
              [1.69, 1690, true],
              [1.7, 1740, false],
              [1.69, 1690, true],
              [1.7, 1740, false],
              [1.69, 1690, true],
              [1.7, 1740, false]
            ]
          },
          {
            id: 7,
            isPlaying: false,
            type: 'soccer',
            date: 'Today',
            time: '08:43 PM',
            countries: ['india', 'pakistan'],
            name: 'ICC World Cricket League Matches',
            points: [
              [1.69, 1690, true],
              [1.7, 1740, false],
              [1.69, 1690, true],
              [1.7, 1740, false],
              [1.69, 1690, true],
              [1.7, 1740, false]
            ]
          },
          {
            id: 8,
            isPlaying: true,
            type: 'soccer',
            date: 'Today',
            time: '08:43 PM',
            countries: ['india', 'pakistan'],
            name: 'ICC World Cricket League Matches',
            points: [
              [1.69, 1690, true],
              [1.7, 1740, false],
              [1.69, 1690, true],
              [1.7, 1740, false],
              [1.69, 1690, true],
              [1.7, 1740, false]
            ]
          },
          {
            id: 9,
            isPlaying: true,
            type: 'soccer',
            date: 'Today',
            time: '08:43 PM',
            countries: ['india', 'pakistan'],
            name: 'ICC World Cricket League Matches',
            points: [
              [1.69, 1690, true],
              [1.7, 1740, false],
              [1.69, 1690, true],
              [1.7, 1740, false],
              [1.69, 1690, true],
              [1.7, 1740, false]
            ]
          },
          {
            id: 10,
            isPlaying: false,
            type: 'soccer',
            date: 'Today',
            time: '08:43 PM',
            countries: ['india', 'pakistan'],
            name: 'ICC World Cricket League Matches',
            points: [
              [1.69, 1690, true],
              [1.7, 1740, false],
              [1.69, 1690, true],
              [1.7, 1740, false],
              [1.69, 1690, true],
              [1.7, 1740, false]
            ]
          },
          {
            id: 11,
            isPlaying: false,
            type: 'tennis',
            date: 'Today',
            time: '08:43 PM',
            countries: ['india', 'pakistan'],
            name: 'ICC World Cricket League Matches',
            points: [
              [1.69, 1690, true],
              [1.7, 1740, false],
              [1.69, 1690, true],
              [1.7, 1740, false],
              [1.69, 1690, true],
              [1.7, 1740, false]
            ]
          },
          {
            id: 12,
            isPlaying: true,
            type: 'tennis',
            date: 'Today',
            time: '08:43 PM',
            countries: ['india', 'pakistan'],
            name: 'ICC World Cricket League Matches',
            points: [
              [1.69, 1690, true],
              [1.7, 1740, false],
              [1.69, 1690, true],
              [1.7, 1740, false],
              [1.69, 1690, true],
              [1.7, 1740, false]
            ]
          },
          {
            id: 13,
            isPlaying: false,
            type: 'tennis',
            date: 'Today',
            time: '08:43 PM',
            countries: ['india', 'pakistan'],
            name: 'ICC World Cricket League Matches',
            points: [
              [1.69, 1690, true],
              [1.7, 1740, false],
              [1.69, 1690, true],
              [1.7, 1740, false],
              [1.69, 1690, true],
              [1.7, 1740, false]
            ]
          },
          {
            id: 14,
            isPlaying: true,
            type: 'tennis',
            date: 'Today',
            time: '08:43 PM',
            countries: ['india', 'pakistan'],
            name: 'ICC World Cricket League Matches',
            points: [
              [1.69, 1690, true],
              [1.7, 1740, false],
              [1.69, 1690, true],
              [1.7, 1740, false],
              [1.69, 1690, true],
              [1.7, 1740, false]
            ]
          },
          {
            id: 15,
            isPlaying: false,
            type: 'badminton',
            date: 'Today',
            time: '08:43 PM',
            countries: ['india', 'pakistan'],
            name: 'ICC World Cricket League Matches',
            points: [
              [1.69, 1690, true],
              [1.7, 1740, false],
              [1.69, 1690, true],
              [1.7, 1740, false],
              [1.69, 1690, true],
              [1.7, 1740, false]
            ]
          },
          {
            id: 16,
            isPlaying: true,
            type: 'badminton',
            date: 'Today',
            time: '08:43 PM',
            countries: ['india', 'pakistan'],
            name: 'ICC World Cricket League Matches',
            points: [
              [1.69, 1690, true],
              [1.7, 1740, false],
              [1.69, 1690, true],
              [1.7, 1740, false],
              [1.69, 1690, true],
              [1.7, 1740, false]
            ]
          },
        ],
      }
    },
    computed: {
      getLiveMatchTypes() {
        const liveMatchRows = this.matchRows.filter(item => item.isPlaying === true);
        const typeArr = liveMatchRows.map(item => item.type);
        return typeArr.filter((item, index) => typeArr.indexOf(item) === index);
      }
    },
    methods: {
      handleChangeTab(tab) {
        this.activeTab = tab;
      },
      getMatchRowsByType() {
        return this.matchRows.filter(item => item.type === this.activeTab);
      },
      getLiveMatchRowsByType(type) {
        return this.matchRows.filter(item => item.type === type && item.isPlaying === true);
      }
    }
}
</script>