<template>
  <div class="Count">
    <h1>当前求和为{{ $store.state.sum }}</h1>
    <h1>当前求放大十倍和为{{ $store.getters.bigSum }}</h1>
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
      n: 1,
    };
  },
  mounted() {
    console.log(this);
  },
  methods: {
    sumAdd() {
      this.$store.commit('ADD', this.n);
    },

    sumReduce() {
      this.$store.commit('REDUCE', this.n);
    },
    waitAdd() {
      this.$store.dispatch('waitadd', this.n);
    },
    ifSumAdd() {
      console.log('a');
      this.$store.dispatch('ifsumadd', this.n);
    },
  },
};
</script>

<style lang="less">
button {
  margin: 10px;
}
</style>
