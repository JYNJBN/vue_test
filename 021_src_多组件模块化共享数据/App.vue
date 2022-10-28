<template>
  <div>
    <Count></Count>
    <List></List>
  </div>
</template>

<script>
//
//
import Count from './components/Count.vue';
import List from './components/List.vue';

export default {
  name: 'App',
  components: { Count, List },
  mounted() {
    console.log(this);
  },
};
</script>

<style></style>
