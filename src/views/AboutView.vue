<template>
  <span v-if="isMobile().any">
    <MobileAbout></MobileAbout>
  </span>
  <span v-else>
    <AboutViewPc></AboutViewPc>
  </span>
</template>
<script setup lang="ts">
import isMobile from 'ismobilejs'
import AboutViewPc from './AboutViewPc.vue'
import MobileAbout from './MobileAbout.vue'
console.log(isMobile())
</script>
