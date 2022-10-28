<template>
  <div class="Count">
    <h1>当前求和为{{ sum }}</h1>
    <select v-model.number="n">
      <option value="1" selected>1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="sumAdd">+</button>
    <button @click="sumReduce">-</button>
    <button @click="ifSumAdd">当前为奇数++</button>
    <button @click="waitAdd">间隔加一</button>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Count',
  data() {
    return {
      sum: 0,
      n: 1,
    };
  },
  methods: {
    sumAdd() {
      this.sum = this.sum + this.n;
    },
    sumReduce() {
      this.sum = this.sum - this.n;
    },
    waitAdd() {
      setTimeout(() => {
        this.sum = this.sum + this.n;
      }, 1000);
    },
    ifSumAdd() {
      if (this.sum % 3 === 0 && this.sum != 0) {
        this.sum = this.sum + parseInt(this.n);
      }
    },
  },
};
</script>

<style lang="less">
button {
  margin: 10px;
}
</style>
