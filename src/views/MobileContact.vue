<template>
  <v-app>
    <MobileHeader></MobileHeader>
    <v-main>
      <v-container>
        <v-row>
          <MobileLeft></MobileLeft>
          <CenterContact></CenterContact>
          <RightNav></RightNav>
        </v-row>
      </v-container>
    </v-main>
    <FooterTitle></FooterTitle>
  </v-app>
</template>
<script setup lang="ts">
import MobileHeader from '@/components/Organisms/MobileHeader.vue'
import MobileLeft from '@/components/molecules/MobileLeft.vue'
import FooterTitle from '../components/Organisms/FooterTitle.vue'
import RightNav from '@/components/molecules/RightNav.vue'
import CenterContact from '@/components/molecules/CenterContact.vue'
</script>

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

.v-main {
  margin-top: 12vh;
}
</style>
