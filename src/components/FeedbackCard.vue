<script setup>
defineProps({
  feedback: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="text-center" style="max-width: 1000px; margin: 0 auto;">
    <div class="text-body1 text-bold">{{feedback?.feedback}}</div>
    <div class="q-mt-lg" v-if="$q.screen.gt.xs">
      <q-avatar size="50px">
        <q-img
          :src="feedback?.image"
        />
      </q-avatar>
      <span class="q-pl-md text-bold text-body1">{{feedback?.name}}</span>
      <span class="text-primary q-mx-sm text-bold text-h6">/</span>
      <span class="text-secondary text-bold text-body1">{{feedback?.position}}</span>
    </div>
    <div class="q-mt-lg text-center" v-if="$q.screen.xs">
      <q-avatar size="50px">
        <q-img
          :src="feedback?.image"
        />
      </q-avatar>
      <div class="q-pl-md text-bold text-body1">{{feedback?.name}}</div>
      <!-- <div class="text-primary q-mx-sm text-bold text-h6">/</div> -->
      <div class="text-secondary text-bold text-body1">{{feedback?.position}}</div>
    </div>
  </div>
</template>
