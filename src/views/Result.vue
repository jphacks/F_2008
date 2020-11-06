<template>
  <h1>Result</h1>
  <TheResult />
</template>

<script>
import TheResult from '../components/TheResult.vue'
export default {
  name: 'Result',
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
<style></style>
