<template>
	<span v-if="isMobile().any">
		<MobilePrivacy></MobilePrivacy>
	</span>
	<span v-else>
		<PrivacyPolicyPc></PrivacyPolicyPc>
	</span>
</template>
<script setup lang="ts">
import isMobile from 'ismobilejs';
import MobilePrivacy from './MobilePrivacy.vue';
import PrivacyPolicyPc from './PrivacyPolicyPc.vue';
console.log(isMobile());
</script>
