<script setup>
import { ref } from 'vue'

import CustomerLoveCard from '../components/FeedbackCard.vue'

const ratingModel = ref(5)

const feedbacks = ref([
  {
    feedback: '“Preflight has been a game-changer for us. The elegance, ease-of-use, and robustness of their automated functional testing SaaS platform has allowed us to write diverse tests across our multiple application suite. Their Workflows feature has allowed us to recreate dependencies across our testing suite and now we release our software more regularity, with more confidence, than ever before in the history of our company”',
    image: '/images/avatar-pasha-rayan.jpeg',
    name: 'Rob Newman',
    position: 'CTO at Parity Factory'
  },
  {
    feedback: '“Our customer support person, who can’t code, has in effect become a professional automated web tester because of Preflight. It feels like we’re cheating”',
    image: '/images/avatar-pasha-rayan.jpeg',
    name: 'Pasha Rayan',
    position: 'Founder & CTO at TheForage'
  },
  {
    feedback: "“I hadn't used a no-code testing platform before, and was a little skeptical about how well it could work. I was pleasantly surprised!”",
    image: '/images/avatar-pasha-rayan.jpeg',
    name: 'Zak Kempson',
    position: 'Pop To The Shops, UK'
  },
  {
    feedback: '“Before Preflight, we were using ghost inspector to automate testing. However, I thought their interface was awful for those who have no programming experience. I like to use Preflight because the interface is simple, and every day you seem to understand what could make testing easier. Not to mention that the support is great!”',
    image: '',
    name: 'Camila Costa',
    position: 'Tidy App, Canada'
  }
])
</script>

<template>
  <div class="text-center">
    <div>
      <q-rating
        v-model="ratingModel"
        size="2.5em"
        icon="star"
        color="deep-purple"
        readonly
      />
    </div>
    <div class="text-h5 text-bold">Customers Love Preflight</div>

    <div class="q-mt-lg">
      <div class="q-mt-lg" v-for="feedback,index in feedbacks" :key="index">
        <customer-love-card :class="$q.screen.xs ? 'q-px-md' : ''" :feedback="feedback" />
      </div>
    </div>
  </div>
</template>
