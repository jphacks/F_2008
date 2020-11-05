<template>
  <div class="battle">
    <!-- Note: GUI バトル画面 -->
    <TheBattleScreen :myHp="myHp" :enemyHp="num" :currentDir="currentDir" />
    <AppSpacer :height="36" />
    <!-- Note: バトルスクリーンの下にターミナルを表示する -->
    <TheTerminal />
  </div>
</template>

<script>
// Components
import TheTerminal from '../components/TheTerminal.vue'
import TheBattleScreen from '../components/TheBattleScreen.vue'
import AppSpacer from '../components/AppSpacer.vue'

export default {
  components: {
    TheTerminal,
    TheBattleScreen,
    AppSpacer,
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
      arms: {
        sword: 100,
        gun: 1000,
        rock: 200,
        stick: 10,
        spear: 250,
        hummer: 300,
      },
      armsKind: ['sword', 'gun', 'rock', 'stick', 'spear', 'hummer'],
      armsPosition: {
        '~': { sword: 100, gun: 1000 },
        left: { rock: 200, stick: 10 },
        right: { spear: 250, hummer: 300 },
      },
      parentDir: { '~': 'home', left: '~', right: '~' },
      linkedDirs: {
        '~': ['left', '~', 'right'],
        left: ['~'],
        right: ['~'],
        home: ['~'],
      },
      nextDirs: { '~': ['left', 'right'], home: ['~'], right: [], left: [] },
    }
  },
}
</script>
<style>
.battle {
  width: 100%;
  min-height: 100vh;
  background: #181a1b;
}
</style>
