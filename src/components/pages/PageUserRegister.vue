<template>
  <div>
    <v-container>
      <v-row justify="center" align="center">
        <v-col cols="12" sm="8" md="4">
          <v-card class="elevation-12">
            <v-card-text>
              <v-form ref="form" v-model="valid" lazy-validation>
                <v-text-field
                  v-model="name"
                  :counter="10"
                  :rules="nameRules"
                  required
                  label="Name"
                  prepend-icon="mdi-account"
                ></v-text-field>
                <v-text-field v-model="email" :rules="emailRules" required label="E-mail" prepend-icon="mdi-email"></v-text-field>
                <v-text-field
                  v-model="password"
                  :rules="passwordRules"
                  label="Password"
                  required
                  prepend-icon="mdi-lock"
                  type="password"
                ></v-text-field>
                <v-text-field
                  v-model="passwordConfirmation"
                  :rules="passwordConfirmationRules"
                  required
                  label="PasswordConfirmation"
                  prepend-icon="mdi-lock"
                  type="password"
                ></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-btn color="indigo" dark @click="signup">新規登録</v-btn>
              <v-spacer></v-spacer>
              <router-link to="/login" class="text-decoration-none">ログインページへ</router-link>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import axios from 'axios';
import { mapActions } from 'vuex';
export default {
  name: 'PageUserRegister',
  data: () => ({
    email: '',
    name: '',
    password: '',
    passwordConfirmation: '',
  }),
  computed: {
    nameRules() {
      return [(v) => (v && v.length <= 10) || 'Name must be less than 10 characters', (v) => !!v || 'Name is required'];
    },
    emailRules() {
      return [
        (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        (v) => !!v || 'E-mail is required',
      ];
    },
    passwordRules() {
      return [(v) => !!v || 'Password is required'];
    },
    passwordConfirmationRules() {
      return [this.password == this.passwordConfirmation || 'Password must match', (v) => !!v || 'PasswordConfirmation is required'];
    },
  },
  methods: {
    ...mapActions('auth', ['login']),
    async signup() {
      if (this.$refs.form.validate()) {
        try {
          await axios.post('http://localhost:3000/api/users', {
            user: {
              name: this.name,
              email: this.email,
              password: this.password,
              passwordConfirmation: this.passwordConfirmation,
            },
          });
          const userParams = {
            email: this.email,
            password: this.password,
          };
          await this.$store.dispatch('login', userParams);
          this.$router.push('/');
        } catch (err) {
          alert(err);
        }
      }
    },
  },
};
</script>
