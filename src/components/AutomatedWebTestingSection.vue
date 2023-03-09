<script setup>
</script>

<template>
  <div class="row">
    <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 left-style">
      <div class="text-h3 text-bold">
        <span class="text-primary">Automated</span>
        <span class="q-pl-sm">Web Testing</span>
      </div>
      <div class="q-mt-xl text-secondary text-body1">
        <div>Preflight lets you create Automated web testing scripts in seconds.</div>
        <div>You can run it in the cloud and export your test cases to your</div>
        <div>favorite libraries like Cypress/Selenium.</div>
      </div>
      <div class="q-mt-xl" :class="$q.screen.xs ? 'text-center' : ''">
        <q-btn color="primary" label="Get Started" class="q-py-md text-bold text-body1" unelevated no-caps @click="$router.push('request-a-demo')" />
        <q-btn color="secondary" class="text-body1 q-py-md q-ml-md" flat  icon="play_circle_filled" label="Watch Video" unelevated no-caps @click="onClick" />
      </div>
    </div>
    <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6" :class="$q.screen.lt.md ? 'q-mt-md' : ''">
      <video class="videoStyle" autoplay controls>
        <source src="/videos/Automated-Web-Testing-with-PDF-and-Email-Testing.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .videoStyle{
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }
  @media only screen and (min-width: 600px) and (max-width: 1023px) {
    .videoStyle{
      width: 100%;
      height: 100%;
      border-radius: 10px;
      padding: 20px;
    }
    .left-style{
      padding: 0px 20px;
    }
  }
</style>
