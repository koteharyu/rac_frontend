<template>
  <div>
    <div class="m-5" v-if="$store.getters['currentUser']">
      <MicropostForm @created="createMicropost"></MicropostForm>
    </div>
    <TimelineList v-if="isExistMicroposts" :microposts="microposts"></TimelineList>
    <div v-else class="text-center">投稿がありません</div>
  </div>
</template>

<script>
import axios from 'axios';
import MicropostForm from '../MicropostForm.vue';
import TimelineList from '../TimelineList.vue';

export default {
  name: 'PageTimeline',
  components: {
    MicropostForm,
    TimelineList,
  },
  data: () => ({
    microposts: [],
  }),
  created() {
    this.fetchMicroposts();
  },
  computed: {
    isExistMicroposts() {
      return this.microposts.length > 0;
    },
  },
  methods: {
    async fetchMicroposts() {
      const res = await axios.get('http://localhost:3000/api/microposts');
      this.microposts = res.data.microposts;
    },
    async createMicropost(micropostContent) {
      const micropostParams = {
        micropost: {
          content: micropostContent,
        },
      };
      const res = await axios.post('http://localhost:3000/api/microposts', micropostParams);
      this.microposts = [...[res.data.micropost], ...this.microposts];
    },
  },
};
</script>
