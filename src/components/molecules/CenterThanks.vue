<script setup lang="ts"></script>
<template>
  <v-col cols="12" sm="6">
    <v-sheet max-width="500" class="mx-auto text-left">
      <h3>送信完了しました。</h3>
      <p class="mb-4">数日以内にメールにてお返事させていただきます。</p>
      <v-divider
        :thickness="1"
        color="#222"
        class="border-opacity-75 mb-4"
      ></v-divider>
    </v-sheet>
  </v-col>
</template>
<style scoped>
h3 {
  margin-bottom: 1rem;
}

ul {
  list-style: disc;
}

li {
  padding-bottom: 1rem;
}
</style>
