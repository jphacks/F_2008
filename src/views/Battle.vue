<template>
  <div class="battle">
    <!-- Note: GUI バトル画面 -->
    <div class="leftScreen">
    <TheBattleScreen :myHp="myHp" :enemyHp="num" :currentDir="currentDir" class="locateTheBattleScreen"/>
    <AppSpacer :height="36" />
    <!-- Note: バトルスクリーンの下にターミナルを表示する -->
<<<<<<< HEAD
    <Terminal  class="locateTerminal"/>
    </div>

    <div class="rightScreen">
      <TheBattleHelp class="locateTheBattleHelp" />
    </div>
=======
    <TheTerminal />
>>>>>>> 6809011371bc6ee715e38b0fc6a5b383141241a4
  </div>
</template>

<script>
// Components
import TheTerminal from '../components/TheTerminal.vue'
import TheBattleScreen from '../components/TheBattleScreen.vue'
import TheBattleHelp from '../components/TheBattleHelp.vue'
import AppSpacer from '../components/AppSpacer.vue'

export default {
  components: {
    TheTerminal,
    TheBattleScreen,
    TheBattleHelp,
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
}
</style>