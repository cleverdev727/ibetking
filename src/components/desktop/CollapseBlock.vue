<template>
  <div
    class="over-flow-hidden transition-all shrink-0"
    :class="{
      'w-[246px] max-3xl:w-[280px]': open,
      'w-[60px]': !open
    }"
  >
    <div
      class="clip-collapse relative flex overflow-hidden items-center justify-center h-[37px] bg-primary cursor-pointer mb-5"
      @click="this.$emit('toggle')"
    >
      <span
        class="mr-[0.5px] font-semibold text-base text-light whitespace-nowrap"
        :class="{
          'opacity-0': !open,
          'opacity-100': open,
        }"
      >Collapse block</span>
      <img
        src="../../assets/double-arrow-right.svg"
        alt="arrow"
        class="absolute w-5 transition"
        :class="{
          'rotate-180 right-[18.53px]': !open,
          'right-[12.25px]': open,
        }"
      >
    </div>
    <div
      class="overflow-hidden transition-all"
      :class="{
        'w-full': open,
        'w-0': !open,
      }"
    >
      <div class="px-[10px] pt-[30px] pb-5 bg-heavy-primary rounded-l-[5px] mb-[18px]">
        <p class="font-bold text-xl text-white text-center mb-[18px]">REGISTRATION</p>
        <div class="grid grid-cols-2 h-[37px] font-semibold text-base mb-[18px]">
          <button class="clip-collapse bg-primary text-white">By Phone</button>
          <button class="clip-collapse-reverse bg-primary-opacity text-primary">By Email</button>
        </div>
        <div class="font-medium text-sm text-white">
          <div class="relative flex mb-[18px]">
            <img src="../../assets/user.svg" alt="user" class="absolute w-5 left-0">
            <input type="text" placeholder="Enter Username" class="w-full pl-[35px] bg-transparent border-b border-white-opacity outline-none placeholder:text-white pb-3" />
          </div>
          <div class="relative flex mb-[18px]">
            <div class="w-12 mr-[10px]">
              <img src="../../assets/phone.svg" alt="phone" class="absolute w-5 left-0">
              <input type="text" placeholder="+91" class="w-full pl-[26px] bg-transparent border-b border-white-opacity outline-none placeholder:text-white pb-3" maxlength="3" />
            </div>
            <div class="flex flex-grow">
              <input type="text" placeholder="Enter Mobile Number" class="w-full bg-transparent border-b border-white-opacity outline-none placeholder:text-white pb-3" />
            </div>
          </div>
          <div class="relative flex mb-[18px]">
            <img src="../../assets/lock.svg" alt="lock" class="absolute h-5 left-0">
            <input type="text" placeholder="Create Password" class="w-full pl-[36px] bg-transparent border-b border-white-opacity outline-none placeholder:text-white pb-3" />
          </div>
        </div>
        <div class="font-medium text-xs text-justify text-secondary mb-[18px]">
          <p class="mb-[18px]">We will send you a text to verify your e-mail or phone.</p>
          <p>Message and Data rates may apply</p>
        </div>
        <button class="clip-small w-full h-[37px] bg-primary font-semibold text-base text-white">REGISTER</button>
      </div>
      <div
        class="overflow-hidden transition-all mb-5"
        :class="{
          'max-h-[370px]': bonusFlag,
          'max-h-10': !bonusFlag,
        }"
      >
        <div
          class="flex justify-between items-center h-10 px-[14px] bg-heavy-primary rounded-l-[5px] mb-[5px] cursor-pointer"
          @click="toggleBonus()"
        >
          <span class="font-semibold text-base text-white">BONUS</span>
          <img src="../../assets/arrow-down.svg" alt="arrow" class="w-[15px] transition opacity-20" :class="{'-rotate-90': bonusFlag}">
        </div>
        <div class="h-40 pt-[25px] pb-[13px] pl-6 bg-wheel bg-cover rounded-l-[5px] font-bold text-base leading-5 text-white mb-[5px]">
          <p class="drop-shadow-text mb-3">Wheel Of Fortune</p>
          <p class="max-w-[79px] drop-shadow-text mb-3">Spin now and Win!</p>
          <button class="px-[10px] h-[38px] bg-primary shadow-button rounded-[5px]">PLAY HERE</button>
        </div>
        <div class="h-40 pt-[57px] pb-[13px] pl-6 bg-apple bg-cover rounded-l-[5px] font-bold text-base leading-5 text-white">
          <p class="max-w-[124px] drop-shadow-text mb-3">Try your luck - taste an apple!</p>
          <button class="px-[10px] h-[38px] bg-primary shadow-button rounded-[5px]">PLAY HERE</button>
        </div>
      </div>
      <div class="px-[10px] pt-[30px] pb-5 rounded-l-[5px] bg-heavy-primary mb-5">
        <p class="font-bold text-xl text-white text-center mb-[18px]">BIG WIG TODAY!</p>
        <div class="relative flex justify-center mb-[18px]">
          <img src="../../assets/ribbon.png" alt="ribbon" class="h-10">
          <span class="absolute font-bold text-sm text-white top-2">WIGGEST WINERS</span>
        </div>
        <div>
          <div
            v-for="(user, index) in userLists"
            :key="index"
            class="flex justify-between items-center mb-[18px] last:mb-0"
          >
            <img :src="$getImage(`../assets/${user.rank}.svg`)" :alt="user.rank" class="h-5">
            <img :src="$getImage(`../assets/${user.img}.svg`)" :alt="user.img" class="w-[25px]">
            <span class="font-semibold text-sm text-white">{{ user.name }}</span>
            <div
              class="flex justify-center items-center w-[74px] h-[30px] rounded-[5px] px-[6.5px]"
              :class="{
                'bg-light-warning': user.rank == 'first',
                'bg-heavy-pink': user.rank == 'second',
                'bg-success': user.rank == 'third',
              }"
            >
              <span class="font-semibold text-sm text-purple truncate">$ {{ user.price }}</span>
            </div>
          </div>
        </div>
      </div>
      <div
        class="overflow-hidden transition-all mb-5"
        :class="{
          'max-h-[370px]': offerFlag,
          'max-h-10': !offerFlag,
        }"
      >
        <div
          class="flex justify-between items-center h-10 px-[14px] bg-heavy-primary rounded-l-[5px] mb-[5px] cursor-pointer"
          @click="toggleOffer()"
        >
          <span class="font-semibold text-base text-white">OFFER</span>
          <img src="../../assets/arrow-down.svg" alt="arrow" class="w-[15px] transition opacity-20" :class="{'-rotate-90': offerFlag}">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'collapse-block-component',
  props: {
    open: Boolean,
  },
  data() {
    return {
      bonusFlag: true,
      offerFlag: false,
      userLists: [
        {
          rank: 'first',
          img: 'user-yellow',
          name: 'Badsha786',
          price: '20.6579909',
        },
        {
          rank: 'second',
          img: 'user-pink',
          name: 'Badsha786',
          price: '20.6579909',
        },
        {
          rank: 'third',
          img: 'user-green',
          name: 'Badsha786',
          price: '20.6579909',
        },
      ]
    }
  },
  methods: {
    toggleBonus() {
      this.bonusFlag = !this.bonusFlag;
    },
    toggleOffer() {
      this.offerFlag = !this.offerFlag;
    }
  }
}
</script>