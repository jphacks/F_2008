<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <h1>Hellow World!!</h1>
  <p>by yasunarle</p>
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <Terminal/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Terminal from './components/Terminal.vue'

export default {
  name: "App",
  components: {
     HelloWorld,
     Terminal
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
