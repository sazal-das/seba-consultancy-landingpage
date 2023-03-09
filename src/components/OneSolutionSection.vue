<script setup>
import { ref, onMounted } from 'vue'
import OnlineSolutionCard from '../components/OnlineSolutionCard.vue'

const activeItem = ref('momentum')
const selectedItem = ref(null)

const solutions = ref([
  {
    title: 'Momentum',
    caption: "Increase your momentum with Preflight's powerful features.",
    descriptions: [
      {
        title: 'Automate manual testing',
        caption: 'Create end-to-end tests in minutes with the No-code Chrome extension.',
        img: '/images/no-code.webp',
        learnMore: true
      },
      {
        title: 'Resilient to Changes',
        caption: 'When there is a UI change that affects the CSS selectors, Preflight can adapt to changes with its AI instead of breaking the tests.',
        img: '/images/version-update.webp',
        learnMore: false
      },
      {
        title: 'Test Editor',
        caption: 'Edit tests with an HTML/Video Player that shows you what the page looked like while the test was running. Anyone can update the tests.',
        img: '/images/no-code-editor.webp',
        learnMore: true
      }
    ]
  },
  {
    title: 'Coverage',
    caption: 'Increase your test coverage and cover most cases to make sure Quality of your software.',
    descriptions: [
      {
        title: 'Environments',
        caption: 'Create tests once and then run them on multiple environments.',
        img: '/images/environments.webp',
        learnMore: true
      },
      {
        title: 'See your test coverage',
        caption: "See your test coverage based on how your app is used by anyone. Your tests might not be covering all users' behaviors.",
        img: '/images/test-user-coverage.webp',
        learnMore: false
      },
      {
        title: 'Test Email and PDF',
        caption: 'Testing emails and PDFs is essential. With Preflight, get them tested in minutes.',
        img: '/images/test-email-pdf.webp',
        learnMore: true
      }
    ]
  },
  {
    title: 'Stability',
    caption: "Making browser tests stable is hard we get it. That's why we built our AI to adapt to changes and Workflows to let you orchestrate complicated tests.",
    descriptions: [
      {
        title: 'Cross Browser',
        caption: 'Create tests once and then run them on the most popular browsers.',
        img: '/images/cross-browser.webp',
        learnMore: true
      },
      {
        title: 'Resilient to Changes',
        caption: 'When there is a UI change that affects the CSS selectors, Preflight can adapt to changes with its AI instead of breaking the tests.',
        img: '/images/version-update.webp',
        learnMore: false
      },
      {
        title: 'Workflows',
        caption: 'Use your tests to build and architect end-to-end tests and Cover your important Workflows.',
        img: '/images/workflow.webp',
        learnMore: true
      }
    ]
  }
])

onMounted(() => {
  selectedItem.value = solutions.value[0]
})

const onClickSolution = (item) => {
  activeItem.value = item
  if (activeItem.value === 'momentum') {
    selectedItem.value = solutions.value[0]
  } else if (activeItem.value === 'coverage') {
    selectedItem.value = solutions.value[1]
  } else {
    selectedItem.value = solutions.value[2]
  }
}

</script>

<template>
  <div>
    <div class="text-center">
      <div class="text-h5 text-bold">One solution to all of your pain points</div>
      <div class="text-secondary text-body1 q-mt-sm">What's your biggest pain point?</div>
    </div>
    <div class="q-my-xl row justify-center q-gutter-md">
      <div class="card cursor-pointer" :class="activeItem==='momentum' ? 'active text-black' : 'text-secondary'" @click="onClickSolution('momentum')">
        <div class="text-center">
          <q-icon size="xl" color="primary" name="speed" />
        </div>
        <div class="text-center text-body1 text-bold q-mt-sm">Momentum</div>
      </div>

      <div class="card cursor-pointer" :class="activeItem==='coverage' ? 'active text-black' : 'text-secondary'" @click="onClickSolution('coverage')">
        <div class="text-center">
          <q-icon size="xl" color="primary" name="reorder" />
        </div>
        <div class="text-center text-body1 text-bold q-mt-sm">Coverage</div>
      </div>

      <div class="card cursor-pointer" :class="activeItem==='stability' ? 'active text-black' : 'text-secondary'" @click="onClickSolution('stability')">
        <div class="text-center">
          <q-icon size="xl" color="primary" name="wine_bar" />
        </div>
        <div class="text-center text-body1 text-bold q-mt-sm">Stability</div>
      </div>
    </div>

    <div class="q-mt-lg solution-card-style">
      <online-solution-card :solution="selectedItem" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .card{
    padding: 30px 100px;
    // box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: 15px;
  }
  .active {
    border: 2px solid $primary;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }

  @media only screen and (min-width: 600px) and (max-width: 1023px) {
    .solution-card-style {
      width: 65%;
      margin: 0 auto;
    }
  }
</style>
