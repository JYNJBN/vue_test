<template>
  <div>
    <transition-group
      name="animate__animated animate__bounce"
      :appear="true"
      enter-active-class="animate__heartBeat"
      enter-class="animate__zoomOutRight"
      leave-active-class="animate__flipOutX"
    >
      <h1 v-show="this.flag" key="1">天气真不错</h1>
      <!-- <h1 v-show="!this.flag" key="2">天气真不错</h1> -->
    </transition-group>
    <button class="come" @click="change">点击显示和隐藏</button>
  </div>
</template>

<script>
import 'animate.css';
export default {
  name: 'MyTest2',
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
