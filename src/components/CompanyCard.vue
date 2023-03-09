<script setup>
import { ref, watchEffect } from 'vue'

const props = defineProps({
  logo: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  }
})

const ratingModel = ref(null)

watchEffect(() => {
  ratingModel.value = props.rating
})
</script>

<template>
  <div>
    <div style="width: 300px">
      <div class="text-center">
        <q-img
          :src="logo"
          spinner-color="primary"
          spinner-size="12px"
          width="200px"
        />
      </div>
      <div class="q-my-md text-center">
        <q-rating
          v-model="ratingModel"
          size="2em"
          color="amber-6"
          icon="star_border"
          icon-selected="star"
          readonly
        />
      </div>
      <div class="text-center text-secondary">
        {{description}}
      </div>
    </div>
  </div>
</template>
