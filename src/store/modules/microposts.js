import axios from 'axios';

const apiUrl = 'http://localhost:3000';

const state = {
  microposts: [],
  micropost: null,
};

const getters = {
  microposts: (state) => state.microposts,
  micropsot: (state) => state.micropost,
};

const mutations = {
  fetchMicroposts: (state, microposts) => (state.microposts = microposts),
};

const actions = {
  async fetchMicroposts({ commit }) {
    const res = await axios.get(`${apiUrl}/api/microposts`);
    commit('fetchMicroposts', res.data);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
