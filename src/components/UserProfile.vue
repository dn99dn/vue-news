<template>
  <div>
    <section class="header-container">
      <div class="user-container">
        <div>
          <i class="fas fa-user-circle"></i>
        </div>
        <div class="user-description">
          <slot name="userName"></slot>
          <router-link :to="'/user/' + userInfo.user">{{ userInfo.user }}</router-link>
          <div class="time">{{ userInfo.time_ago || 'Joined ' + userInfo.created + ','}}
            <span v-if="userInfo.points">, {{ userInfo.points }} points</span>
            <slot name="userKarma"></slot>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    userInfo: {},
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
</style>