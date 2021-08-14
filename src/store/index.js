import Vue from 'vue';
import Vuex from 'vuex';
import auth from './modules/auth';
import microposts from './modules/microposts';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    microposts,
  },
});
