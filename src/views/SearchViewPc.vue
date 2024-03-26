<template>
  <v-app>
    <HeaderTitle></HeaderTitle>
    <v-main>
      <v-container>
        <v-row>
          <LeftNav></LeftNav>
          <v-col cols="12" sm="6">
            <div><h3 class="mb-5">検索結果</h3></div>
            <v-divider
              :thickness="1"
              class="border-opacity-100 mt-5 mb-5"
              color="#222"
            ></v-divider>
            <div v-for="(item, index) in datas" :key="index" class="text-left">
              <router-link
                :to="{
                  name: 'ArticalesDetails',
                  params: { id: item.id, slug: item.genre },
                }"
                ><h3 class="text-indigo-accent-3 mt-3">
                  {{ item.title }}
                </h3>
                <h4 class="mb-1 text-amber-darken-4">{{ item.genre }}</h4>
                <p class="mb-3 text-body-2">
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
import HeaderTitle from "../components/Organisms/HeaderTitle.vue";
import FooterTitle from "../components/Organisms/FooterTitle.vue";
import LeftNav from "@/components/molecules/LeftNav.vue";
import RightNav from "@/components/molecules/RightNav.vue";
import SampleApiService from "../services/SampleApiService";
import dayjs from "dayjs";
import type { AxiosResponse, AxiosError } from "axios";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

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
