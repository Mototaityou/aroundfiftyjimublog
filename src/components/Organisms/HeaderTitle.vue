<script setup lang="ts"></script>
<template>
  <v-app-bar id="header" flat height="100">
    <div id="titlebox">
      <h1 id="title">事務員のプログラミングBLOG</h1>
    </div>
    <v-img
      id="icon"
      class="d-flex justify-start"
      max-height="100"
      max-width="80"
      src="https://myblogimage.s3.ap-northeast-1.amazonaws.com/photo1.png"
      alt="Author"
    ></v-img>
  </v-app-bar>
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
  font-size: 1.7rem;
  font-weight: 700;
  color: #222;
  margin-right: 0;
  padding-right: 0;
}
#titlebox {
  margin-left: 33vw;
}
#header-site-menu {
  font-family: "Noto Sans JP";
  font-size: 1rem;
  font-weight: 700;
  color: #222;
  margin-bottom: 1rem;
}
#icon {
  margin-left: 0;
  padding: 0;
}
</style>
