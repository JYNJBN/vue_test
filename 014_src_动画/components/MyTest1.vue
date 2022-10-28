<template>
  <div>
    <transition name="move1" :appear="true">
      <h1 v-show="this.flag">天气真不错</h1>
    </transition>
    <button class="come" @click="change">点击显示和隐藏</button>
  </div>
</template>

<script>
export default {
  name: 'MyTest1',
  data() {
    return {
      flag: true,
    };
  },
  methods: {
    change() {
      this.flag = !this.flag;
    },
  },
};
</script>

<style>
.move1-enter,
.move1-leave-to {
  transform: translateX(-100%);
}
.move1-enter-active,
.move1-leave-active {
  transition: 1s;
}
.move1-enter-to,
.move1-leave {
  transform: translateX(0);
}
</style>
