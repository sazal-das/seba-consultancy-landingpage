<script setup>
import { ref } from 'vue'

import CompanyCard from '../components/CompanyCard.vue'

const companies = ref([
  {
    logo: '/images/microsoft.webp',
    rating: 5,
    description: '“Everything we need is built in Preflight”'
  },
  {
    logo: '/images/school-bytes.webp',
    rating: 5,
    description: '“Great product, great service, innovative development. Advanced use of features for regression testing of all our products.”'
  },
  {
    logo: '/images/yamaha.webp',
    rating: 5,
    description: '“Automating testing is very important. Preflight helps us to do it in minutes.”'
  },
  {
    logo: '/images/tidy.webp',
    rating: 5,
    description: '“The interface is simple, and every day you seem to understand what could make testing easier.”'
  },
  {
    logo: '/images/forage.webp',
    rating: 5,
    description: "“Our customer care worker, who can't code, is now a professional web tester thanks to Preflight. “"
  }
])
</script>

<template>
  <div class="">
    <div class="row q-gutter-md justify-center">
      <div class="company-card text-center">
        <div class="text-bold text-h6 q-pt-md">6,030</div>
        <q-item class="text-secondary text-bold row q-pt-none">
          <q-item-section class="col-auto">
            <q-icon size="10px" color="primary" name="circle" />
          </q-item-section>
          <q-item-section class="text-body1 text-bold">Companies</q-item-section>
        </q-item>
      </div>
      <div class="test-card text-center">
        <div class="text-bold text-h6 q-pt-md">1,498,988</div>
        <q-item class="text-secondary text-bold row q-pt-none">
          <q-item-section class="col-auto">
            <q-icon size="10px" color="primary" name="circle" />
          </q-item-section>
          <q-item-section class="text-body1 text-bold">Tests Created</q-item-section>
        </q-item>
      </div>
    </div>
    <div class="q-my-lg text-center">
      <q-img
        src="/images/y-combinator-logo.webp"
        spinner-color="primary"
        spinner-size="12px"
        width="250px"
      />
    </div>
    <div class="row q-gutter-md q-mt-md" style="overflow: auto; flex-wrap: nowrap;" >
      <div v-for="company, index in companies" :key="index">
        <company-card :logo="company.logo" :rating="company.rating" :description="company.description" />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  .company-card {
    padding: 0px 30px;
    border: 2px solid $primary;
    border-top-left-radius: 20px;
    border-bottom-right-radius: 20px;
    border-top-right-radius: 5px;
    border-bottom-left-radius: 5px;
  }
  .test-card {
    padding: 0px 30px;
    border: 2px solid $primary;
    border-top-right-radius: 20px;
    border-bottom-left-radius: 20px;
    border-top-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }
</style>
