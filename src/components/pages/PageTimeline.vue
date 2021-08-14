<template>
  <div>
    <div class="m-5">
      <MicropostForm @created="createMicropost"></MicropostForm>
    </div>
    <TimelineList :microposts="microposts"></TimelineList>
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
