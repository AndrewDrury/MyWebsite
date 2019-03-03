<template>
  <div id="app">

    <b-navbar toggleable="md" type="dark" variant="dark" class="d-fixed">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

      <b-navbar-brand href="/">Title</b-navbar-brand>

      <b-collapse is-nav id="nav_collapse">

        <!-- Right aligned nav items, collapsed on mobile -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="/page1" right>page1</b-nav-item>
          <b-nav-item to="/page2" right>page2</b-nav-item>
        </b-navbar-nav>

      </b-collapse>
    </b-navbar>

    <!-- Dynamic Content -->
    <transition name="fade">
      <router-view></router-view>
    </transition>

  </div>
</template>

<style lang="scss">
@import 'assets/main.scss';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

<script lang="ts">
import Vue from 'vue'
// @ is an alias to /src

export default Vue.extend({
  name: 'page1'
})
</script>
