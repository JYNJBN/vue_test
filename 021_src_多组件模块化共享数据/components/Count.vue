<template>
  <div class="Count">
    <h1>当前求和为{{ sumConfigure.sum }}</h1>
    <h1>名字：{{ sumConfigure.name }}，年龄{{ sumConfigure.age }}</h1>
    <h1>当前求放大十倍和为{{ bigSum }}</h1>
    <h1>List列表的长度为:{{ listConfigure.listArr.length }}</h1>
    <select v-model.number="n">
      <option value="1" selected>1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="sumAdd(n)">+</button>
    <button @click="sumReduce(n)">-</button>
    <button @click="ifSumAdd(n)">当前为奇数++</button>
    <button @click="waitAdd(n)">间隔加一</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Count',
  data() {
    return {
      n: 1,
    };
  },
  computed: {
    // //自定义
    // sum() {
    //   return this.$store.state.sum;
    // },
    // name() {
    //   return this.$store.state.name;
    // },
    // age() {
    //   return this.$store.state.age;
    // },
    // ...mapState({ age: 'age', sum: 'sum', name: 'name' }),
    ...mapState(['sumConfigure', 'listConfigure']),
    ...mapGetters('sumConfigure', ['bigSum']),
  },
  mounted() {
    console.log(this);
  },
  methods: {
    // sumAdd() {
    //   this.$store.commit('ADD', this.n);
    // },
    ...mapMutations('sumConfigure', { sumAdd: 'ADD', sumReduce: 'REDUCE' }),
    // sumReduce() {
    //   this.$store.commit('REDUCE', this.n);
    // },
    // waitAdd() {
    //   this.$store.dispatch('waitadd', this.n);
    // },
    // ifSumAdd() {
    //   console.log('a');
    //   this.$store.dispatch('ifsumadd', this.n);
    // },
    ...mapActions('sumConfigure', { waitAdd: 'waitadd', ifSumAdd: 'ifsumadd' }),
  },
};
</script>

<style lang="less">
button {
  margin: 10px;
}
</style>
