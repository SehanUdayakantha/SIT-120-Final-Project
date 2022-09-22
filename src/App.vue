<template>
  <!--Adds a transition when ever a page is routed-->
  <transition name="fade">
  <router-view></router-view>
  </transition>
</template>


<script>
export default {
  name: 'app',
  components: {
},
}
</script>

<style>
.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body, html, .app{
  background-color: blue;
}
.fade-enter-active,
.fade-leave-active{
  transition: opacity 1s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;;
}
.fade-enter-to,
.fade-leave{
  opacity: 0;;
}
</style>
