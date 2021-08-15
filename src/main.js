import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import dayjs from './plugins/dayjs';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  dayjs,
  created() {
    const userString = localStorage.getItem('currentUser');
    if (userString) {
      const userData = JSON.parse(userString);
      this.$store.commit('SET_CURRENT_USER', userData);
    }
  },
  render: (h) => h(App),
}).$mount('#app');
