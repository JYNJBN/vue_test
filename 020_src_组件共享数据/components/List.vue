<template>
  <div class="list">
    <h1>List列表</h1>
    <h1>Conut组件求和为{{ sum }}</h1>
    <input type="text" v-model="name" @keydown.enter="addObj" />
    <ul>
      <li v-for="obj in listArr">{{ obj.name }}</li>
    </ul>
  </div>
</template>

<script>
import { nanoid } from 'nanoid';
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'List',
  computed: {
    listArr() {
      return this.$store.state.listArr;
    },
    sum() {
      return this.$store.state.sum;
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
      this.$store.commit('ADD_OBJ', listObj);
    },
  },
};
</script>

<style></style>
