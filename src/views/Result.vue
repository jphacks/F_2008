<template>
  <TheResult />
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
</style>
