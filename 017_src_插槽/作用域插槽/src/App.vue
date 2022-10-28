<template>
  <div class="all">
    <Category title="商品">
      <template v-slot="{ goods }">
        <ul>
          <li v-for="(item, index) in goods" :key="index">{{ item }}</li>
        </ul>
      </template>
    </Category>
  </div>
</template>

<script>
//
//
import Category from './components/Category.vue';
export default {
  name: 'App',
  components: {
    Category,
  },
};
</script>

<style>
.all {
  display: flex;
  justify-content: space-around;
}
</style>
