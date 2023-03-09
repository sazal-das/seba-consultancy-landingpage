<template>
  <q-layout view="lHh Lpr lFf" >
    <q-header class="bg-white" elevated>
      <header-links class="text-right"/>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import HeaderLinks from '../components/HeaderLinks.vue'

</script>
