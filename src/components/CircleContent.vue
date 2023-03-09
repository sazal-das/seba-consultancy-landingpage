<script setup>
import { ref } from 'vue'

const activeItem = ref('client')
const selectedItem = ref(null)

const items = ref([
  {
    id: 'client',
    title: '$42M Saved for clients',
    description: "Don't start form scratch to automate testing that might take years to hire, train and spend millions on it. Preflight has already saved $42M+ in the market."
  },
  {
    id: 'company',
    title: '3000+ Company',
    description: 'Over the past 4 years, we have been able to help over 3000 companies around the world to make their Web Apps bug free.'
  },
  {
    id: 'test',
    title: '1.3M+ Test created',
    description: "With Preflight's Test Recorder, it's super easy to create Code-free, Cypress and Selenium Web UI tests."
  },
  {
    id: 'hiring',
    title: 'ZERO Hiring headaches.',
    description: 'Employing QA engineers while scaling development is difficult. With Preflight, anyone can create the tests and give room for development and test automation.'
  },
  {
    id: 'coverage',
    title: '30% test coverage in 2 weeks',
    description: "With Preflight's ease of use, it's super easy to reach 30% test coverage that will keep moving up. Preflight also lets you know your test coverage based on yours users."
  },
  {
    id: 'daily',
    title: '1,000+ Tests daily',
    description: 'Agile teams can create tests directly on their Dev environment when any new feature is implemented.'
  }
])

selectedItem.value = items.value[0]

const onClickCircle = (item) => {
  activeItem.value = item
  selectedItem.value = items.value.find(item => item.id === activeItem.value)
}
</script>

<template>
  <div>
    <div class="row justify-center q-gutter-md">
      <div class="circle" :class="activeItem==='client' ? 'active' : ''" @click="onClickCircle('client')">
        <div class="text-h6 text-bold q-mt-lg">$42M</div>
        <div class="text-body1 text-bold text-secondary">Saved for</div>
        <div class="text-body1 text-bold text-secondary">clients</div>
      </div>
      <div class="circle" :class="activeItem==='company' ? 'active' : ''" @click="onClickCircle('company')">
        <div class="text-h6 text-bold q-mt-lg">3000+</div>
        <div class="text-body1 text-bold text-secondary">Company</div>
      </div>
      <div class="circle" :class="activeItem==='test' ? 'active' : ''" @click="onClickCircle('test')">
        <div class="text-h6 text-bold q-mt-lg">1.3M+</div>
        <div class="text-body1 text-bold text-secondary">Test</div>
        <div class="text-body1 text-bold text-secondary">created</div>
      </div>
      <div class="circle" :class="activeItem==='hiring' ? 'active' : ''" @click="onClickCircle('hiring')">
        <div class="text-h6 text-bold q-mt-lg">ZERO</div>
        <div class="text-body1 text-bold text-secondary">Hiring</div>
        <div class="text-body1 text-bold text-secondary">headaches.</div>
      </div>
      <div class="circle" :class="activeItem==='coverage' ? 'active' : ''" @click="onClickCircle('coverage')">
        <div class="text-h6 text-bold q-mt-lg">30%</div>
        <div class="text-body1 text-bold text-secondary">test coverage</div>
        <div class="text-body1 text-bold text-secondary">in 2 weeks</div>
      </div>
      <div class="circle" :class="activeItem==='daily' ? 'active' : ''" @click="onClickCircle('daily')">
        <div class="text-h6 text-bold q-mt-lg">1,000+</div>
        <div class="text-body1 text-bold text-secondary">Tests daily</div>
      </div>
    </div>
    <div class="q-py-xl q-mt-lg text-center q-px-lg">
      <div class="text-h5 text-bold text-primary">{{selectedItem.title}}</div>
      <div class="text-secondary text-body1 q-mt-md">{{selectedItem.description}}</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .circle{
    border-radius: 100%;
    padding: 20px;
    border: 4px solid $primary;
    width: 160px;
    height: 160px;
    text-align: center;
    cursor: pointer;
    // display: flex;
    // align-items: center;
  }
  .active {
    background-image: linear-gradient(to bottom, #3f36a9, #6032ad, #7d2caf, #9723ae, #b011ac);
    border: none;
    color: white;
  }
</style>
