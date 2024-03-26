<script setup lang="ts"></script>
<template>
  <v-col cols="12" sm="6">
    <v-sheet width="500" class="mx-auto text-left">
      <h3>著者プロフィール</h3>
      <p class="mb-4">
        営業事務からプログラマーへ転職すべく、プログラミングを勉強しているアラフィフ事務員。
      </p>
      <v-divider
        :thickness="1"
        color="#222"
        class="border-opacity-75 mb-4"
      ></v-divider>
      <h3>略歴</h3>
      <ul class="pl-3">
        <li>高校の部活はアニ研。</li>
        <li>デザイン専門学校に通う</li>
        <li>デザイン会社にグラフィックデザイナーとして勤務</li>
        <li>いろいろな仕事に就く</li>
        <li>英検二級をとって営業事務として勤務</li>
        <li>『LIFE SHIFT』を読んでプログラミングを学び始める ←いまここ</li>
      </ul>
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
