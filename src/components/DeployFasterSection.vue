
<script setup>
import { ref } from 'vue'

import DeployFasterCard from '../components/DeployFasterCard.vue'

const deployItems = ref([
  {
    title: 'Cross-browser testing',
    description: "While Preflight isn't a browser-testing company, we do offer 95% coverage of the most popular desktop browsers -- providing a sanity check.",
    icon: 'language'
  },
  {
    title: 'Schedule Tests',
    description: "Run tests every hour, or month, or somewhere in between. You'll always be the first to know if something breaks.",
    icon: 'schedule'
  },
  {
    title: 'Test for Responsive',
    description: 'Test your product or website at different screen sizes, ensuring all your users device sizes are accounted for. Or at least the most popular ones.',
    icon: 'desktop_windows'
  }
])
</script>

<template>
  <div>
    <div class="text-center">
      <div class="text-body1 text-primary text-bold">DEPLOY FASTER</div>
      <div class="text-h5 text-bold q-mt-sm">Automated testing, done right</div>
      <div class="text-secondary text-body1 q-mt-md">Get your product in your customers hands faster, and deploy without hesitation,</div>
      <div class="text-secondary text-body1">knowing you've already tested everything.</div>
    </div>
    <div class="q-mt-xl row deploy-faster-card">
      <div class="col-xs-12 col-sm-6 col-md-4" v-for="deployItem,index in deployItems" :key="index">
        <deploy-faster-card :deployItem="deployItem" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @media only screen and (min-width: 600px) and (max-width: 1023px) {
    .deploy-faster-card {
      padding-top: 40px;
      width: 90%;
      margin: 0 auto;
    }
  }
</style>
