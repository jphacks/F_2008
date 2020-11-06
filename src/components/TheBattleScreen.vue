<template>
  <div class="battle-screen">
    <AppSpacer :height="170" />
    <div class="character-fields-contaier">
      <div class="hero-fields">
        <div class="root">
          <AppCharacterField>
            <img
              v-show="positionCenter"
              :class="{ characterImage: true, shivering: isMyShiverActivated }"
              src="../assets/hero.png"
              alt="Hero Image"
            />

            <div v-for="weapon in weapons" :key="weapon">
              <img
                v-if="checkDirHasWeapon('~', weapon.name)"
                :src="weapon.src"
                :class="{ characterImage: true }"
                alt="center weapons"
              />
            </div>
          </AppCharacterField>
        </div>
        <div class="first-class">
          <AppCharacterField>
            <img
              v-show="positionLeft"
              :class="{ characterImage: true, shivering: isMyShiverActivated }"
              src="../assets/hero.png"
              alt="Hero Image"
            />
            <div v-for="weapon in weapons" :key="weapon">
              <img
                v-if="checkDirHasWeapon('left', weapon.name)"
                :src="weapon.src"
                :class="{ characterImage: true }"
                alt="left weapons"
              />
            </div>
          </AppCharacterField>
          <!-- <AppSpacer :height="20" /> -->
          <AppCharacterField>
            <img
              v-show="positionRight"
              :class="{ characterImage: true, shivering: isMyShiverActivated }"
              src="../assets/hero.png"
              alt="Hero Image"
            />
            <div v-for="weapon in weapons" :key="weapon">
              <img
                v-if="checkDirHasWeapon('right', weapon.name)"
                :src="weapon.src"
                :class="{ characterImage: true }"
                alt="right weapons"
              />
            </div>
          </AppCharacterField>
        </div>
      </div>
      <!-- Note: 敵キャラ -->
      <img
        :class="{
          characterImage: true,
          enemyImage: true,
          shivering: isEnemyShiverActivated,
        }"
        src="../assets/B-Ghost.png"
        alt="Ghost Image"
      />
    </div>
    <!-- Note: バトルの情報 -->
    <AppSpacer :height="30" />
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
      isMyShiverActivated: false,

      weapons: [
        { name: 'gun', src: require('@/assets/gun.png') },
        { name: 'sword', src: require('@/assets/sword.png') },
        { name: 'spear', src: require('@/assets/spear.png') },
        { name: 'stick', src: require('@/assets/stick.png') },
        { name: 'rock', src: require('@/assets/rock.png') },
        { name: 'hunmmer', src: require('@/assets/hunmmer.png') },
      ],
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
    //ディレクトリに武器があるかをチェックする
    checkDirHasWeapon: function () {
      return function (dir, weapon) {
        if (weapon in this.$parent.armsPosition[dir]) {
          return true
        }
        return false
      }
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
  position: relative;
  .character-fields-contaier {
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    .characterImage {
      width: 50px;
    }
    .enemyImage {
      width: 80px;
    }
    .shivering {
      animation: Shivering 0.1s infinite;
    }
    .hero-fields {
      display: flex;
      flex-direction: row;
      align-items: center;
    }
  }
}
</style>
