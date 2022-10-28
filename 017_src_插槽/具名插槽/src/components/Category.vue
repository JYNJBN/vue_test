<template>
  <div class="Category">
    <h3>{{ title }}</h3>
    <slot name="top"></slot>
    <slot name="center">ddd</slot>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Category',
  props: ['items', 'title'],
};
</script>

<style lang="less">
.Category {
  background-color: rgb(29, 113, 209);
  width: 200px;
  height: 200px;
  h3 {
    background-color: rgb(240, 236, 34);
    text-align: center;
  }
  video,
  img {
    width: 100%;
  }
}
</style>
