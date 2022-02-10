import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'
// import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#3f51b5',
        secondary: '#9d8460',
        accent: '#8c9eff',
        error: '#b71c1c'
      }
    }
  }
  // breakpoint: {
  //   thresholds: {
  //     xs: 340,
  //     sm: 576,
  //     md: 768,
  //     lg: 992,
  //     xl: 1200
  //   },
  //   scrollBarWidth: 24
  // }
})
