<template>
  <div id="app">
    <spinner :loading="loading"></spinner>
    <tool-bar></tool-bar>
    <transition name="page">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import bus from './utils/bus.js';
import Spinner from './components/Spinner.vue';
import ToolBar from './components/ToolBar';

export default {
  name: 'App',
  components: {
    Spinner,
    ToolBar,
  },
  data() {
    return {
      loading: false,
    }
  },
  created() {
    bus.$on('on:progress', this.onProgress);
    bus.$on('off:progress', this.offProgress);
  },
  methods: {
    onProgress() {
      this.loading = true;
    },
    offProgress() {
      this.loading = false;
    }
  }
}
</script>

<style>
body {
  margin: 0;
}

a {
  color: #34495e;
  text-decoration: none;
}
a:hover {
  color: #42b883;
  text-decoration: underline;
}
a.router-link-active {
  text-decoration: underline;
}

/* Router Transition */
.page-enter-active, .page-leave-active {
  transition: opacity .3s ease;
}
.page-enter, .page-leave-to
/* .routing-page-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
