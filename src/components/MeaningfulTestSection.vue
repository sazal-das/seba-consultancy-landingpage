<script setup>
</script>

<template>
  <div class="card-style bg-primary row">
    <div class="col-xs-12 col-sm-12 col-md-6">
      <div class="text-h5 text-bold text-white">
        <div>Meaningful test</div>
        <div>coverage in under</div>
        <div>minutes</div>
      </div>
      <div class="q-my-md text-accent text-body1">
        <div>Ready to try Preflight? Create your first test under</div>
        <div>two minutes.</div>
      </div>
      <div>
        <q-btn color="white" label="Get Started" class="text-indigo q-py-md q-px-lg" no-caps unelevated @click="$router.push('request-a-demo')" />
      </div>
      <div class="q-mt-md">
        <div class="text-body1">
          <q-icon color="white" size="md" name="done" />
          <span class="q-pl-sm text-white text-bold">No credit card required</span>
        </div>
        <div class="text-body1">
          <q-icon color="white" size="md" name="done" />
          <span class="q-pl-sm text-white text-bold">24/7 online support</span>
        </div>
        <div class="text-body1">
          <q-icon color="white" size="md" name="done" />
          <span class="q-pl-sm text-white text-bold">No developer needed</span>
        </div>
      </div>
    </div>
    <div class="col-xs-12 col-sm-12 col-md-6" :class="$q.screen.lt.md ? 'q-mt-md' : ''">
      <q-img
        src="/images/general-call-to-action-screenshot.webp"
        :ratio="16/9"
        spinner-color="primary"
        spinner-size="12px"
        style="border-top-left-radius: 10px; border-bottom-left-radius: 10px"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .card-style{
    padding-left: 60px;
    padding-top: 40px;
    padding-bottom: 40px;
    border-radius: 10px;
  }
  @media only screen and (max-width: 600px) {
    .card-style{
      padding-left: 20px;
      padding-top: 40px;
      padding-bottom: 40px;
      border-radius: 10px;
    }
  }
</style>
