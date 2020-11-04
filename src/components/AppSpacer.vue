<template>
  <div class="spacer" :style="styles"></div>
</template>
<script>
export default {
  props: {
    height: {
      type: String,
    },
  },
  computed: {
    styles() {
      return {
        '--height': this.height + 'px',
      }
    },
  },
}
</script>
<style>
.spacer {
  width: 100%;
  height: var(--height);
}
</style>
