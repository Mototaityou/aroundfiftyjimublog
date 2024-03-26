<script setup lang="ts">
import { ref } from "vue";
const drawer = ref(false);
</script>
<template>
  <v-app-bar id="header" flat width="auto" height="auto" class="pa-3">
    <div class="d-flex align-center justify-center text-center mx-auto">
      <div class="ps-1">
        <h1 id="title">事務員のプログラミングBLOG</h1>
      </div>
      <div id="icon">
        <v-img
          max-height="75"
          max-width="65"
          src="https://myblogimage.s3.ap-northeast-1.amazonaws.com/photo1.png"
          alt="Author"
        ></v-img>
      </div>
    </div>
    <div class="pl-1">
      <v-btn
        icon="fa-solid fa-bars"
        @click="drawer = !drawer"
        density="compact"
        flat
      ></v-btn>
    </div>
  </v-app-bar>
  <v-navigation-drawer v-model="drawer" temporary width="400">
    <div id="header-site-menu" class="text-left">
      <ul>
        <li>
          <RouterLink to="/">
            <h4 class="mb-4">PC</h4>
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/mobile">
            <h4 class="mb-4">モバイル</h4>
          </RouterLink>
        </li>

        <li>
          <RouterLink to="/mobile">
            <h4 class="mb-4">HOME</h4>
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/mobile/about">
            <h4 class="mb-4">ABOUT</h4>
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/mobile/portfolio">
            <h4 class="mb-4">PORTFOLIO</h4>
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/mobile/contact">
            <h4 class="mb-4">CONTACT</h4>
          </RouterLink>
        </li>
      </ul>
      <div id="text-noto" class="mt-8">
        <p class="text-subtitle-1 font-weight-middle mb-2">プロフィール</p>
        <v-img
          class="ma-5"
          max-height="80"
          max-width="100"
          src="https://myblogimage.s3.ap-northeast-1.amazonaws.com/photo1.png"
          alt="Author"
        ></v-img>
        <p class="text-body-2 font-weight-bold mb-2">Author : 事務員</p>
        <p class="text-body-2 mb-2">アラフィフ事務員</p>
        <p class="text-body-2 mb-4">プログラミング勉強中</p>
      </div>
    </div>
  </v-navigation-drawer>
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

#title {
  font-size: 1.6rem;
  font-weight: 700;
  color: #222;
}
.v-navigation-drawer {
  margin-top: 100px;
}
#icon {
  width: 60px;
  margin-left: 1vw;
}
</style>
