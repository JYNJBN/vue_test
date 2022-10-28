<template>
  <Count></Count>
</template>

<script>
//
//
import Count from './components/Count.vue';
export default {
  name: 'App',
  components: { Count },
  mounted() {
    console.log(this);
  },
};
</script>

<style></style>
