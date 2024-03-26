<template>
  <span v-if="isMobile().any">
    <MobileThank></MobileThank>
  </span>
  <span v-else>
    <ThanksViewPc></ThanksViewPc>
  </span>
</template>
<script setup lang="ts">
import isMobile from "ismobilejs";
import ThanksViewPc from "./ThanksViewPc.vue";
import MobileThank from "./MobileThank.vue";
console.log(isMobile());
</script>
