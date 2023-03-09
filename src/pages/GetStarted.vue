<script setup>
import { ref } from 'vue'

import Api from '../api/api'

const form = ref({
  firstName: '',
  lastName: '',
  companyWebsite: '',
  jobTitle: '',
  email: '',
  phoneNumber: ''
})

const onSubmit = () => {
  const payload = form.value
  Api.bookDemo(payload)
}
</script>

<template>
  <q-page padding>
    <div class="row container q-pt-lg">
      <div class="col-xs-12 col-sm-12 col-md-6">
        <div>
          <div class="text-h3 text-bold" :class="$q.screen.xs ? 'text-h4' : ''">The game-changer for</div>
          <div class="text-h3 text-bold text-primary" :class="$q.screen.xs ? 'text-h4' : ''">web testing automation</div>
        </div>
        <div class="text-body1 q-my-lg">
          <div>Enterprise-level companies need the AI-powered automation scaling power to</div>
          <div>eliminate errors, improve efficiency and ensure top-quality software</div>
        </div>
        <div class="text-body1 text-secondary">
          <div>Fill out the form and our Preflight experts will show you how we can fit and scale</div>
          <div>our automated web testing solutions to your business’s needs.</div>
        </div>
        <div class="q-mt-lg text-h5 text-bold">
          <div>Upgrade your enterprise testing workflow</div>
          <div>with our revolutionary tool</div>
        </div>
        <q-separator class="q-my-lg" color="grey-4" dark />
        <div>
          <q-item>
            <q-item-section avatar>
              <q-avatar size="30px" color="primary" text-color="white" icon="done" />
            </q-item-section>
            <q-item-section class="text-secondary q-pl-sm text-body1">Revolutionize your web testing process with smarter-AI driven page parsing technology</q-item-section>
          </q-item>
          <q-item class="q-my-md">
            <q-item-section avatar>
              <q-avatar size="30px" color="primary" text-color="white" icon="done" />
            </q-item-section>
            <q-item-section class="text-secondary q-pl-sm text-body1">Effortlessly automate web testing tasks with the advanced web automation recorder</q-item-section>
          </q-item>
          <q-item >
            <q-item-section avatar>
              <q-avatar size="30px" color="primary" text-color="white" icon="done" />
            </q-item-section>
            <q-item-section class="text-secondary q-pl-sm text-body1">Streamline test management and organization with comprehensive test management solutions</q-item-section>
          </q-item>
        </div>
        <div class="q-my-lg">
          <q-item class="row">
            <q-item-section class="col-auto">
              <div class="text-h6 text-bold text-secondary" >OUR PARTNERS</div>
            </q-item-section>
            <q-item-section class="col">
              <q-separator inset color="grey-4" dark />
            </q-item-section>
          </q-item>
          <div class="q-mt-lg row q-gutter-md">
            <img style="width: 120px; height: 30px" src="/images/microsoft.webp" alt="">
            <img style="width: 120px; height: 30px" src="/images/school-bytes.webp" alt="">
            <img style="width: 120px; height: 30px" src="/images/yamaha.webp" alt="">
            <img style="width: 120px; height: 30px" src="/images/tidy.webp" alt="">
            <img style="width: 120px; height: 30px" src="/images/forage.webp" alt="">
          </div>
        </div>
      </div>
      <div class="col-xs-12 col-sm-12 col-md-6" :class="$q.screen.lt.md ? '' : 'q-px-xl'">
        <q-form
          @submit="onSubmit"
          class="q-gutter-md"
        >
          <div class="row">
            <div class="col-xs-12 col-sm-6" :class="$q.screen.xs ? '' : 'q-pr-sm'">
              <div class="text-dark text-bold">First name <sup class="text-red">*</sup></div>
              <div class="q-mt-sm">
                <q-input v-model="form.firstName" outlined type="text" :rules="[ val => val && val.length > 0 || 'Please type something']" />
              </div>
            </div>
            <div class="col-xs-12 col-sm-6" :class="$q.screen.xs ? '' : 'q-pl-sm'">
              <div class="text-dark text-bold">Last name <sup class="text-red">*</sup></div>
              <div class="q-mt-sm">
                <q-input v-model="form.lastName" outlined type="text" :rules="[ val => val && val.length > 0 || 'Please type something']" />
              </div>
            </div>
          </div>
          <div>
            <div class="text-dark text-bold">Company website <sup class="text-red">*</sup></div>
            <div class="q-mt-sm">
              <q-input v-model="form.companyWebsite" outlined type="text" :rules="[ val => val && val.length > 0 || 'Please type something']" />
            </div>
          </div>
          <div>
            <div class="text-dark text-bold">Job title <sup class="text-red">*</sup></div>
            <div class="q-mt-sm">
              <q-input v-model="form.jobTitle" outlined type="text" :rules="[ val => val && val.length > 0 || 'Please type something']" />
            </div>
          </div>
          <div class="row">
            <div class="col-xs-12 col-sm-6" :class="$q.screen.xs ? '' : 'q-pr-sm'">
              <div class="text-dark text-bold">Email <sup class="text-red">*</sup></div>
              <div class="q-mt-sm">
                <q-input v-model="form.email" outlined type="text" :rules="[ val => val && val.length > 0 || 'Please type something']" />
              </div>
            </div>
            <div class="col-xs-12 col-sm-6" :class="$q.screen.xs ? '' : 'q-pl-sm'">
              <div class="text-dark text-bold">Phone number</div>
              <div class="q-mt-sm">
                <q-input v-model="form.phoneNumber" outlined type="text" />
              </div>
            </div>
          </div>
          <div>
            <q-btn label="Submit" type="submit" color="amber-10" no-caps unelevated/>
          </div>
        </q-form>
        <div class="q-mt-md">
          <div>
            <div class="row">
              <img style="width: 30px;" src="/images/sproket.png" alt="">
              <span class="q-pt-sm text-secondary">Create your own <a class="link-style" href="">free form with HubSpot</a></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<style lang="scss" scoped>
  .link-style{
    color: $cyan-8 !important;
    text-decoration: none;
  }
  .link-style:hover{
    text-decoration: underline;
  }
</style>
