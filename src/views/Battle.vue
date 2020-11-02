<template>
  <div class="battle-page">
    <h1>Battle Page</h1>
    <Terminal />
  </div>
</template>

<script>
import Terminal from "../components/Terminal.vue";

export default {
  components: {
    Terminal,
  },
  data() {
    return {
      position: "center",
    };
  },
  methods: {},
};
</script>
