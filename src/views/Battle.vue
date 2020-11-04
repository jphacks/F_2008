<template>
  <div class="battle">
    <!-- Note: GUI バトル画面 -->
    <TheBattleScreen />
    <!-- Note: バトルスクリーンの下にターミナルを表示する -->
    <Terminal />
  </div>
</template>

<script>
// Components
import Terminal from '../components/Terminal.vue'
import TheBattleScreen from '../components/TheBattleScreen.vue'

export default {
  components: {
    Terminal,
    TheBattleScreen,
  },
  data() {
    return {
      num: 10000,
      myHp: 1000,
      turnContinue: true,
      isEnemyTurn: false,
      currentDir: '~',
      currentPathForDisplay: {
        '~': '~',
        left: '~/left',
        right: '~/right',
        home: '/home',
      },
      parentDir: { '~': 'home', left: '~', right: '~' },
      linkedDirs: {
        '~': ['left', '~', 'right'],
        left: ['~'],
        right: ['~'],
        home: ['~'],
      },
      nextDirs: { '~': ['left', 'right'], home: ['~'] },
    }
  },
}
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
