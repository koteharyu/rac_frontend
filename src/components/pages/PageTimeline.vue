<template>
  <v-container>
    <v-row>
      <v-col>
        <div class="pb-10">
          <div class="mb-5" v-if="$store.getters['currentUser']">
            <MicropostForm @created="createMicropost"></MicropostForm>
          </div>
          <TimelineList :microposts="microposts" v-if="isExistMicroposts" class="mb-5"></TimelineList>
          <div class="text-center" v-else>一件もありません</div>

          <template v-if="pagingMeta">
            <div class="text-center">
              <v-pagination
                color="indigo"
                v-model="pagingMeta.current_page"
                :length="pagingMeta.total_pages"
                @input="paging"
              ></v-pagination>
            </div>
          </template>
        </div>
      </v-col>
    </v-row>
  </v-container>
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
    pagingMeta: null,
    currentPage: 1
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
      const res = await axios.get('http://localhost:3000/api/microposts', { params: { page: this.currentPage }});
      this.microposts = res.data.microposts;
      this.pagingMeta = res.data.meta
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
    paging(page) {
      this.currentPage = page
      this.fetchMicroposts()
      this.$vuetify.goYo(0)
    }
  },
};
</script>
