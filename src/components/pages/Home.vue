<!-- @format -->

<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <h2>我是home的内容</h2>
    <div>
      <ul class="nav nav-tabs">
        <li>
          <router-link
            class="list-group-item"
            to="/home/news"
            active-class="active">
            News
          </router-link>
        </li>
        <li>
          <router-link
            class="list-group-item"
            to="/home/message"
            active-class="active">
            Message
          </router-link>
        </li>
      </ul>
      <!-- <Message></Message> -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Message from './Message.vue';
import News from './News.vue';

export default {
  name: 'Home',
  components: {
    Message,
    News,
  },
};
</script>

<style></style>
