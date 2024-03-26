<template>
  <v-app>
    <MobileHeader></MobileHeader>
    <v-main>
      <v-container>
        <v-row>
          <MobileLeft></MobileLeft>
          <v-col cols="12" sm="6">
            <div>
              <h3 class="mb-5">検索結果</h3>
            </div>
            <div v-for="(item, index) in datas" :key="index">
              <router-link
                :to="{
                  name: 'MobileArticle',
                  params: { id: item.id, slug: item.genre },
                }"
              >
                <h3 class="text-indigo-accent-3 mt-3">
                  {{ item.title }}
                </h3>
                <h4 class="mb-1 text-amber-darken-4">{{ item.genre }}</h4>
                <p class="mb-3 text-body-2 text-left">
                  {{ dayjs(item.created_at).format("YYYY.MM.DD") }}
                  ... {{ item.subtitle }}
                </p>
                <v-divider></v-divider>
              </router-link>
            </div>
          </v-col>
          <RightNav></RightNav>
        </v-row>
      </v-container>
    </v-main>
    <FooterTitle></FooterTitle>
  </v-app>
</template>
<script setup lang="ts">
import MobileHeader from "@/components/Organisms/MobileHeader.vue";
import MobileLeft from "@/components/molecules/MobileLeft.vue";
import FooterTitle from "../components/Organisms/FooterTitle.vue";
import RightNav from "@/components/molecules/RightNav.vue";
// import { data } from "../@types/blog";
// console.log(data);
import SampleApiService from "../services/SampleApiService";
import type { AxiosResponse, AxiosError } from "axios";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import dayjs from "dayjs";

const route = useRoute();
const itemGenre = route.params.slug;
console.log(itemGenre);

type Datas = {
  id: string;
  genre: string;
  slug: string;
  title: string;
  subtitle: string;
  image: string;
  comment: string;
  created_at: string;
  updated_at: string;
};

const datas = ref<Datas[]>([]);

onMounted(() => {
  SampleApiService.getSearch(itemGenre)
    .then((result: AxiosResponse<Datas[]>) => {
      console.log(result.data);
      datas.value = result.data;
    })
    .catch((error: AxiosError) => {
      console.log("error" + error.message);
    });
});
console.log(datas);
</script>

<style>
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
  margin-top: 30px;
}

.responsible {
  display: flex;
  align-items: center;
  justify-content: center;
}

.responsible-li {
  padding-left: 20px;
}
</style>
