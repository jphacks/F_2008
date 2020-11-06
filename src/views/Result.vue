<template>
  <h1 class="sample">
    {{ usedCommands }}
  </h1>
  <div class="Result">
    <TheResult />
  </div>
   
</template>

<script>
import TheResult from '../components/TheResult.vue'
export default {
  components: {
    TheResult,
  },
  data() {
    return {
      isWin: false,
      usedCommands: [],
    }
  },
  created() {    
    this.usedCommands = this.$route.query.usedCommandsArray
  }  
}
</script>
<style>
.sample{
  color: red;
}
</style>
