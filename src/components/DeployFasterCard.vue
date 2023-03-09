<script setup>
defineProps({
  deployItem: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="q-pa-md">
    <div class="text-center card">
      <div style="margin-top: -45px">
        <q-avatar size="60px" rounded color="primary" text-color="white" :icon="deployItem?.icon" />
      </div>
      <div class="q-my-lg text-h6">{{deployItem.title}}</div>
      <div class="q-my-lg text-body1 text-secondary">{{deployItem.description}}</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .card{
    background-color: #F9FAFB;
    border-radius: 10px;
    padding: 20px;
  }
</style>
