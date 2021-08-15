<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app>
      <v-list dense>
        <v-list-item to="/" link>
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>ホーム</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link to="/profile" v-if="$store.getters['currentUser']">
          <v-list-item-action>
            <v-icon>mdi-account</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>プロフィール</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link v-if="$store.getters['currentUser']">
          <v-list-item-action>
            <v-icon>mdi-logout</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title @click="logout">ログアウト</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link to="/login" v-else>
          <v-list-item-action>
            <v-icon>mdi-account</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>ログイン</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="indigo" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolebar-title>Application</v-toolebar-title>
    </v-app-bar>

    <v-main>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col>
            <router-view></router-view>
          </v-col>
        </v-row>
      </v-container>
    </v-main>

    <v-footer color="indigo" app>
      <span class="text--white">made by haryu</span>
    </v-footer>
  </v-app>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  name: 'App',
  data: () => ({
    drawer: null,
  }),
  computed: {
    ...mapGetters('auth', ['currentUser']),
  },
  created() {
    const currentUser = currentUser;
    const userString = localStorage.getItem('currentUser');
    if (userString) {
      const userData = JSON.parse(userString);
      this.$store.commit('SET_CURRENT_USER', userData);
    }
  },
  methods: {
    ...mapActions('auth', ['logout']),
    logout() {
      if (confirm('ログアウトしますか?')) {
        this.$store.dispatch('logout');
      }
    },
  },
};
</script>
