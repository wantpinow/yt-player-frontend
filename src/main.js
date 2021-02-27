import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// this is foo

// Buefy imports
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

// Fontawesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(fas);
Vue.component('vue-fontawesome', FontAwesomeIcon);

// Global (static) variables
Vue.mixin({
  data: function () {
    return {
      get api_route() {
        return "https://wantpinow.pythonanywhere.com/";
      }
    }
  }
})
// eslint-disable-next-line no-unused-vars
export const api_route = "https://wantpinow.pythonanywhere.com/"

// Initialise Buefy
Vue.use(Buefy, {
  defaultIconComponent: "vue-fontawesome",
  defaultIconPack: "fas",
  customIconPacks: {
    fas: {
      sizes: {
        default: "lg",
        "is-small": "1x",
        "is-medium": "2x",
        "is-large": "3x"
      },
      iconPrefix: ""
    }
  }
});

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
