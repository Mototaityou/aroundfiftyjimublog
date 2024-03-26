<template>
  <span v-if="isMobile().any">
    <MobileArticle></MobileArticle>
  </span>
  <span v-else>
    <ArticalesDetailsPc></ArticalesDetailsPc>
  </span>
</template>
<script setup lang="ts">
import isMobile from 'ismobilejs'
import ArticalesDetailsPc from './ArticalesDetailsPc.vue'
import MobileArticle from './MobileArticle.vue'
console.log(isMobile())
</script>
