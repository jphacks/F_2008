<template>
  <div class="battle">
    <!-- Note: GUI バトル画面 -->
    <div class="leftScreen">
      <TheBattleScreen :myHp="myHp" :enemyHp="num" :currentDir="currentDir" class="locBattleScreen"/>
      <AppSpacer :height="36" />
      <!-- Note: バトルスクリーンの下にターミナルを表示する -->
      <TheTerminal />
    </div>

    <div class="rightScreen">
      <TheBattleHelp class="locTheBattleHelp" />
    </div>
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
.battle:after {
  content: "";
  display: block;
  clear:both;
}
.rightScreen {
  width: 30%;
  float:left;
}
.leftScreen {
  width: 70%;
  float:left;
}
</style>