<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input
        type="text"
        placeholder="enter the name you search"
        v-model="searchName"
      />&nbsp;
      <button @click="getUser">Search</button>
    </div>
  </section>
</template>

<script>
import axios from 'axios';
export default {
  name: 'MySearch',
  data() {
    return {
      searchName: '',
    };
  },
  methods: {
    getUser() {
      this.$bus.$emit('updataListData', {
        isFirst: false,
        isLoading: true,
        users: [],
      });
      axios
        .get(`https://api.github.com/search/users?q=${this.searchName}`)
        .then(
          (rep) => {
            console.log(rep.data.items);
            this.$bus.$emit('updataListData', {
              isLoading: false,
              users: rep.data.items,
            });
          },
          (err) => {
            console.log(err.message);
            this.$bus.$emit('updataListData', {
              isLoading: false,
              errorMsg: err.message,
            });
          }
        );
    },
  },
};
</script>

<style></style>
