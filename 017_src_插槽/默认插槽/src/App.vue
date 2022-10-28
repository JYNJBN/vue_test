<template>
  <div class="all">
    <Category title="商品">
      <ul>
        <li v-for="(item, index) in goods" :key="index">{{ item }}</li>
      </ul>
    </Category>
    <Category title="电影" :items="movie">
      <video
        controls
        src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
      ></video>
    </Category>
    <Category title="美食" :items="foods">
      <img src="./assets/1.webp" alt="" />
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
  data() {
    return {
      goods: ['ipone6', 'ipone8', 'mac', 'air'],
      movie: ['三个沙煲', '一个鸡蛋', '生死时刻', '骂了顶大'],
      foods: ['煲仔饭', '牛肉炒饭', '桂林米粉', '五香肉丝'],
    };
  },
};
</script>

<style>
.all {
  display: flex;
  justify-content: space-around;
}
</style>
