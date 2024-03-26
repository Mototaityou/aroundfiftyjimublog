<script setup lang="ts"></script>
<template>
  <v-col cols="12" sm="2">
    <div id="header-site-menu" class="text-left">
      <ul>
        <li>
          <RouterLink to="/mobile">
            <h4 class="mb-4">モバイル</h4>
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/">
            <h4 class="mb-4">HOME</h4>
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/about">
            <h4 class="mb-4">ABOUT</h4>
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/portfolio">
            <h4 class="mb-4">PORTFOLIO</h4>
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/contact">
            <h4 class="mb-4">CONTACT</h4>
          </RouterLink>
        </li>
      </ul>
      <div id="text-noto" class="mt-8">
        <p class="text-subtitle-1 font-weight-middle mb-2">プロフィール</p>
        <v-img
          class="mb-2"
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

#header-site-menu {
  position: fixed;
}
</style>
