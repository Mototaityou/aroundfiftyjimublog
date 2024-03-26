<template>
  <v-app>
    <MobileHeader></MobileHeader>
    <v-main>
      <v-container>
        <v-row>
          <MobileLeft></MobileLeft>
          <v-col cols="12" sm="6">
            <div v-for="(item, index) in datas" :key="index">
              <router-link
                :to="{
                  name: 'MobileArticle',
                  params: { id: item.id, slug: item.genre }
                }"
              >
                <v-hover v-slot="{ isHovering, props }">
                  <v-card
                    flat
                    width="auto"
                    :elevation="isHovering ? 12 : 2"
                    :class="{ 'on-hover': isHovering }"
                    class="mx-auto mb-4"
                    v-bind="props"
                  >
                    <v-img cover max-height="200" :src="item.image" :alt="item.title"></v-img>
                    <h3 class="text-left ml-4 mt-4">{{ item.title }}</h3>
                    <p class="text-left text-caption font-weight-bold ml-4">
                      {{ dayjs(item.created_at).format('YYYY.MM.DD') }}
                    </p>
                    <p class="text-left text-body-2 ml-4 mb-4">
                      {{ item.subtitle }}
                    </p></v-card
                  >
                </v-hover>
              </router-link>
            </div>
          </v-col>
          <MobileRight></MobileRight>
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
import MobileRight from '@/components/molecules/MobileRight.vue'
import SampleApiService from '../services/SampleApiService'
import type { AxiosResponse, AxiosError } from 'axios'
import { ref, onMounted } from 'vue'
import dayjs from 'dayjs'

type Datas = {
  id: string
  genre: string
  slug: string
  title: string
  subtitle: string
  image: string
  comment: string
  created_at: string
  updated_at: string
}

const datas = ref<Datas[]>([])

onMounted(() => {
  SampleApiService.getAll()
    .then((result: AxiosResponse<Datas[]>) => {
      console.log(result.data)
      datas.value = result.data
    })
    .catch((error: AxiosError) => {
      console.log('error' + error.message)
    })
})
console.log(datas)
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
