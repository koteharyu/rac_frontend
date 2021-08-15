<template>
  <div>
    <v-list-item @click="$router.push(`/microposts/${microppst.id}`)">
      <v-list-item-avatar @click="$touter.push(`/users/${micropost.user.id}`)">
        <v-img :src="micropost.user.avatar_url"></v-img>
      </v-list-item-avatar>

      <v-list-item-content>
        <v-list-item-title v-html="micropost.user.name"></v-list-item-title>
        <v-list-item-subtitle v-html="micropost.content" style="white-space: pre-line"></v-list-item-subtitle>
      </v-list-item-content>
      <v-list-item-action>
        <v-list-item-action-text v-text="$dayjs(micropost.created_at).format('YYYY-MM-DD HH:mm:ss')"></v-list-item-action-text>
      </v-list-item-action>
    </v-list-item>
    <v-divider :inset="true"></v-divider>
  </div>
</template>

<script>
export default {
  name: 'MicropostItem',
  props: ['micropost'],
};
</script>
