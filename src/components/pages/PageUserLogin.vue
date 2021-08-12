<template>
  <div>
    <v-container>
      <v-row justify="center" align="center">
        <v-col cols="12" sm="8" md="4">
          <v-card class="elevation-12">
            <v-card-text>
              <v-form ref="form" lazy-validation>
                <v-text-field v-model="email" label="E-mail" required :rules="emailRules" prepend-icon="mdi-email"></v-text-field>

                <v-text-field
                  v-model="password"
                  label="password"
                  :rules="passwordRules"
                  required
                  prepend-icon="mdi-lock"
                  type="password"
                ></v-text-field>
              </v-form>
            </v-card-text>

            <v-card-actions>
              <v-btn dark color="indigo" @click="login">ログイン</v-btn>
              <v-spacer></v-spacer>
              <router-link to="/signup" class="text-decoration-none">新規登録</router-link>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'PageUserLogin',
  data: () => ({
    email: '',
  }),
  computed: {
    emailRules() {
      return [(v) => /.+@.+\..+/.test(v) || 'E-mail must be valid', (v) => !!v || 'E-mail is required'];
    },
    passwordRules() {
      return [(v) => !!v || 'Password is required'];
    },
  },
  methods: {
    ...mapActions('auth', ['login']),
    async login() {
      if (this.$refs.form.validate()) {
        try {
          const sessionParams = {
            session: {
              email: this.email,
              password: this.password,
            },
          };
          await this.$store.dispatch('login', sessionParams);
          this.$router.push('/');
        } catch (error) {
          alert(error);
        }
      }
    },
  },
};
</script>
