<template>
  <router-view :key="$route.path" />
</template>
<script setup lang="ts">
import { watch } from 'vue'
import { onMounted } from 'vue'
import { type RouteLocation, useRoute } from 'vue-router'
import updateMeta from '@/views/ArticalesDetailsPc.vue'

const route = useRoute()

function createTitleDesc(routeInstance: RouteLocation) {
  // set a title
  if (routeInstance.meta.title === 'articles') {
    return updateMeta
  } else if (routeInstance.meta.title) {
    const setTitle = routeInstance.meta.title + '| アラフィフ事務員'
    document.title = setTitle
    document.querySelector("meta[property='og:title']")?.setAttribute('content', setTitle)
    document.querySelector("meta[name='twitter:title']")?.setAttribute('content', setTitle)
  } else {
    document.title = '事務員のプログラミングBLOG'
  }
  // set a meta tag
  if (routeInstance.meta.desc) {
    const setDesc = routeInstance.meta.desc + ''
    document.querySelector("meta[name='description']")?.setAttribute('content', setDesc)
    document.querySelector("meta[property='og:description']")?.setAttribute('content', setDesc)
    document.querySelector("meta[name='twitter:description']")?.setAttribute('content', setDesc)
  } else {
    document
      .querySelector("meta[name='description']")
      ?.setAttribute('content', 'ディスクリプションはありません')
  }
  if (routeInstance.path) {
    const setUrl = 'https://aroundfiftyjimu.com' + routeInstance.path
    document.querySelector("meta[property='og:url']")?.setAttribute('content', setUrl)
  } else {
    document
      .querySelector("meta[property='og:url']")
      ?.setAttribute('content', 'https://aroundfiftyjimu.com')
  }
}
onMounted(() => {
  const routeInstance = route
  createTitleDesc(routeInstance)
})
watch(route, (routeInstance, from) => {
  createTitleDesc(routeInstance)
})
</script>
<style lang="scss">
#app {
  font-family: 'Noto Sans JP', Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #ff6f00;
}
</style>
