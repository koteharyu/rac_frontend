<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">User Profile</span>
        </v-card-title>

        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field label="Name" required v-model="user.name"></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="Introduction" v-model="user.introduction"></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="close">キャンセル</v-btn>
          <v-btn color="blud darken-1" text @click="updateProfile">更新</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'ProfileEditModal',
  data: () => ({
    dialog: false,
    user: null,
  }),
  computed: {
    ...mapGetters('auth', ['currentUser']),
  },
  created() {
    this.user = { ...this.currentUser };
  },
  methods: {
    open() {
      this.dialog = true;
    },
    close() {
      this.dialog = false;
    },
    async updateProfile() {
      const userParams = {
        user: {
          name: this.user.name,
          introduction: this.user.introduction,
        },
      };
      await this.$store.dispatch('updateProfile', userParams);
      this.close();
    },
  },
};
</script>
