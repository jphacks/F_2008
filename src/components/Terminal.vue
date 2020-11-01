


<template>
  <h1>Terminal</h1>
  <p>bossHP:{{num}}</p>
  <p>positionIndex:{{positionIndex}}</p>
  <p></p>
  <input type="text"
  v-model="textInput"
  v-on:keydown.enter.exact.prevent
  v-on:keyup.enter.exact="runCommand"
  >
  <button v-on:click="runCommand">runCommand</button>
  <p>{{textInput}}</p>
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: "terminal",

  data() {
      return {
          num: 10000,
          textInput: '',
          positionIndex: 1,
      };
  },
  components: {
    // HelloWorld
  },
  methods: {
    runCommand() {
      switch(this.textInput){
        case 'attack':
          this.attack();
          break
        default:
          alert(`command ${this.textInput} not found`)
          this.attack();
      }
    },
    attack() {
      this.num -= 200
    }
  }
};
</script>

