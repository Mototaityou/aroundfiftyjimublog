<script setup lang="ts"></script>
<template>
	<v-footer class="d-flex align-center justify-start text-center mx-auto"
		><p class="text-body-2">©2024 事務員のプログラミングBLOG</p>
		<RouterLink to="/privacy"
			><h5 class="ml-3">プライバシーポリシー・免責事項</h5></RouterLink
		></v-footer
	>
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
#header-site-menu {
	position: fixed;
}
</style>
