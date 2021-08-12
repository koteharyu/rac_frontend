<template>
  <v-container>
    <v-form>
      <v-text-field label="this is home page"></v-text-field>
    </v-form>
    <div>
      <p>users:</p>
      <p>{{ users }}</p>
      <v-btn @click="fetchUsers">fetch users</v-btn>
    </div>
  </v-container>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Home',
  data: () => ({
    users: [],
  }),
  methods: {
    fetchUsers() {
      axios
        .get('http://localhost:3000/api/users')
        .then((response) => {
          this.users = response.data;
        })
        .catch((error) => {
          alert(error);
        });
    },
  },
};
</script>
