// Styles
import "vuetify/dist/vuetify.css";
import "material-design-icons-iconfont/dist/material-design-icons.css";
import "mdi/css/materialdesignicons.css";

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";

// Lib imports
import Vuetify from "vuetify";
import axios from "axios";

// Sync router with store
import { sync } from "vuex-router-sync";

// Application imports
import App from "./App";
import Components from "./components";
import i18n from "./i18n";
import router from "./router";
import store from "./store";

import * as VueGoogleMaps from "vue2-google-maps";
import VueGallery from "vue-gallery";

// Sync store with router
sync(store, router);

// Vuetify bootstrap
Vue.use(Vuetify, {
  theme: {
    primary: "#2196F3",
    secondary: "#00bc9d",
    accent: "#82B1FF",
    error: "#FF5252",
    info: "#2196F3",
    success: "#4CAF50",
    warning: "#FFC107"
  }
});

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyCKp9ObjUhyshoj0UiQla91irM56EaxzP8"
  }
});

Vue.component("gallery", VueGallery);

Vue.prototype.$http = axios;

// Load custom components
for (const key in Components) {
  Vue.component(key, Components[key]);
}

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  i18n,
  router,
  store,
  template: "<App/>",
  components: { App }
});
