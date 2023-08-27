import bus from '../utils/bus.js';
import ListView from './ListView.vue';

export default function createListView(name) {
  return {
    name: name,
    created() {
      const pageName = this.$route.path.substr(1);
      // console.log('pageName : ' + pageName);
      bus.$emit('on:progress');
      // setTimeout(() => {
        this.$store.dispatch('FETCH_LIST', pageName)
          .then(() => {
            bus.$emit('off:progress');
          })
          .catch(error => {
            console.log(error);
          })
      // }, 3000)
    },
    render(createElement) {
      return createElement(ListView);
    }
  }
}