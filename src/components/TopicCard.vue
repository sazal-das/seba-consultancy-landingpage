<script setup>
defineProps({
  topic: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div>
    <div class="row">
      <div v-if="!topic.rightPositionVideo" class="col-xs-12 col-sm-12 col-md-6 col-lg-6 q-pr-md" :class="$q.screen.lt.md ? 'q-pb-lg' : ''">
        <video style="width: 100%; height: 100%; border-radius: 10px" autoplay controls>
          <source :src="topic.video" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      </div>
      <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 q-pr-sm" :class="$q.screen.lt.md ? 'q-pb-lg' : ''">
        <div class="text-bold text-h5">{{topic.title}}</div>
        <div class="text-secondary text-body1 q-mt-sm">{{topic.caption}}</div>
        <q-item class="q-mt-md q-px-none" v-for="description,index in topic.descriptions" :key="index">
          <q-item-section avatar v-if="topic">
            <q-avatar text-color="white" size="50px" color="primary" rounded :icon="description.icon" />
          </q-item-section>
          <q-item-section>
            <q-item-label class="text-h6">{{description.title}}</q-item-label>
            <q-item-label class="text-secondary text-body1 q-mt-sm">{{description.description}}</q-item-label>
          </q-item-section>
        </q-item>
      </div>
      <div v-if="topic.rightPositionVideo" class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
        <video style="width: 100%; height: 100%; border-radius: 10px" autoplay controls>
          <source :src="topic.video" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  </div>
</template>
