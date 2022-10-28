<template>
  <div class="list">
    <h1>List列表</h1>
    <h1>Conut组件求和为{{ sum }}</h1>
    <h1>列表一个名字：{{ firstName }}</h1>
    <input type="text" v-model="name" @keydown.enter="addObj" />
    <ul>
      <li v-for="obj in listArr">{{ obj.name }}</li>
    </ul>
    <button @click="addYeObj">添加一个姓叶的名字</button>
    <button @click="addRandomObj">添加随机名字的对象</button>
  </div>
</template>

<script>
import { nanoid } from 'nanoid';
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'List',
  computed: {
    listArr() {
      return this.$store.state.listConfigure.listArr;
    },
    sum() {
      return this.$store.state.listConfigure.sum;
    },
    firstName() {
      return this.$store.getters['listConfigure/firstName'];
    },
  },
  data() {
    return {
      name: '1',
    };
  },
  methods: {
    addObj() {
      const listObj = { id: nanoid(), name: this.name };
      this.$store.commit('listConfigure/ADD_OBJ', listObj);
    },
    addYeObj() {
      const listObj = { id: nanoid(), name: this.name };
      this.$store.dispatch('listConfigure/add_ye_obj', listObj);
    },
    addRandomObj() {
      this.$store.dispatch('listConfigure/addRandomObj');
    },
  },
};
</script>

<style></style>
