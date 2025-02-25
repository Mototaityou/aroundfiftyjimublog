<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const select = ref();
const search = ref();
const genre = [
	'beginning',
	'python',
	'html',
	'flask',
	'SQL',
	'javascript',
	'vue',
	'Firebase',
	'AWS',
	'WinActor'
];

watch(select, (genre) => {
	router.push({
		name: 'search',
		params: { slug: genre }
	});
});
</script>
<template>
	<v-col cols="12" sm="3">
		<div class="text-left mr-6">
			<v-autocomplete
				v-model="select"
				v-model:search="search"
				:items="genre"
				class="mx-4 mb-5"
				density="comfortable"
				hide-no-data
				hide-details
				label="サイト内検索"
				style="max-width: 300px"
				variant="outlined"
			>
			</v-autocomplete>
			<h4 class="mb-4">課題 TASK</h4>
			<ul>
				<li>
					<a href="https://othellogame-60847.web.app"
						><h4 class="mb-2">オセロゲーム</h4>
						<v-img
							class="mb-4"
							max-height="200"
							src="https://myblogimage.s3.ap-northeast-1.amazonaws.com/OthelloGame.png"
							alt="OthelloGame"
						></v-img
					></a>
				</li>
				<li>
					<a href="https://mychat-c4f8d.web.app"
						><h4 class="mb-2">チャット</h4>
						<v-img
							max-height="200"
							src="https://myblogimage.s3.ap-northeast-1.amazonaws.com/ChatImage2.png"
							alt="FrendlyChat"
						></v-img
					></a>
				</li>
			</ul>
		</div>
	</v-col>
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
