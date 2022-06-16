import Vue from "vue";
import App from "./App";
import router from "./router";
import store from "./store/store"; // store.jsをインポート

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router,
  store // store: store,
}).$mount("#app");