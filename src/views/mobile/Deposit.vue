<template>
  <div class="w-full pt-[10px] px-[5px] font-mulish font-bold text-base text-white">
    <Card title="Deposit">
      <div class="w-full px-[2px] py-[10px]">
        <div class="grid grid-cols-2 gap-2 pb-[10px] border-b border-white-light-opacity mb-[10px]">
          <button
            class="h-10 rounded-[5px] hover:bg-primary hover:text-white"
            :class="{
              'bg-primary': activeTab == 'recharge',
              'bg-primary-opacity text-primary': activeTab != 'recharge'
            }"
            @click="handleClickTab('recharge')"
          >Recharge</button>
          <button
            class="h-10 rounded-[5px] hover:bg-primary hover:text-white"
            :class="{
              'bg-primary': activeTab == 'manual',
              'bg-primary-opacity text-primary': activeTab != 'manual'
            }"
            @click="handleClickTab('manual')"
          >Manual Deposit</button>
        </div>
        <div class="flex flex-col items-center pb-[10px] border-b border-white-light-opacity mb-[10px]">
          <div class="w-full grid grid-cols-4 gap-2 mb-[10px]">
            <button
              v-for="(list, index) in lists" :key="index"
              class="h-10 rounded-[5px] bg-primary-opacity text-primary hover:bg-primary hover:text-white"
              @click="setAmount(list)"
            >
              ₹{{ list }}
            </button>
          </div>
          <div class="flex flex-col w-full items-center" v-if="activeTab == 'recharge'">
            <div class="flex flex-col w-full mb-[10px]">
              <span class="mb-2">Amount<span class="text-danger">*</span> :</span>
              <input type="text" class="px-4 w-full h-10 outline-none bg-transparent border border-primary rounded-[5px]" placeholder="mini ₹ 100" v-model="amount">
            </div>
            <div class="grid grid-cols-2 gap-2 w-full">
              <button class="h-10 rounded-[5px] bg-primary text-white">Deposit</button>
              <button class="h-10 rounded-[5px] bg-primary-opacity text-primary hover:bg-primary hover:text-white">Cancel</button>
            </div>
          </div>
          <div class="flex flex-col w-full p-2 bg-primary-light-opacity rounded-[5px]" v-else>
            <div class="w-full">
              <div class="flex flex-col justify-center items-center h-[199px] bg-primary-light-opacity border-[1.5px] border-primary rounded-[5px] text-primary mb-2 cursor-pointer" @click="handleClickFile()">
                <span class="font-semibold text-[40px] leading-10">+</span>
                <span class="font-bold text-sm">Payment proof screenshot</span>
              </div>
              <p class="font-normal text-sm text-danger text-center">*Allowed file type JPG,JPEG, PNG</p>
              <input type="file" hidden accept="image/png, image/jpeg" ref="file">
            </div>
            <div class="w-full mt-[10px]">
              <input type="text" class="w-full h-10 px-4 outline-none bg-transparent border border-primary rounded-[5px] mb-[10px]" placeholder="₹ Enter Amount" v-model="amount">
              <input type="text" class="w-full h-10 px-4 outline-none bg-transparent border border-primary rounded-[5px] mb-[10px]" placeholder="UTR Trasation No">
              <div class="flex justify-between h-[410">
                <button class="w-40 h-10 rounded-[5px] bg-primary text-white mr-[10px]">Deposit</button>
                <button class="w-40 h-10 rounded-[5px] bg-primary-opacity text-primary hover:bg-primary hover:text-white">Cancel</button>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col items-center">
          <p class="w-full font-medium text-sm text-center mb-[10px]">
            Accept, process & disburse digital payments for your business.
            <span class="text-success">Fast & Secure Payment</span>
          </p>
          <div class="grid grid-cols-3 gap-2 w-full">
            <button
              v-for="(item, index) in payments" :key="index"
              class="flex justify-center items-center h-[33px] bg-light-secondary rounded-[5px]"
            >
              <img :src="$getImage(`../assets/${item}.svg`)" :alt="item" class="">
            </button>
          </div>
        </div>
      </div>
    </Card>
  </div>
</template>

<script>
import Card from '../../components/mobile/Card.vue';

export default {
    name: "mobile-deposit-view",
    data() {
        return {
            activeTab: "recharge",
            amount: null,
            lists: [1000, 2000, 5000, 10000, 15000, 20000, 25000, 50000],
            payments: ["skrill", "visa", "paytm", "bitcoin", "mastercard", "net-banking"],
        };
    },
    methods: {
        handleClickTab(tab) {
            this.activeTab = tab;
        },
        setAmount(amount) {
            this.amount = amount;
        },
        handleClickFile() {
            this.$refs.file.click();
        }
    },
    components: { Card }
}
</script>