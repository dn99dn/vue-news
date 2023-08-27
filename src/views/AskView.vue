<template>
  <div>
    <item-list></item-list>
  </div>
</template>

<script>
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
    // this.$store.dispatch('FETCH_ASK');
  }
}
</script>

<style>

</style>