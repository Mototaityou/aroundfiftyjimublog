<template>
  <span v-if="isMobile().any"><TopMobile></TopMobile></span>
  <span v-else><HomeViewPc></HomeViewPc></span>
</template>
<script setup lang="ts">
import isMobile from 'ismobilejs'
import HomeViewPc from './HomeViewPc.vue'
import TopMobile from './TopMobile.vue'
console.log(isMobile())
</script>
