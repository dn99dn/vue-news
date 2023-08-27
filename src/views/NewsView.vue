<template>
  <div>
    <item-list></item-list>
  </div>
</template>

<script>
// import bus from '../utils/bus.js';
import listMixin from '../mixins/ListMixin.js';
import ItemList from '../components/ItemList.vue';

export default {
  components: {
    ItemList,
  },
  mixins: [ listMixin ],
  data() {
    return {
      
    }
  },
  created() {
    // bus.$emit('on:progress');
    // setTimeout(() => {
    //   this.$store.dispatch('FETCH_NEWS')
    //     .then(() => {
    //       bus.$emit('off:progress');
    //     })
    // }, 3000)
  },
}
</script>

<style>

</style>