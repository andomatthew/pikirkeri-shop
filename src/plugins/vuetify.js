// plugins/vuetify.js
import 'vuetify/styles'
// import { aliases, mdi } from 'vuetify/iconsets/mdi'
// import '@mdi/font/css/materialdesignicons.css'
import { aliases, md } from 'vuetify/iconsets/md'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import {createVuetify} from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'md',
    aliases,
    sets: {
      md
    }
  }
})

export default vuetify