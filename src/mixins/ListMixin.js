import bus from '../utils/bus.js';

export default {
  created() {
    // const pageName = this.$route.path.substr(1);
    // bus.$emit('on:progress');
    //   this.$store.dispatch('FETCH_LIST', pageName)
    //     .then(() => {
    //       bus.$emit('off:progress');
    //     })
    //     .catch(error => {
    //       console.log(error);
    //     })
  },
  mounted() {
    bus.$emit('off:progress');
  },
}