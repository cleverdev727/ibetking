<template>
  <div class="w-full pt-[10px] px-[5px] pb-[10px] font-mulish font-bold text-base text-white">
    <Card title="Account Statement" class="mb-[10px]">
      <div class="flex flex-col px-2 w-full">
        <div class="mb-[10px]">
          <p class="mb-[5px]">Range</p>
          <div class="text-black">
            <DateRangePicker :dateRange="dateRange">
              {{ picker.startDate | date }} - {{ picker.endDate | date }}
            </DateRangePicker>
          </div>
        </div>
        <div class="mb-[10px]">
          <p class="mb-[5px]">Transaction Type</p>
          <Select :options="['debit', 'credit']" />
        </div>
        <button class="flex w-full self-end justify-center items-center h-[43px] border-[1.5px] border-primary rounded-[5px] text-primary hover:bg-primary hover:text-white">Show</button>
      </div>
    </Card>
    <div>
      <div class="w-full overflow-x-scroll">
        <table class="w-full text-left bg-primary-light-opacity rounded-[5px] overflow-hidden mb-[30px]">
          <thead>
            <tr class="h-[43px] bg-primary-more-opacity rounded-[5px] overflow-hidden">
              <th class="px-5 rounded-l-[5px]">Date</th>
              <th class="px-5">Type</th>
              <th class="px-5">Detail</th>
              <th class="px-5">Amount</th>
              <th class="px-5 rounded-r-[5px]">Status</th>
            </tr>
          </thead>
          <tbody class="relative before:w-5 before:h-full before:absolute before:bg-[#2C2D53] after:w-5 after:h-full after:absolute after:top-0 after:right-0 after:bg-[#2C2D53] whitespace-nowrap">
            <tr
              v-for="(row, index) in rows"
              :key="index"
              class="border-b-[1.5px] border-white-lightest-opacity last:border-none"
            >
              <td class="px-5 py-5">
                <p>{{ row.date }}</p>
                <p class="text-base leading-5">{{ row.ago }}</p>
              </td>
              <td class="capitalize px-5">{{ row.type }}</td>
              <td class="px-5 underline hover:text-primary cursor-pointer" @click="openModal()">{{ row.detail }}</td>
              <td
                class="px-5"
                :class="{
                  'text-success': row.status == 'credit',
                  'text-danger': row.status == 'debit',
                }"
              >{{ row.amount }}</td>
              <td class="capitalize px-5">
                <span
                  class="flex justify-center items-center w-[102px] h-[33px] rounded-[5px]"
                  :class="{
                    'bg-success': row.status == 'credit',
                    'bg-danger': row.status == 'debit',
                  }"
                >
                  {{ row.status }}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="flex flex-col justify-between items-start">
        <p class="mb-2">Showing 1 to 10 of 50 entries</p>
        <div class="flex items-center">
          <span class="mr-4">First</span>
          <span class="mr-4">Previous</span>
          <span class="flex items-center justify-center w-[50px] aspect-square bg-light-secondary rounded-[5px] text-black mr-4">01</span>
          <span class="flex items-center justify-center w-[50px] aspect-square border border-light-secondary rounded-[5px] mr-4">02</span>
          <div class="flex items-center">
            <span class="mr-[5px]">Next</span>
            <img src="../../assets/arrow-down.svg" alt="arrow" class="w-[14px] -rotate-90">
          </div>
        </div>
      </div>
    </div>
    <DetailModal title="Bet History" :top="244" v-if="open" @close="closeModal()">
      <table class="w-full text-center whitespace-nowrap">
        <tr class="border-b-[1.5px] border-heavy-primary">
          <td class="px-2 py-5">Data</td>
          <td class="px-2">Market Name</td>
          <td class="px-2">Selection</td>
          <td class="px-2">Type</td>
          <td class="px-2">Won & Loss</td>
          <td class="px-2">Rate</td>
          <td class="px-2">Stake</td>
          <td class="px-2">P/L</td>
          <td class="px-2">DR</td>
          <td class="px-2">CR</td>
          <td class="px-2">Net</td>
        </tr>
        <tr>
          <td class="px-2 py-5">2023-02-26 11:27:47</td>
          <td class="px-2">7MOJOS - Infinite Wilds</td>
          <td class="px-2">Hon kog Rangers FC</td>
          <td class="px-2">Back</td>
          <td class="px-2">Loss</td>
          <td class="px-2">1.85</td>
          <td class="px-2">500</td>
          <td class="px-2">-145.00</td>
          <td class="px-2">145</td>
          <td class="px-2">145</td>
          <td class="px-2">-145</td>
        </tr>
      </table>
    </DetailModal>
  </div>
</template>

<script>
import Card from '../../components/mobile/Card.vue'
import DetailModal from '../../components/mobile/DetailModal.vue';
import Select from '../../components/mobile/Select.vue';
import DateRangePicker from 'vue3-daterange-picker/src';
// import 'vue3-daterange-picker/src/assets/daterangepicker.scss';

export default {
  name: 'mobile-statement-view',
  components: { Card, Select, DateRangePicker, DetailModal },
  data() {
    return {
      open: false,
      dateRange: {
        startDate: '2023-02-20',
        endDate: '2023-02-27'
      },
      rows: [
        {
          date: '2023-02-19 13:24:56',
          ago: '(1 week ago)',
          type: 'LiveCasino',
          detail: 'Bet Request - 7MOJOS - Infinite Wilds',
          amount: '-₹124.57',
          status: 'debit',
        },
        {
          date: '2023-02-19 13:24:56',
          ago: '(1 week ago)',
          type: 'LiveCasino',
          detail: 'Bet Request - 7MOJOS - Infinite Wilds',
          amount: '+₹100.00',
          status: 'credit',
        },
        {
          date: '2023-02-19 13:24:56',
          ago: '(1 week ago)',
          type: 'LiveCasino',
          detail: 'Bet Request - 7MOJOS - Infinite Wilds',
          amount: '-₹124.57',
          status: 'debit',
        },
        {
          date: '2023-02-19 13:24:56',
          ago: '(1 week ago)',
          type: 'LiveCasino',
          detail: 'Bet Request - 7MOJOS - Infinite Wilds',
          amount: '+₹100.00',
          status: 'credit',
        },
        {
          date: '2023-02-19 13:24:56',
          ago: '(1 week ago)',
          type: 'LiveCasino',
          detail: 'Bet Request - 7MOJOS - Infinite Wilds',
          amount: '-₹124.57',
          status: 'debit',
        },
        {
          date: '2023-02-19 13:24:56',
          ago: '(1 week ago)',
          type: 'LiveCasino',
          detail: 'Bet Request - 7MOJOS - Infinite Wilds',
          amount: '+₹100.00',
          status: 'credit',
        },
        {
          date: '2023-02-19 13:24:56',
          ago: '(1 week ago)',
          type: 'LiveCasino',
          detail: 'Bet Request - 7MOJOS - Infinite Wilds',
          amount: '-₹124.57',
          status: 'debit',
        },
        {
          date: '2023-02-19 13:24:56',
          ago: '(1 week ago)',
          type: 'LiveCasino',
          detail: 'Bet Request - 7MOJOS - Infinite Wilds',
          amount: '+₹100.00',
          status: 'credit',
        },
      ],
    }
  },
  methods: {
    openModal() {
      this.open = true;
    },
    closeModal() {
      this.open = false;
    }
  }
}
</script>