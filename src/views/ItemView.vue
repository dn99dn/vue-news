<template>
  <div>
    <section class="header-container">
      <div class="user-container">
        <div>
          <i class="fas fa-user-circle"></i>
        </div>
        <!-- <div class="user-description">
          <router-link :to="'/user/' + userName">{{ userName }}</router-link>
          <div class="time">{{ userTimeAgo }}</div>
        </div> -->
        <user-profile :userInfo="fetchedItem">
        
        </user-profile>
      </div>
      <h2>{{ userQuestion }}</h2>
    </section>
    <section>
      <div v-html="userContent" class="content"></div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import UserProfile from '../components/UserProfile.vue';

export default {
  components: {
    UserProfile,
  },
  created() {
    const id = this.$route.params.id;
    console.log(id);
    this.$store.dispatch('FETCH_ITEM', id);
  },
  computed: {
    ...mapGetters([
      'fetchedItem',
    ]),
    userName() {
      return this.fetchedItem.user;
    },
    userTimeAgo() {
      return this.fetchedItem.time_ago;
    },
    userQuestion() {
      return this.fetchedItem.title;
    },
    userContent() {
      return this.fetchedItem.content;
    },
  }
}
</script>

<style scoped>
.user-container {
  display: flex;
  align-items: center;
  padding: 10px;
}
.fa-user-circle {
  font-size: 2.5rem;
}
.user-description {
  padding-left: 8px;
}
.time {
  font-size: 0.7rem;
}
h3 {
  margin-bottom: 0.5rem;
  margin-left: 0.2rem;
}
.content {
  border: ridge;
  padding: 0.5rem;
}
</style>