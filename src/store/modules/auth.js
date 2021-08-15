import axios from 'axios';

const apiUrl = 'http://localhost:3000';

const state = {
  currentUser: null,
};

const getters = {
  currentUser: (state) => state.currentUser,
};

const mutations = {
  SET_CURRENT_USER: (state, user) => {
    state.currentUser = user;
    localStorage.setItem('currentUser', JSON.stringify(user));
    axios.defaults.headers.common['Authorization'] = `Bearer ${user.token}`;
  },
};

const actions = {
  async login({ commit }, sessionParams) {
    const res = await axios.post(`${apiUrl}/api/session`, sessionParams);
    commit('SET_CURRENT_USER', res.data.user);
  },
  logout({ commit }) {
    commit('SET_CURRENT_USER', null);
  },
  async updateProfile({ commit, state }, userParams) {
    const res = await axios.patch('http://localhost:3000/api/me/account', userParams);
    commit('SET_CURRENT_USER', { ...res.data.user, ...{ token: state.currentUser.token } });
  },
};

export default {
  namespaces: true,
  state,
  getters,
  actions,
  mutations,
};
