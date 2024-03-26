<script setup lang="ts">
import LeftNav from "../molecules/LeftNav.vue";
import CenterAbout from "../molecules/CenterAbout.vue";
import RightNav from "../molecules/RightNav.vue";
</script>
<template>
  <v-main>
    <v-container>
      <v-row>
        <LeftNav></LeftNav>
        <CenterAbout></CenterAbout>
        <RightNav></RightNav>
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
