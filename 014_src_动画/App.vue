<template>
  <div id="root">
    <MyTest></MyTest>
    <MyTest1></MyTest1>
    <MyTest2></MyTest2>
  </div>
</template>

<script>
import MyTest from './components/MyTest';
import MyTest1 from './components/MyTest1.vue';
import MyTest2 from './components/MyTest2.vue';

export default {
  name: 'App',
  components: {
    MyTest,
    MyTest1,
    MyTest2,
  },
};
</script>

<style></style>
