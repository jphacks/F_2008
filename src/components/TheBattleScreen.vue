<template>
  <div class="battle-screen">
    <AppSpacer :height="140" />
    <div class="character-fields-contaier">
      <div class="hero-fields">
        <AppCharacterField>
          <img
            v-show="positionLeft"
            class="character-image"
            src="../assets/hero.png"
            alt="Hero Image"
          />
        </AppCharacterField>
        <AppCharacterField>
          <img
            v-show="positionCenter"
            class="character-image"
            src="../assets/hero.png"
            alt="Hero Image"
          />
        </AppCharacterField>
        <AppCharacterField>
          <img
            v-show="positionRight"
            class="character-image"
            src="../assets/hero.png"
            alt="Hero Image"
          />
        </AppCharacterField>
      </div>
      <AppCharacterField>
        <img
          class="character-image"
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
}
</script>
<style lang="scss">
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
    .character-image {
      width: 50px;
    }
    .hero-fields {
      display: flex;
      flex-direction: column;
    }
  }
}
</style>
