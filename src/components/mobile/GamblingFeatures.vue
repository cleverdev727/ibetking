<template>
  <div>
    <Title title="gambling features" class="py-[6px] mb-5" />
    <div>
      <div
        v-for="(feature, index) in features"
        :key="index"
        class="relative flex h-[85px] mb-[10px] last:mb-0 bg-white-lightest-opacity rounded-[5px] before:w-[5px] before:h-full before:top-0 before:left-0 before:bg-primary before:rounded-l-[5px]"
      >
        <div
          class="flex items-center pl-[25px] pr-[15px]"
        >
          <img :src="$getImage(`../assets/${feature.id}.svg`)" :alt="feature.id" class="w-[30px] mr-[15px]" />
          <div>
            <p class="font-semibold text-sm text-primary capitalize mb-2">{{ feature.title }}</p>
            <p class="font-medium text-xs text-white capitalize">{{ feature.content }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Title from './Title.vue';

export default {
    name: "mobile-gambling-features-component",
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