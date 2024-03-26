<script setup lang="ts">
import { ref } from "vue";

const youMustSignin = ref();
// const youMustHaveImage = ref();

// eslint-disable-next-line no-undef
defineExpose({
  youMustSignin,
  // youMustHaveImage,
});
</script>

<template>
  <div class="d-flex align-center flex-column">
    <v-snackbar v-model="youMustSignin">
      <div class="text-subtitle-1">ログアウトしました。</div>
      <v-btn flat color="white" @click="youMustSignin = false">Close</v-btn>
    </v-snackbar>
  </div>
</template>
