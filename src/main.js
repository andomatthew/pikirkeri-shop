import '../src/assets/scss/app.scss'
import '../src/assets/scss/fonts.scss'

import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'



createApp(App)
  .use(vuetify)
  .use(router)
  .mount('#app')
