// plugins/vuetify.js
import 'vuetify/styles'
import {aliases, md} from 'vuetify/iconsets/md'
import {createVuetify} from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives
})

export default vuetify