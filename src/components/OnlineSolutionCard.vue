<script setup>
defineProps({
  solution: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div>
    <div class="text-h5 text-bold">{{solution?.title}}</div>
    <div class="text-body1 text-secondary q-mt-md">{{solution?.caption}}</div>
    <div class="q-mt-lg row">
      <div class="col-sm-12 col-md-4 q-pa-md" v-for="description,index in solution?.descriptions" :key="index">
        <div style="max-width: 400px; height: 350px">
          <q-img
            :src="description?.img"
            spinner-color="primary"
            spinner-size="12px"
            style="border-radius: 10px;"
          />
        </div>
        <div class="text-h6 q-mt-sm">{{description?.title}}</div>
        <div class="text-body1 text-secondary q-my-md">{{description?.caption}}</div>
        <div v-if="description?.learnMore">
          <q-btn dense color="primary" label="Learn more" flat no-caps />
        </div>
      </div>
    </div>
  </div>
</template>
