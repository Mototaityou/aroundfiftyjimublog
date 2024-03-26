<template>
  <span v-if="isMobile().any">
    <MobileSearch></MobileSearch>
  </span>
  <span v-else>
    <SearchViewPc></SearchViewPc>
  </span>
</template>
<script setup lang="ts">
import isMobile from "ismobilejs";
import SearchViewPc from "./SearchViewPc.vue";
import MobileSearch from "./MobileSearch.vue";
console.log(isMobile());
</script>
