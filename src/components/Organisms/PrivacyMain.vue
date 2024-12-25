<script setup lang="ts">
import LeftNavArticles from '../molecules/LeftNavArticles.vue';
import CenterPrivacy from '../molecules/CenterPrivacy.vue';
</script>
<template>
	<v-main>
		<v-container>
			<v-row>
				<LeftNavArticles></LeftNavArticles>
				<CenterPrivacy></CenterPrivacy>
			</v-row>
		</v-container>
	</v-main>
</template>
<style scoped>
a {
	color: #222;
	text-decoration: none;
}

a:hover {
	text-decoration: underline;
}

ul {
	list-style: none;
}
</style>
