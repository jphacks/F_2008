<template>
  <div class="battle-info">
    <!-- Todo: ヒーローの HP を表示する -->
    <div class="hp-container">
      <h1 class="label">HP:</h1>
      <div class="hp-gauge">
        <AppSpacer :height="4" />
        <span class="hp__bar">
          <span class="hp__content hp__my" :style="myHpPercentage"></span>
        </span>
        <p class="hp__fraction">{{ myHp }}/1000</p>
      </div>
    </div>
    <!-- Note: 敵の HP -->
    <div class="hp-container">
      <h1 class="label">Enemy HP:</h1>
      <div class="hp-gauge">
        <AppSpacer :height="2" />
        <span class="hp__bar">
          <span class="hp__content hp__enemy" :style="enemyHpPercentage"></span>
        </span>
        <p class="hp__fraction">{{ enemyHp }}/10000</p>
      </div>
    </div>
  </div>
</template>
<script>
// Compornents
import AppSpacer from '../components/AppSpacer'

export default {
  components: {
    AppSpacer,
  },
  props: {
    myHp: {
      type: Number,
    },
    enemyHp: {
      type: Number,
    },
  },
  computed: {
    myHpPercentage() {
      return {
        '--myHpWidth': String(Math.floor(this.myHp / 10)) + '%',
      }
    },
    enemyHpPercentage() {
      return {
        '--enemyHpWidth': String(Math.floor(this.enemyHp / 100)) + '%',
      }
    },
  },
}
</script>

<style lang="scss">
.battle-info {
  width: 100%;
  display: flex;
  position: absolute;
  bottom: 20;
  flex-direction: row;
  justify-content: space-around;
  * {
    color: rgb(202, 198, 190);
  }
  .hp-container {
    display: inline-block;
    display: flex;
    flex-direction: row;
    padding: 6px 20px;
    background: #191970;
    border: 2px solid rgb(202, 198, 190);
    border-radius: 4px;
    .label {
      display: inline-block;
      margin-right: 4px;
      font-size: 24px;
      font-family: 'M PLUS Rounded 1c';
    }
    .hp-gauge {
      text-align: right;
      .hp__fraction {
        font-family: 'M PLUS Rounded 1c';
        font-size:20px;
        }
      .hp__bar {
        display: inline-block;
        width: 100px;
        height: 6px;
        background: #353b48;
        border: 1px solid rgb(202, 198, 190);
        border-radius: 3px;
        box-shadow: 0 0 10px #80ff00;
        overflow: hidden;
        .hp__content {
          height: 6px;
          float: left;
          background: #40ff00;
        }
        .hp__enemy {
          --enemyHpWidth: 100%;
          width: var(--enemyHpWidth);
          transition-duration: 2s;
        }
        .hp__my {
          --myHpWidth: 100%;
          width: var(--myHpWidth);
          transition-duration: 2s;
        }
      }
    }
  }
}
</style>
