<template>
  <div>
    <ul>
      <li v-for="message in messages">
        <!-- <router-link
          :to="`/home/message/detial/${message.id}/${message.title}`">
          {{ message.title }}
        </router-link> -->
        &nbsp;&nbsp;
        <router-link
          :to="{
            name: 'detial',
            //path: '/home/message/detial',
            params: {
              id: message.id,
              title: message.title,
            },
          }">
          {{ message.title }}
        </router-link>
        <button @click="btPush(message)">push</button>
        <button @click="btReplace(message)">replace</button>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
import Detial from './Detial';
export default {
  name: 'Message',
  data() {
    return {
      messages: [
        { id: 100, title: 'message001' },
        { id: 101, title: 'message002' },
        { id: 102, title: 'message003' },
      ],
    };
  },
  components: {
    Detial,
  },
  methods: {
    btPush(message) {
      // console.log(this.$router);
      this.$router.push({
        name: 'detial',
        params: {
          id: message.id,
          title: message.title,
        },
      });
    },
    btReplace(message) {
      this.$router.replace({
        name: 'detial',
        params: {
          id: message.id,
          title: message.title,
        },
      });
    },
  },
};
</script>

<style></style>
