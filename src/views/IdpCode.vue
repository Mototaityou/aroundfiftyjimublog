<script setup lang="ts">
import { ref, onMounted } from 'vue'
import idpconfig from '@/idpconfig'
import { Buffer } from 'buffer'

const access_token = ref('')
const id_token = ref('')
const refresh_token = ref('')
const errorMessage = ref('')

const redirect_uri = JSON.parse(localStorage.getItem('url') as string)
console.log('redirect_uri:' + redirect_uri)
function redirectTo(redirect_uri: string) {
  window.location.href = redirect_uri
}

const query = location.search.replace('?', '')
const code = query.split('=')[1]
console.log('code:' + code)
sessionStorage.setItem('code', JSON.stringify(code))
setTimeout(() => {
  redirectTo(redirect_uri)
}, 3 * 1000)

async function postData() {
  // URLから認可コード取得
  const query = location.search.replace('?', '')
  const authCode = query.split('=')[1]
  console.log('authCode:' + authCode)

  const clientId = idpconfig.AppClientId
  const endpoint = idpconfig.Domain
  const callback = idpconfig.CallbackUrl
  const clientSecret = idpconfig.ClientSecret

  if (typeof authCode === 'string') {
    const headers = {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: 'Basic ' + Buffer.from(`${clientId}:${clientSecret}`).toString('base64')
    }
    const request = {
      method: 'POST',
      headers: headers,
      body: `grant_type=authorization_code&client_id=${clientId}&code=${authCode}&redirect_uri=${callback}`
    }
    const response = await fetch(`${endpoint}/oauth2/token`, request)
    const tokenJson = await response.json()
    try {
      console.log(tokenJson)
      if ('error' in tokenJson) {
        console.log('error:' + tokenJson.error)
        errorMessage.value = tokenJson.error
      } else {
        access_token.value = tokenJson.access_token
        id_token.value = tokenJson.id_token
        refresh_token.value = tokenJson.refresh_token
        sessionStorage.setItem('userInfo', access_token.value)
        sessionStorage.setItem('userId', id_token.value)
        sessionStorage.setItem('userRevoke', refresh_token.value)
      }
    } catch (e) {
      console.log(e)
    }
  }
}

const UserInfoJson = ref('')
const UserInfoName = ref('')
const UserInfoPhoto = ref('')
const isUserInfo = ref(true)

onMounted(async () => {
  console.log('userinfo_call is OK!')
  await postData()
  console.log('access_token.value:' + access_token.value)
  const endpoint = idpconfig.Domain
  if (typeof access_token.value === 'string') {
    const headers = {
      'Content-Type': 'application/x-amz-json-1.1',
      Authorization: 'Bearer ' + access_token.value
    }
    const request = {
      method: 'GET',
      headers: headers
    }
    const response = await fetch(`${endpoint}/oauth2/userInfo`, request)
    const UserJson = await response.json()
    try {
      console.log(UserJson)
      if ('error' in UserJson) {
        console.log('error:' + UserJson.error)
        errorMessage.value = UserJson.error
        isUserInfo.value = true
        setTimeout(() => {
          redirectTo(redirect_uri)
        }, 5 * 1000)
      } else {
        UserInfoJson.value = UserJson
        UserInfoName.value = UserJson.name
        UserInfoPhoto.value = UserJson.picture
        console.log(UserInfoJson.value)
        isUserInfo.value = false
        setTimeout(() => {
          redirectTo(redirect_uri)
        }, 5 * 1000)
      }
    } catch (e) {
      console.log(e)
    }
  }
})
</script>
<template>
  <div>
    <v-card flat>
      <h3>Welcome to login page!</h3>
      <v-avatar>
        <v-img :src="UserInfoPhoto" alt="photo"></v-img>
      </v-avatar>
      <p>{{ UserInfoName }}</p>
    </v-card>
    <v-card v-if="isUserInfo" flat>
      <h3>Welcome to login page!</h3>
      <p>{{ errorMessage }}</p>
      <p>ログインに失敗しました。元のページに戻ります。</p>
    </v-card>
  </div>
</template>
<style></style>
