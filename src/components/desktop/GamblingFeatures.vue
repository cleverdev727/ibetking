<template>
  <div>
    <Title title="gambling features" class="py-[15px] mb-12" />
    <div class="grid grid-cols-2 grid-rows-3 gap-x-[22px] gap-y-5">
      <div
        v-for="(feature, index) in features"
        :key="index"
        class="relative flex items-center"
      >
        <img
          src="../../assets/feature.png"
          alt="feature"
          class="w-full"
          :class="{
            'rotate-y-180': (index + 1) % 4 % 2 == 0,
            'rotate-x-180': (index + 1) % 4 % 3 == 0,
            'rotate-xy-180': (index + 1) % 4 == 0,
          }"
        />
        <div
          class="absolute flex items-center right-14"
          :class="{
            'left-[66px]': index % 2 == 0,
            'left-[150px]': index % 2 == 1,
          }"
        >
          <img :src="$getImage(`../assets/${feature.id}.svg`)" :alt="feature.id" class="w-[50px] mr-4" />
          <div>
            <p class="font-semibold text-xl text-primary capitalize mb-[10px]">{{ feature.title }}</p>
            <p class="font-medium text-lg text-white capitalize">{{ feature.content }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Title from './Title.vue';

export default {
    name: "gambling-features-component",
    components: { Title },
    data() {
      return {
        features: [
          {
            'id': 'currency-convert',
            'title': 'Currency Conversation',
            'content': 'Cdipiscing provident! Cras molestie odit dolores facilis',
          },
          {
            'id': 'withdraw',
            'title': 'Instant Withdrawal',
            'content': 'Winnings are paid as soon as withdrawal request given',
          },
          {
            'id': 'game-machine',
            'title': 'Gaming Machines',
            'content': 'Cdipiscing provident! Cras molestie odit dolores facilis',
          },
          {
            'id': 'modern-tech',
            'title': 'Modern Technology',
            'content': 'Providing a secure and transparent betting environment for customers',
          },
          {
            'id': 'security',
            'title': 'Powerful Security',
            'content': 'Cdipiscing provident! Cras molestie odit dolores facilis',
          },
          {
            'id': 'support',
            'title': '24X7 Support',
            'content': 'We provide 24x7 customer service over Live chat, WhatsApp and Calls.',
          },
        ]
      }
    }
}
</script>