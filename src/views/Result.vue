<template>
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
}
</script>
<style>
.Result {
  width: 100%;
  min-height: 100vh;
  background: #181a1b;
  display: flex;
  justify-content: center;
}
</style>
