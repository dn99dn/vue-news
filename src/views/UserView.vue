<template>
  <div>
    <user-profile :userInfo="fetchedUser">
      <div slot="userName">{{ fetchedUser.id }}</div>
      <span slot="userKarma">{{ fetchedUser.karma }}</span>
    </user-profile>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import UserProfile from '../components/UserProfile.vue';

export default {
  components: {
    UserProfile,
  },
  created() {
    const username = this.$route.params.id;
    this.$store.dispatch('FETCH_USER', username);
  },
  computed: {
    ...mapGetters([
      'fetchedUser'
    ])
  }
}
</script>

<style>

</style>