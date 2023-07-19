<template>
  <div class="w-full py-[10px] px-[5px] font-mulish font-bold text-base text-white">
    <Card title="Deposit & Withdraw History" class="mb-[10px]">
      <div class="flex flex-col w-full px-2">
        <div class="mb-[10px]">
          <p class="mb-[5px]">Transaction ID</p>
          <input
            type="text"
            class="w-full h-10 px-5 bg-transparent outline-none border-[1.5px] border-primary rounded-[5px] placeholder:font-normal placeholder:text-primary"
            placeholder="# Transaction ID"
          >
        </div>
        <div class="mb-[10px]">
          <p class="mb-[5px]">Transaction Type</p>
          <Select :options="['withdraw', 'deposit']" />
        </div>
        <div class="mb-[10px]">
          <p class="mb-[5px]">Status</p>
          <Select :options="['success', 'pending', 'reject', 'initialized']" />
        </div>
        <div class="mb-[10px] w-full">
          <p class="mb-[5px]">Range</p>
          <div class="text-black w-full">
            <DateRangePicker :dateRange="dateRange">
              {{ picker.startDate | date }} - {{ picker.endDate | date }}
            </DateRangePicker>
          </div>
        </div>
        <button class="flex w-full justify-center items-center w-[182px] h-10 border-[1.5px] border-primary rounded-[5px] text-primary hover:bg-primary hover:text-white">Show</button>
      </div>
    </Card>
    <div>
      <div class="w-full overflow-x-scroll mb-5">
        <table class="shrink-0 w-full text-left bg-primary-light-opacity rounded-[5px] overflow-hidden">
          <thead>
            <tr class="h-10 bg-primary-more-opacity rounded-[5px] overflow-hidden">
              <th class="px-5 rounded-l-[5px]">Transaction ID</th>
              <th class="px-5">Type</th>
              <th class="px-5">Amount</th>
              <th class="px-5">Status</th>
              <th class="px-5">Detail</th>
              <th class="px-5">Bank Detail</th>
              <th class="px-5 rounded-r-[5px]">Date</th>
            </tr>
          </thead>
          <tbody class="relative before:w-5 before:h-full before:absolute before:bg-[#2C2D53] after:w-5 after:h-full after:absolute after:top-0 after:right-0 after:bg-[#2C2D53] whitespace-nowrap">
            <tr
              v-for="(row, index) in rows"
              :key="index"
              class="border-b-[1.5px] border-white-lightest-opacity last:border-none"
            >
              <td class="font-normal text-primary px-5 py-5">{{ row.id }}</td>
              <td class="capitalize px-5">{{ row.type }}</td>
              <td
                class="px-5"
                :class="{
                  'text-success': row.status == 'success',
                  'text-warning': row.status == 'pending',
                  'text-danger': row.status == 'reject',
                }"
              >{{ row.amount }}</td>
              <td class="capitalize px-5">
                <span
                  class="flex justify-center items-center w-[102px] h-[33px] rounded-[5px]"
                  :class="{
                    'bg-success': row.status == 'success',
                    'bg-warning': row.status == 'pending',
                    'bg-danger': row.status == 'reject',
                    'bg-initial': row.status == 'initialized',
                  }"
                >
                  {{ row.status }}
                </span>
              </td>
              <td class="px-5">{{ row.detail }}</td>
              <td class="px-5">{{ row.bankDetail }}</td>
              <td class="px-5">
                <p>{{ row.date }}</p>
                <p class="text-base leading-5">{{ row.ago }}</p>
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
  </div>
</template>

<script>
import Card from '../../components/mobile/Card.vue'
import Select from '../../components/mobile/Select.vue';
import DateRangePicker from 'vue3-daterange-picker/src';

export default {
  name: 'mobile-transactions-view',
  components: { Card, Select, DateRangePicker },
  data() {
    return {
      dateRange: {
        startDate: '2023-02-20',
        endDate: '2023-02-27'
      },
      rows: [
        {
          id: 'txn_3579929198',
          type: 'withdraw',
          amount: '-₹1,00,000',
          status: 'success',
          detail: 'Amount Added From Panel',
          bankDetail: '123456789123',
          date: '2023-02-19 13:24:56',
          ago: '(1 week ago)'
        },
        {
          id: 'txn_3579929198',
          type: 'withdraw',
          amount: '-₹1,00,000',
          status: 'pending',
          detail: 'Amount Added From Panel',
          bankDetail: '123456789123',
          date: '2023-02-19 13:24:56',
          ago: '(1 week ago)'
        },
        {
          id: 'txn_3579929198',
          type: 'withdraw',
          amount: '₹1,00,000',
          status: 'reject',
          detail: 'Amount Added From Panel',
          bankDetail: '123456789123',
          date: '2023-02-19 13:24:56',
          ago: '(1 week ago)'
        },
        {
          id: 'txn_3579929198',
          type: 'withdraw',
          amount: '₹1,00,000',
          status: 'initialized',
          detail: 'Amount Added From Panel',
          bankDetail: '123456789123',
          date: '2023-02-19 13:24:56',
          ago: '(1 week ago)'
        },
        {
          id: 'txn_3579929198',
          type: 'deposit',
          amount: '₹1,00,000',
          status: 'initialized',
          detail: 'Amount Added From Panel',
          bankDetail: '123456789123',
          date: '2023-02-19 13:24:56',
          ago: '(1 week ago)'
        },
        {
          id: 'txn_3579929198',
          type: 'deposit',
          amount: '+₹1,00,000',
          status: 'pending',
          detail: 'Amount Added From Panel',
          bankDetail: '123456789123',
          date: '2023-02-19 13:24:56',
          ago: '(1 week ago)'
        },
        {
          id: 'txn_3579929198',
          type: 'deposit',
          amount: '₹1,00,000',
          status: 'reject',
          detail: 'Amount Added From Panel',
          bankDetail: '123456789123',
          date: '2023-02-19 13:24:56',
          ago: '(1 week ago)'
        },
        {
          id: 'txn_3579929198',
          type: 'deposit',
          amount: '+₹1,00,000',
          status: 'success',
          detail: 'Amount Added From Panel',
          bankDetail: '123456789123',
          date: '2023-02-19 13:24:56',
          ago: '(1 week ago)'
        },
        {
          id: 'txn_3579929198',
          type: 'deposit',
          amount: '₹1,00,000',
          status: 'initialized',
          detail: 'Amount Added From Panel',
          bankDetail: '123456789123',
          date: '2023-02-19 13:24:56',
          ago: '(1 week ago)'
        },
        {
          id: 'txn_3579929198',
          type: 'deposit',
          amount: '+₹1,00,000',
          status: 'pending',
          detail: 'Amount Added From Panel',
          bankDetail: '123456789123',
          date: '2023-02-19 13:24:56',
          ago: '(1 week ago)'
        },
        {
          id: 'txn_3579929198',
          type: 'deposit',
          amount: '₹1,00,000',
          status: 'reject',
          detail: 'Amount Added From Panel',
          bankDetail: '123456789123',
          date: '2023-02-19 13:24:56',
          ago: '(1 week ago)'
        },
        {
          id: 'txn_3579929198',
          type: 'deposit',
          amount: '+₹1,00,000',
          status: 'success',
          detail: 'Amount Added From Panel',
          bankDetail: '123456789123',
          date: '2023-02-19 13:24:56',
          ago: '(1 week ago)'
        },
      ],
    }
  },
}
</script>