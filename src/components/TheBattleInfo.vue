<template>
  <div class="battle-info">
    <!-- Todo: ヒーローの HP を表示する -->
    <div class="hp-container">
      <h1 class="label">HP:</h1>
      <span class="hp__bar">
        <span class="hp__content hp__my" :style="myHpPercentage"></span>
      </span>
      <p class="hp__fraction">{{ myHp }}/1000</p>
    </div>
    <!-- Note: 敵の HP -->
    <div class="hp-container">
      <h1 class="label">Enemy HP:</h1>
      <span class="hp__bar">
        <span class="hp__content hp__enemy" :style="enemyHpPercentage"></span>
      </span>
      <p class="hp__fraction">{{ enemyHp }}/10000</p>
    </div>
  </div>
</template>
<script>
export default {
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
  flex-direction: row;
  justify-content: space-around;
  .hp-container {
    display: inline-block;
    .label {
      display: inline-block;
      font-size: 24px;
    }
    .hp__bar {
      display: inline-block;
      width: 100px;
      height: 6px;
      margin-bottom: 7px;
      background: #353b48;
      border: 1px solid rgba(0, 0, 0, 0.3);
      border-radius: 3px;
      box-shadow: 0 0 10px #2187e7b3;
      overflow: hidden;
      .hp__content {
        height: 6px;
        float: left;
        background: #2187e7;
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
    .hp__fraction {
      color: rgb(202, 198, 190);
    }
  }
}
</style>
