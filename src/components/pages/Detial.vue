<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <ul>
    <li>id:{{ id }},title:{{ title }}</li>
  </ul>
</template>

<script>
export default {
  name: 'Detial',
  mounted() {
    console.log(this.$route);
  },
  props: ['id', 'title'],
};
</script>

<style></style>
