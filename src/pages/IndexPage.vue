<script setup>
import { ref } from 'vue'

import AutomatedWebTestingSection from 'src/components/AutomatedWebTestingSection.vue'
import CompanySection from 'src/components/CompanySection.vue'
import TopicCard from '../components/TopicCard.vue'
import OneSolutionSection from 'src/components/OneSolutionSection.vue'
import DeployFaster from 'src/components/DeployFasterSection.vue'
import IntegrationSection from 'src/components/IntegrationSection.vue'
import CustomerLoveSection from 'src/components/CustomerLoveSection.vue'
import MeaningfulTestSection from 'src/components/MeaningfulTestSection.vue'
import FooterSection from 'src/components/FooterSection.vue'
import CircleContent from '../components/CircleContent.vue'

const topics = ref([
  {
    title: 'Revolutionary Recorder',
    caption: 'Automate UI Testing and Squash Bugs with Preflight Recorder.',
    video: '/videos/Automated-Web-Testing-with-PDF-and-Email-Testing.mp4',
    rightPositionVideo: true,
    descriptions: [
      {
        icon: 'fa-solid fa-arrow-pointer',
        title: 'The Reliable Recorder',
        description: 'Our recorder is optimized for any website, ensuring reliable and accurate results with every recording session.'
      },
      {
        icon: 'fa-solid fa-clipboard-check',
        title: 'First-Run Guarantee',
        description: 'Say goodbye to endless debugging and tuning. With Preflight, your recordings will work seamlessly on the first run, every time.'
      },
      {
        icon: 'fa-solid fa-chart-line',
        title: 'Streamlined Testing',
        description: 'Preflight eliminates the need for manual testing, streamlining your UI testing process for maximum efficiency and effectiveness.'
      }
    ]
  },
  {
    title: 'Dynamic Data Testing',
    caption: '',
    video: '/videos/Automated-Web-Testing-with-PDF-and-Email-Testing.mp4',
    rightPositionVideo: false,
    descriptions: [
      {
        icon: 'fa-solid fa-x',
        title: 'Randomize with Confidence',
        description: 'Preflight enables dynamic data inputs during recording for comprehensive and thorough testing results.'
      },
      {
        icon: 'fa-solid fa-bolt',
        title: 'Reusable Variables',
        description: 'Captured randomized variables can be reused and validated to ensure accurate data processing by the servers.'
      },
      {
        icon: 'fa-brands fa-searchengin',
        title: 'Comprehensive Results',
        description: 'Dynamic data testing results in thorough and comprehensive testing coverage for your UI.'
      }
    ]
  },
  {
    title: 'Effortless Email Testing',
    caption: '',
    video: '/videos/Automated-Web-Testing-with-PDF-and-Email-Testing.mp4',
    rightPositionVideo: true,
    descriptions: [
      {
        icon: 'fa-solid fa-arrow-pointer',
        title: 'Random Email Generation',
        description: 'Preflight lets you generate a random email with just a click, saving you time and effort.'
      },
      {
        icon: 'fa-solid fa-clipboard-check',
        title: 'Receive Emails in Recorder',
        description: 'Preflight allows you to receive emails directly within the recorder, making email testing easy and seamless.'
      },
      {
        icon: 'fa-solid fa-chart-line',
        title: 'Verification and Invitation Testing',
        description: "Whether it's for sign-up verification or inviting a user, Preflight's email testing capabilities ensure that your emails are working as intended."
      }
    ]
  },
  {
    title: 'Effortless Checkpoint Creation',
    caption: '',
    video: '/videos/Automated-Web-Testing-with-PDF-and-Email-Testing.mp4',
    rightPositionVideo: false,
    descriptions: [
      {
        icon: 'fa-solid fa-flag',
        title: 'Text and Visual Checkpoints',
        description: 'Preflight offers two checkpoint options, text and visual, for comprehensive and thorough testing.'
      },
      {
        icon: 'fa-solid fa-bolt',
        title: 'Dynamic Comparison',
        description: "Preflight's checkpoint feature can understand previously used variables, allowing for dynamic comparison during testing."
      },
      {
        icon: 'fa-solid fa-thumbs-up',
        title: 'Easy and Reliable',
        description: 'Creating checkpoints is as simple as dragging and dropping a flag icon in the recorder. With Preflight, checkpoint creation is easy and reliable.'
      }
    ]
  },
  {
    title: 'Automated PDF Testing',
    caption: '',
    video: '/videos/Automated-Web-Testing-with-PDF-and-Email-Testing.mp4',
    rightPositionVideo: true,
    descriptions: [
      {
        icon: 'fa-solid fa-file-arrow-down',
        title: 'PDF Detection',
        description: 'Preflight can automatically detect PDF downloads, PDFs in iframes, and PDFs opened in new tabs.'
      },
      {
        icon: 'fa-solid fa-star',
        title: 'Effortless Testing',
        description: 'Once Preflight detects a PDF, simply click on the file in the recorder to easily create text or visual checkpoints to ensure accurate data in your generated PDFs.'
      },
      {
        icon: 'fa-solid fa-file',
        title: 'Comprehensive Results',
        description: "With Preflight's automated PDF testing capabilities, you can be confident that your web application generates correct PDFs with the right data."
      }
    ]
  }
])
</script>

<template>
  <q-page>
    <automated-web-testing-section class="q-pt-xl q-mt-xl container q-px-md"/>
    <company-section class="q-pt-xl q-mt-xl container q-px-md" />
    <div class="container q-px-md" style="margin-top: 100px" v-for="topic, index in topics" :key="index">
      <topic-card :topic="topic" :icon="topic.icon" class="topic-style"  />
    </div>
    <div class="q-pt-xl container">
      <circle-content />
    </div>
    <div class="q-mt-xl q-pt-xl container q-px-md">
      <one-solution-section />
    </div>
    <div class="q-mt-xl container q-px-md">
      <deploy-faster />
    </div>
    <div class="q-my-xl">
      <integration-section />
    </div>
    <div class="q-my-xl container">
      <customer-love-section class="customer-love-style" />
    </div>
    <div class="q-my-xl q-pt-xl container q-px-md">
      <meaningful-test-section />
    </div>
    <div class="q-my-xl">
      <footer-section />
    </div>
  </q-page>
</template>

<style lang="scss" scoped>
  @media only screen and (min-width: 600px) and (max-width: 1023px) {
    .topic-style {
      width: 65%;
      margin: 0 auto;
    }
    .customer-love-style {
      width: 80%;
      margin: 0 auto;
    }
  }
  @media only screen and (max-width: 576px) {
    .customer-love-style {
      width: 100%;
      margin: 0 auto;
      padding: 25px;
    }
  }
</style>
