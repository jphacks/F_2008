<template>
  <div class="battle-screen">
    <AppSpacer :height="140" />
    <div class="character-fields-contaier">
      <div class="hero-fields">
        <AppCharacterField>
          <img
            v-show="positionLeft"
            :class="{ characterImage: true, shivering: isMyShiverActivated }"
            src="../assets/hero.png"
            alt="Hero Image"
          />
        </AppCharacterField>
        <AppCharacterField>
          <img
            v-show="positionCenter"
            :class="{ characterImage: true, shivering: isMyShiverActivated }"
            src="../assets/hero.png"
            alt="Hero Image"
          />
        </AppCharacterField>
        <AppCharacterField>
          <img
            v-show="positionRight"
            :class="{ characterImage: true, shivering: isMyShiverActivated }"
            src="../assets/hero.png"
            alt="Hero Image"
          />
        </AppCharacterField>
      </div>
      <!-- Note: 敵キャラ -->
      <AppCharacterField>
        <img
          :class="{ characterImage: true, shivering: isEnemyShiverActivated }"
          src="../assets/B-Ghost.png"
          alt="Ghost Image"
        />
      </AppCharacterField>
    </div>
    <!-- Note: バトルの情報 -->
    <TheBattleInfo :enemyHp="enemyHp" :myHp="myHp" />
  </div>
</template>
<script>
// Componetns
import AppSpacer from '../components/AppSpacer.vue'
import AppCharacterField from '../components/AppCharacterField.vue'
import TheBattleInfo from '../components/TheBattleInfo.vue'
export default {
  components: {
    AppSpacer,
    AppCharacterField,
    TheBattleInfo,
  },
  props: {
    enemyHp: {
      type: Number,
    },
    myHp: {
      type: Number,
    },
    currentDir: {
      type: String,
    },
  },
  data() {
    return {
      isEnemyShiverActivated: false,
    }
  },
  computed: {
    positionLeft() {
      return this.currentDir === 'left'
    },
    positionCenter() {
      return this.currentDir === '~'
    },
    positionRight() {
      return this.currentDir === 'right'
    },
  },
  watch: {
    myHp() { 
      // Note: ダメージエフェクト
      this.isMyShiverActivated = true
      setTimeout(() => {
        this.isMyShiverActivated = false
      }, 360)
    },
    enemyHp() {
      // Note: ダメージエフェクト
      this.isEnemyShiverActivated = true
      setTimeout(() => {
        this.isEnemyShiverActivated = false
      }, 360)
    },
  },
}
</script>
<style lang="scss">
@keyframes Shivering {
  0% {
    transform: translate(0px, 0px) rotateZ(0deg);
  }
  25% {
    transform: translate(2px, 2px) rotateZ(1deg);
  }
  50% {
    transform: translate(0px, 2px) rotateZ(0deg);
  }
  75% {
    transform: translate(2px, 0px) rotateZ(-1deg);
  }
  100% {
    transform: translate(0px, 0px) rotateZ(0deg);
  }
}
.battle-screen {
  max-width: 800px;
  height: 400px;
  margin: auto;
  background-image: url('../assets/backgroud_glass.png');
  background-size: cover;
  .character-fields-contaier {
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    // Testing:
    border: 1px solid black;
    .characterImage {
      width: 50px;
    }
    .shivering {
      animation: Shivering 0.1s infinite;
    }
    .hero-fields {
      display: flex;
      flex-direction: column;
    }
  }
}
</style>
