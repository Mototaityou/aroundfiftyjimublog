<template>
  <span v-if="isMobile().any">
    <MobileContact></MobileContact>
  </span>
  <span v-else>
    <ContactDetailPc></ContactDetailPc>
  </span>
</template>
<script setup lang="ts">
import isMobile from 'ismobilejs'
import ContactDetailPc from './ContactDetailPc.vue'
import MobileContact from './MobileContact.vue'
console.log(isMobile())
</script>
