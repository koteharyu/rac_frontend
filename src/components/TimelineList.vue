<template>
  <v-card>
    <v-list three-line>
      <MicropostItem v-for="micropost in microposts" :key="micropost.id" :micropost="micropost" />
    </v-list>
  </v-card>
</template>

<script>
import MicropostItem from '../components/MicropostItem.vue';

export default {
  name: 'TimelineList',
  components: {
    MicropostItem,
  },
  props: ['microposts'],
};
</script>
