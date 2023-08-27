<template>
  <div>
    <item-list></item-list>
  </div>
</template>

<script>
import ItemList from '../components/ItemList.vue'

export default {
  components: {
    ItemList,
  },
  data() {
    return {
      
    }
  },
  created() {
    this.$store.dispatch('FETCH_JOBS');
  }
}
</script>

<style>

</style>