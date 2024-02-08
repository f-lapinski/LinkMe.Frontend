// import this after install `@mdi/font` package
import '@mdi/font/css/materialdesignicons.css'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import colors from 'vuetify/util/colors'

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    defaults: {
      global: { 
      },
      VSheet: { 
      },
    },
    theme: {
      defaultTheme: 'light',
      themes: {
        light: {
          colors: {
            'brand': colors.purple.lighten3,
          }
        },
        dark: {
          colors: {
            'brand': colors.purple.darken3,
          }
        }
      }
    }
  })
  app.vueApp.use(vuetify)
})
