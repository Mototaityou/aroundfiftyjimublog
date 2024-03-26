<template>
  <v-app>
    <HeaderTitle></HeaderTitle>
    <v-main>
      <v-container>
        <v-row>
          <LeftNavArticles></LeftNavArticles>
          <v-col cols="12" sm="9">
            <v-sheet max-width="760" class="mx-auto">
              <v-img
                v-for="item in data"
                :key="item.image"
                cover
                max-height="200"
                :src="item.image"
                :alt="item.slug"
              ></v-img>
              <h2 v-for="item in data" :key="item.title" class="pt-8">
                {{ item.title }}
              </h2>
              <v-divider class="border-opacity-100 mt-6 mb-5" color="#222"></v-divider>
              <div class="d-flex justify-end">
                <div>
                  <v-btn
                    id="likeButton"
                    @click="ChangeColor"
                    :color="isActive ? '#b3b3b3' : '#ff4d9a'"
                    :class="{ active: isActive }"
                    class="mr-1"
                    density="compact"
                    variant="plain"
                    :icon="isActive ? 'fa-regular fa-heart' : 'fa-solid fa-heart'"
                  ></v-btn>
                  <v-tooltip activator="parent" location="top center" origin="bottom center"
                    >いいね！する</v-tooltip
                  >
                  <p v-for="item in data" :key="item.title" class="text-caption ma-0 mt-n2 mr-1">
                    {{ Number(item.like) + count }}
                  </p>
                </div>
                <p v-for="item in data" :key="item.title" class="text-right text-caption">
                  | 最終更新日:
                  {{ dayjs(item.updated_at).format('YYYY.MM.DD') }} 投稿日:
                  {{ dayjs(item.created_at).format('YYYY.MM.DD') }} | カテゴリー
                  {{ item.genre }}
                </p>
              </div>

              <div
                v-for="item in data"
                :key="item.comment"
                v-html="sanitizeHtml(item.comment)"
                class="text-justify pt-3"
              ></div>
            </v-sheet>
            <v-sheet max-width="760" class="mx-auto text-left my-4">
              <v-container>
                <v-row>
                  <v-col cols="12" sm="12">
                    <v-col cols="auto">
                      <h3 class="ml-n3 my-n1">コメント</h3>
                    </v-col>
                    <div v-for="item in data" :key="item.title">
                      <div v-for="x in item.message" :key="x.created_data">
                        <v-divider class="border-opacity-25 mb-5"></v-divider>
                        <div class="d-flex">
                          <v-avatar size="25">
                            <v-img :src="x.google_photo" alt="photo"></v-img>
                          </v-avatar>
                          <p class="text-body-2 ml-2">
                            {{ x.google_name }}
                          </p>
                          <p class="text-caption ml-10">
                            {{ dayjs(x.created_data).format('YYYY.MM.DD HH:mm') }}
                          </p>
                        </div>
                        <p>{{ x.message_comment }}</p>
                      </div>
                    </div>
                  </v-col>
                </v-row>
              </v-container>
              <v-divider class="border-opacity-25 my-5"></v-divider>
              <v-container>
                <v-row>
                  <v-col cols="auto">
                    <v-avatar size="25">
                      <v-img :src="UserInfoPhoto" alt="photo"></v-img>
                    </v-avatar>
                  </v-col>
                  <v-col cols="auto">
                    <p v-if="!HaveCode" class="text-body-2 ml-n3 mt-1">{{ UserInfoName }}さん</p>
                  </v-col>
                </v-row>
              </v-container>
              <v-col>
                <v-form ref="form" @submit.prevent="post">
                  <v-textarea
                    :disabled="HaveCode"
                    v-model="state.message_comment"
                    :error-messages="v$.message_comment.$errors.map((e: any) => e.$message)"
                    rows="3"
                    auto-grow
                    label="コメントはこちらへ"
                    variant="outlined"
                    required
                    @input="v$.message_comment.$touch"
                    @blur="v$.message_comment.$touch"
                  ></v-textarea>
                  <v-btn variant="text" @click="ipdGoogleLogin" class="gsi-material-button">
                    <div class="gsi-material-button-state"></div>
                    <div class="gsi-material-button-content-wrapper">
                      <div class="gsi-material-button-icon">
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 48 48"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                          style="display: block"
                        >
                          <path
                            fill="#EA4335"
                            d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
                          ></path>
                          <path
                            fill="#4285F4"
                            d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
                          ></path>
                          <path
                            fill="#FBBC05"
                            d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
                          ></path>
                          <path
                            fill="#34A853"
                            d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                          ></path>
                          <path fill="none" d="M0 0h48v48H0z"></path>
                        </svg>
                      </div>
                      <span class="gsi-material-button-contents">Sign in with Google</span>
                      <span style="display: none">Sign in with Google</span>
                    </div>
                  </v-btn>
                  <v-btn
                    :disabled="HaveCode"
                    :click="v$.$validate"
                    @click="post"
                    variant="outlined"
                    class="mx-6"
                    height="35"
                    >送信</v-btn
                  >
                  <v-btn
                    :disabled="HaveCode"
                    :click="v$.$validate"
                    @click="logout"
                    variant="outlined"
                    class=""
                    height="35"
                    >ログアウト</v-btn
                  >
                </v-form>
                <YouAlreadyLogout ref="youmustsignin"></YouAlreadyLogout>
              </v-col>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <FooterTitle></FooterTitle>
  </v-app>
</template>
<script setup lang="ts">
import HeaderTitle from '../components/Organisms/HeaderTitle.vue'
import FooterTitle from '../components/Organisms/FooterTitle.vue'
import LeftNavArticles from '../components/molecules/LeftNavArticles.vue'
import SampleApiService from '../services/SampleApiService'
import type { AxiosResponse, AxiosError } from 'axios'
import { useRoute } from 'vue-router'
import router from '@/router'
import { ref, onMounted, watch, reactive } from 'vue'
import dayjs from 'dayjs'
import timezone from 'dayjs/plugin/timezone'
import sanitizeHtml from 'sanitize-html'
import utc from 'dayjs/plugin/utc'
import DynamodbAPI from '@/services/DynamodbAPI'
import { useVuelidate } from '@vuelidate/core'
import { required } from '@vuelidate/validators'
import idpconfig from '@/idpconfig'
import YouAlreadyLogout from '@/components/molecules/YouAlreadyLogout.vue.vue'
import { Buffer } from 'buffer'

dayjs.extend(timezone)
dayjs.extend(utc)

sanitizeHtml.defaults.allowedTags = sanitizeHtml.defaults.allowedTags.concat(['pre', 'code'])
sanitizeHtml.defaults.allowedAttributes['*'] = ['class']

const route = useRoute()
const itemId = route.params.id
const itemGenre = route.params.slug
console.log(itemId)
console.log(itemGenre)

type Data = {
  id: string
  genre: string
  slug: string
  title: string
  subtitle: string
  image: string
  comment: string
  created_at: string
  updated_at: string
  description: string
  like: string
  message: [
    {
      created_data: string
      google_name: string
      message_comment: string
      google_photo: string
    }
  ]
}

type MessageData = {
  created_data: string
  google_name: string
  message_comment: string
  google_photo: string
}

const data = ref<Data[]>([])
const medium = ref()
const medium2 = ref<MessageData[]>([])
const meta = {
  title: '',
  description: ''
}

onMounted(() => {
  SampleApiService.get(itemGenre, itemId)
    .then((result: AxiosResponse<Data[]>) => {
      console.log(result.data)
      data.value = result.data
      console.log('like:' + result.data[0].like)
      like.value = result.data[0].like
      medium2.value = result.data[0].message
      console.log(medium2.value)
    })
    .catch((error: AxiosError) => {
      console.log('error' + error.message)
    })
})
const like = ref('')

const updateMeta = onMounted(() => {
  SampleApiService.get(itemGenre, itemId)
    .then((result) => {
      console.log(result.data)
      medium.value = result.data[0]
      meta.title = medium.value.title
      console.log('meta.title' + meta.title)
      meta.description = medium.value.description
      const setTitle = meta.title + '  | アラフィフ事務員'
      document.title = setTitle
      document.querySelector("meta[property='og:title']")?.setAttribute('content', setTitle)
      document.querySelector("meta[name='twitter:title']")?.setAttribute('content', setTitle)
      console.log('updateMeta' + document.title)
      document.querySelector("meta[name='description']")?.setAttribute('content', meta.description)
      console.log(meta.description)
      document
        .querySelector("meta[property='og:description']")
        ?.setAttribute('content', meta.description)
      document
        .querySelector("meta[name='twitter:description']")
        ?.setAttribute('content', meta.description)
      document
        .querySelector("meta[property='og:url']")
        ?.setAttribute('content', 'https://aroundfiftyjimu.com' + '/' + itemGenre + '/' + itemId)
    })
    .catch((error: AxiosError) => {
      console.log('error' + error.message)
    })
})
console.log(meta)
watch(
  () => meta,
  () => {
    updateMeta
  },
  { deep: true }
)

const isActive = ref(true)
const count = ref(0)

const messageResult = ref()
const errorMessage = ref('')

const ChangeColor = async () => {
  const OperationType = import.meta.env['VITE_APP_OPERATIONTYPE']
  isActive.value = false
  count.value++
  const likeNub = count.value + Number(like.value)
  console.log('likeNub:' + likeNub)
  const createData = {
    OperationType: OperationType,
    Keys: {
      id: itemId,
      genre: itemGenre,
      like: String(likeNub)
    }
  }
  console.log(createData)

  const result = await isActive.value
  console.log('result:' + result)
  if (result === false) {
    DynamodbAPI.countup(createData)
      .then((response) => {
        console.log(response.data)
        messageResult.value = response.data.body
        console.log(messageResult.value)
      })
      .catch((error) => {
        if (error.response) {
          // The response was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data)
          console.log(error.response.status)
          console.log(error.response.headers)
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and instance of http.ClientRequest in node.js
          console.log('error.request:' + error.request)
        } else {
          // Something happened in setting up the request the triggered an Error
          console.log('Error:' + error.message)
        }
        console.log(error.config)
        messageResult.value = error
        errorMessage.value = '送信が失敗しました。'
      })
  } else {
    console.log(result)
  }
}

const ipdGoogleLogin = () => {
  console.log('ipdGoogleLogin is active!')
  const YourDomain = idpconfig.Domain
  const YourAppClient = idpconfig.AppClientId
  const YourCallbackUrl = idpconfig.CallbackUrl
  window.location.href =
    YourDomain +
    '/oauth2/authorize?client_id=' +
    YourAppClient +
    '&response_type=code&scope=email+openid+profile&redirect_uri=' +
    YourCallbackUrl
}

const form = ref()
const youmustsignin = ref()

const initialState = {
  OperationType: import.meta.env['VITE_APP_OPERATIONTYPE'],
  message_comment: ''
}

const state = reactive({
  ...initialState
})

const rules = {
  message_comment: { required }
}

const v$ = useVuelidate(rules, state)

const url = location.href
console.log('url:' + url)
localStorage.setItem('url', JSON.stringify(url))

const HaveCode = ref(true)
const code = sessionStorage.getItem('code')
console.log('code:' + code)

const userInfo = sessionStorage.getItem('userInfo')
const userId = sessionStorage.getItem('userId')
const userRevoke = sessionStorage.getItem('userRevoke')
const UserInfoJson = ref('')
const UserInfoName = ref('')
const UserInfoPhoto = ref('')

async function userinfo_call() {
  console.log('userinfo_call is OK!')
  const endpoint = idpconfig.Domain

  if (userInfo !== null && typeof userInfo === 'string') {
    const headers = {
      'Content-Type': 'application/x-amz-json-1.1',
      Authorization: 'Bearer ' + userInfo
    }
    const request = {
      method: 'GET',
      headers: headers
    }
    const response = await fetch(`${endpoint}/oauth2/userInfo`, request)
    const UserJson = await response.json()
    try {
      if ('error' in UserJson) {
        console.log('error:' + UserJson.error)
        errorMessage.value = UserJson.error
        HaveCode.value = true
      } else {
        UserInfoJson.value = UserJson
        UserInfoName.value = UserJson.name
        UserInfoPhoto.value = UserJson.picture
        HaveCode.value = false
      }
    } catch (e) {
      console.log(e)
    }
  } else {
    return
  }
}
userinfo_call()

const commentResult = ref()
const commentError = ref('')

const post = async () => {
  const createComment = {
    OperationType: state.OperationType,
    Keys: {
      genre: itemGenre,
      id: itemId,
      message: [
        {
          google_photo: UserInfoPhoto.value,
          created_data: dayjs().tz().format('YYYY-MM-DD HH:mm'),
          google_name: UserInfoName.value,
          message_comment: state.message_comment
        }
      ]
    }
  }
  console.log(createComment)

  const result = await v$.value.$validate()
  console.log('result:' + result)
  if (result === true && typeof userId === 'string') {
    const headers = { headers: { Authorization: userId } }
    DynamodbAPI.updateMessage(createComment, headers)
      .then((response) => {
        commentResult.value = response.data.body
        form.value.reset()
        v$.value.$reset()
        router.go(0)
      })
      .catch((error) => {
        if (error.response) {
          // The response was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data)
          console.log(error.response.status)
          console.log(error.response.headers)
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and instance of http.ClientRequest in node.js
          console.log('error.request:' + error.request)
        } else {
          // Something happened in setting up the request the triggered an Error
          console.log('Error:' + error.message)
        }
        console.log(error.config)
        commentResult.value = error
        commentError.value = '送信が失敗しました。'
      })
  } else {
    console.log(result)
  }
}

async function logout() {
  console.log('code:' + code)

  const clientId = idpconfig.AppClientId
  const endpoint = idpconfig.Domain
  const clientSecret = idpconfig.ClientSecret

  if (typeof code === 'string') {
    const headers = {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: 'Basic ' + Buffer.from(`${clientId}:${clientSecret}`).toString('base64'),
      Accept: 'application/json'
    }
    const request = {
      method: 'POST',
      headers: headers,
      body: `token=${userRevoke}`
    }
    const response = await fetch(`${endpoint}/oauth2/revoke`, request)
    const tokenJson = await JSON.stringify(response || 'null')
    try {
      if ('error' in JSON.parse(tokenJson)) {
        console.log('error:' + tokenJson)
        errorMessage.value = tokenJson
      } else {
        console.log('logout is successed!')
      }
    } catch (e) {
      console.log(e)
    }
  }

  localStorage.clear()
  sessionStorage.clear()
  HaveCode.value = true
  youmustsignin.value.youMustSignin = true
  setTimeout(() => {
    router.go(0)
  }, 6 * 1000)
}
</script>

<style scoped>
a {
  color: #222;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

:deep(ul) {
  list-style: none;
  margin-bottom: 1rem;
}

.v-main {
  margin-top: 30px;
}
:deep(h3) {
  margin-bottom: 1rem;
}
:deep(h4) {
  margin-bottom: 1rem;
}
:deep(p) {
  line-height: 1.6rem;
  margin-bottom: 1rem;
  color: #222;
}
:deep(li) {
  list-style-position: inside;
  margin-bottom: 0.5rem;
  font-weight: bold;
  text-indent: -1rem;
  padding-left: 1rem;
  color: #222;
}
/* :deep div {
  height: auto;
} */

:deep(.highlited) {
  background-color: #191919;
  border-radius: 10px;
  margin: 2rem 0;
  padding: 0 1rem 1.5rem;
  overflow-x: scroll;
}
:deep(.code-lang) {
  background-color: #666666;
  font-size: 0.9rem;
  width: min-content;
  border-radius: 5px;
  text-align: center;
}
:deep(.code-lang-color) {
  color: #ffffff;
  padding: 3px 8px;
}

:deep(pre) {
  text-align: left;
  font-size: 0.9rem;
  line-height: 1.5rem;
  margin-top: -0.6rem;
  padding-left: 1rem;
}

:deep(.v) {
  color: #4ec9b0;
}
:deep(.lt) {
  color: #7a8e98;
}
:deep(.b) {
  color: #9cdcfe;
}
:deep(.e) {
  color: #ffffff;
}
:deep(.y) {
  color: #ce9178;
}
:deep(.t) {
  color: #dcdcaa;
}
:deep(.div) {
  color: #569cd6;
}
.gsi-material-button {
  -moz-user-select: none;
  user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  -webkit-appearance: none;
  appearance: none;
  background-color: WHITE;
  background-image: none;
  border: 1px solid #747775;
  -webkit-border-radius: 4px;
  border-radius: 4px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  color: #1f1f1f;
  cursor: pointer;
  font-family: 'Roboto', arial, sans-serif;
  font-size: 14px;
  height: 40px;
  letter-spacing: 0.25px;
  outline: none;
  overflow: hidden;
  padding: 0 12px;
  position: relative;
  text-align: center;
  -webkit-transition:
    background-color 0.218s,
    border-color 0.218s,
    box-shadow 0.218s;
  transition:
    background-color 0.218s,
    border-color 0.218s,
    box-shadow 0.218s;
  vertical-align: middle;
  white-space: nowrap;
  width: auto;
  max-width: 400px;
  min-width: min-content;
}

.gsi-material-button .gsi-material-button-icon {
  height: 20px;
  margin-right: 12px;
  min-width: 20px;
  width: 20px;
}

.gsi-material-button .gsi-material-button-content-wrapper {
  -webkit-align-items: center;
  align-items: center;
  display: flex;
  -webkit-flex-direction: row;
  flex-direction: row;
  -webkit-flex-wrap: nowrap;
  flex-wrap: nowrap;
  height: 100%;
  justify-content: space-between;
  position: relative;
  width: 100%;
}

.gsi-material-button .gsi-material-button-contents {
  -webkit-flex-grow: 1;
  flex-grow: 1;
  font-family: 'Roboto', arial, sans-serif;
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  vertical-align: top;
}

.gsi-material-button .gsi-material-button-state {
  -webkit-transition: opacity 0.218s;
  transition: opacity 0.218s;
  bottom: 0;
  left: 0;
  opacity: 0;
  position: absolute;
  right: 0;
  top: 0;
}

.gsi-material-button:disabled {
  cursor: default;
  background-color: #ffffff61;
  border-color: #1f1f1f1f;
}

.gsi-material-button:disabled .gsi-material-button-contents {
  opacity: 38%;
}

.gsi-material-button:disabled .gsi-material-button-icon {
  opacity: 38%;
}

.gsi-material-button:not(:disabled):active .gsi-material-button-state,
.gsi-material-button:not(:disabled):focus .gsi-material-button-state {
  background-color: #303030;
  opacity: 12%;
}

.gsi-material-button:not(:disabled):hover {
  -webkit-box-shadow:
    0 1px 2px 0 rgba(60, 64, 67, 0.3),
    0 1px 3px 1px rgba(60, 64, 67, 0.15);
  box-shadow:
    0 1px 2px 0 rgba(60, 64, 67, 0.3),
    0 1px 3px 1px rgba(60, 64, 67, 0.15);
}

.gsi-material-button:not(:disabled):hover .gsi-material-button-state {
  background-color: #303030;
  opacity: 8%;
}
</style>
