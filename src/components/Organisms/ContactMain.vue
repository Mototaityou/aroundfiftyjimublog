<script setup lang="ts">
import LeftNav from "../molecules/LeftNav.vue";
import RightNav from "../molecules/RightNav.vue";
import CenterContact from "../molecules/CenterContact.vue";
</script>
<template>
  <v-main>
    <v-container>
      <v-row>
        <LeftNav></LeftNav>
        <CenterContact></CenterContact>
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
