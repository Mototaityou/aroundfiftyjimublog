<template>
	<span v-if="isMobile().any">
		<MobilePortFolio></MobilePortFolio>
	</span>
	<span v-else>
		<portFolioViewPc></portFolioViewPc>
	</span>
</template>
<script setup lang="ts">
import isMobile from 'ismobilejs';
import portFolioViewPc from './portfolioViewPc.vue';
import MobilePortFolio from './MobilePortFolio.vue';
console.log(isMobile());
</script>
