<template>
  <div>
    <Banner></Banner>
    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
          <router-link class="list-group-item" active-class="active" to="/about"
            >About</router-link
          >
          <router-link class="list-group-item" active-class="active" to="/home"
            >Home</router-link
          >
        </div>
      </div>
      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import About from './components/pages/About.vue';
import Home from './components/pages/Home.vue';
import Banner from './components/view/Banner.vue';

export default {
  name: 'App',
  components: { About, Home, Banner },
};
</script>

<style></style>
