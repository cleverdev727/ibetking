<template>
  <div class="w-full pt-[10px] pr-[10px] pb-9 font-mulish font-bold text-lg leading-6 text-white">
    <Card title="Account Statement" class="mb-[10px]">
      <div class="flex w-full">
        <div class="mr-5">
          <p class="mb-[10px]">Range</p>
          <div class="text-black">
            <DateRangePicker :dateRange="dateRange">
              {{ picker.startDate | date }} - {{ picker.endDate | date }}
            </DateRangePicker>
          </div>
        </div>
        <div class="mr-5">
          <p class="mb-[10px]">Transaction Type</p>
          <Select :options="['debit', 'credit']" />
        </div>
        <button class="flex self-end justify-center items-center w-[182px] h-[43px] border-[1.5px] border-primary rounded-[5px] text-primary hover:bg-primary hover:text-white">Show</button>
      </div>
    </Card>
    <div>
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
        <tbody class="relative before:w-5 before:h-full before:absolute before:bg-[#2C2D53] after:w-5 after:h-full after:absolute after:top-0 after:right-0 after:bg-[#2C2D53]">
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
      <div class="flex justify-between items-center">
        <span>Showing 1 to 10 of 50 entries</span>
        <div class="flex items-center">
          <span class="mr-5">First</span>
          <span class="mr-5">Previous</span>
          <span class="flex items-center justify-center w-[50px] aspect-square bg-light-secondary rounded-[5px] text-black mr-5">01</span>
          <span class="flex items-center justify-center w-[50px] aspect-square border border-light-secondary rounded-[5px] mr-5">02</span>
          <div class="flex items-center mr-10">
            <span class="mr-[5px]">Next</span>
            <img src="../../assets/arrow-down.svg" alt="arrow" class="w-[14px] -rotate-90">
          </div>
        </div>
      </div>
    </div>
    <DetailModal title="Bet History" :top="244" v-if="open" @close="closeModal()">
      <table class="w-full text-center">
        <tr class="border-b-[1.5px] border-heavy-primary">
          <td class="py-5">Data</td>
          <td>Market Name</td>
          <td>Selection</td>
          <td>Type</td>
          <td>Won & Loss</td>
          <td>Rate</td>
          <td>Stake</td>
          <td>P/L</td>
          <td>DR</td>
          <td>CR</td>
          <td>Net</td>
        </tr>
        <tr>
          <td class="py-5">2023-02-26 11:27:47</td>
          <td>7MOJOS - Infinite Wilds</td>
          <td>Hon kog Rangers FC</td>
          <td>Back</td>
          <td>Loss</td>
          <td>1.85</td>
          <td>500</td>
          <td>-145.00</td>
          <td>145</td>
          <td>145</td>
          <td>-145</td>
        </tr>
      </table>
    </DetailModal>
  </div>
</template>

<script>
import Card from '../../components/desktop/Card.vue'
import DetailModal from '../../components/desktop/DetailModal.vue';
import Select from '../../components/desktop/Select.vue';
import DateRangePicker from 'vue3-daterange-picker/src';
// import 'vue3-daterange-picker/src/assets/daterangepicker.scss';

export default {
  name: 'statement-view',
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