<template>
  <div>
    <transition name="move" :appear="true">
      <h1 v-show="this.flag">天气真不错</h1>
    </transition>
    <button class="come" @click="change">点击显示和隐藏</button>
  </div>
</template>

<script>
export default {
  name: 'MyTest',
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
@keyframes move {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
}
.come {
  animation: move 1s;
}
.move-enter-active {
  animation: move 1s;
}
.move-leave-active {
  animation: move 1s reverse;
}
</style>
