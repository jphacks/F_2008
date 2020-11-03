<template>
  <div class="battle">
    <!-- Note: GUI バトル画面 -->
    <TheBattleScreen :position="position" />
    <!-- Note: バトルスクリーンの下にターミナルを表示する -->
    <Terminal :position="position" />
  </div>
</template>

<script>
// Components
import Terminal from "../components/Terminal.vue";
import TheBattleScreen from "../components/TheBattleScreen.vue";

export default {
  components: {
    Terminal,
    TheBattleScreen
  },
  data() {
    return {
      position: "CENTER",
    };
  },
};
</script>
<style>
.battle {
  width: 100%;
  min-height: 100vh;
  background: #181a1b;
  text-align: center;
}
.battle > h1 {
  color: black;
}
</style>
