import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createGtm } from '@gtm-support/vue-gtm'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, fa } from 'vuetify/iconsets/fa'
import { mdi } from 'vuetify/iconsets/mdi'
// require("@/assets/sass/main.scss");

import '@mdi/font/css/materialdesignicons.css'
import '@fortawesome/fontawesome-free/css/all.css'

const vuetify = createVuetify({
  ssr: true,
  components,
  directives,
  icons: {
    defaultSet: 'fa',
    aliases,
    sets: {
      fa,
      mdi
    }
  }
})

const app = createApp(App)

app.use(router)
app.use(vuetify)
app.use(
  createGtm({
    id: 'GTM-WK7MFX6J',
    trackViewEventProperty: 'page-load'
  })
)
app.mount('#app')
