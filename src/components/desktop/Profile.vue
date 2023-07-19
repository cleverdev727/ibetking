<template>
  <div class="w-[286px] p-[10px] bg-heavy-primary rounded-[10px] font-mulish text-white">
    <div class="pl-[11px] mb-5">
      <div class="flex items-center justify-between mb-[30px]">
        <div class="flex items-center">
          <img src="../../assets/user-yellow.svg" alt="avatar" class="h-[33px] mr-[10px]">
          <div>
            <p class="font-bold text-xs mb-[5px]">Badshah786</p>
            <div class="flex items-center">
              <span class="font-normal text-[10px] leading-[13px] mr-[3px]">ID:1234567890</span>
              <img src="../../assets/clipboard.svg" alt="clipboard" class="h-[13px]">
            </div>
          </div>
        </div>
        <button class="w-[98px] h-[33px] bg-little-more-primary rounded-[5px]" @click="$emit('logout')">Logout</button>
      </div>
      <div class="flex">
        <div class="mr-[61px]">
          <p class="font-semibold text-xs mb-[5px]">Main Balance</p>
          <p class="font-bold text-xs">₹ 0.00</p>
        </div>
        <div>
          <p class="font-semibold text-xs mb-[5px]">Bonus Balance</p>
          <p class="font-bold text-xs">₹ 0.00</p>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-3 grid-rows-2 gap-y-5 pr-2 pt-6 pb-[14px] bg-little-more-primary rounded-[10px] font-bold text-xs">
      <div class="flex flex-col items-center cursor-pointer" v-for="(list, index) in lists" :key="index" @click="handleRedirect(list.id)">
        <img
          :src="$getImage(`../assets/${list.img}.svg`)" :alt="list.id" class="mb-[5px]"
          :class="[list.id == 'statement' ? 'w-6' : 'h-6']"
        >
        <span>{{ list.label }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'profile-component',
  data() {
    return {
      lists: [
        { id: 'account', label: 'Account', img: 'avatar-border' },
        { id: 'transactions', label: 'D/W History', img: 'exchange' },
        { id: 'bet-history', label: 'Bet History', img: 'bet' },
        { id: 'exposure', label: 'Exposure', img: 'exposure' },
        { id: 'deposit', label: 'Deposit', img: 'deposit' },
        { id: 'withdraw', label: 'Withdraw', img: 'withdraw-profile' },
        { id: 'statement', label: 'Statement', img: 'statement' },
        { id: 'bonus', label: 'Bonus', img: 'gift' },
      ]
    }
  },
  methods: {
    handleRedirect(id) {
      this.$emit('close');
      this.$router.push(`/${id}`);
    }
  }
}
</script>