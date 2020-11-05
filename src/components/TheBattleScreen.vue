<template>
  <div class="battle-screen">
    <div class="battle-screen__content">
      <div class="hero-fields">
        <div class="left field">
          <img
            v-show="positionLeft"
            class="hero-image"
            src="../assets/hero.png"
            alt="Hero Image"
          />
        </div>
        <div class="center field">
          <img
            v-show="positionCenter"
            class="hero-image"
            src="../assets/hero.png"
            alt="Hero Image"
          />
        </div>
        <div class="right field">
          <img
            v-show="positionRight"
            class="hero-image"
            src="../assets/hero.png"
            alt="Hero Image"
          />
        </div>
      </div>
      <div class="enemy-field field">
        <img
          class="ghost-image"
          src="../assets/B-Ghost.png"
          alt="Ghost Image"
        />
      </div>
      <div class="battle-screen__information">
        <div class="HP-enemy-field">
          <div class="HP-box">
            <h1 class="label">Enemy HP:</h1>
            <span class="bar">
              <span class="enemy" :style="enemyHpPer"></span>
            </span>
            <p>{{ enemyHp }}/10000</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
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
    enemyHpPer() {
      return {
        '--width': String(Math.floor(this.enemyHp / 100)) + '%',
      }
    },
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
  min-height: 400px;
  margin: auto;
  position: relative;
  background-image: url('../assets/backgroud_glass.png');
  background-size: cover;
  img {
    width: 50px;
  }
  .battle-screen__content {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: fit-content;
    border: 1px solid black;
    .field {
      width: 50px;
      height: 50px;
      border: 1px solid black;
      /* background: url("../assets/field-shadow.png"); */
      /* background-size: cover; */
    }
    .hero-fields {
      position: absolute;
      bottom: 100px;
      left: 200px;
      display: flex;
      flex-direction: column;
    }
    .enemy-field {
      position: absolute;
      bottom: 100px;
      right: 200px;
    }
    .battle-screen__information {
      // background: black;
      .HP-box {
        display: inline-block;
        .label,
        .bar {
          display: inline-block;
        }
        .bar {
          width: 100px;
          height: 6px;
          margin-bottom: 7px;
          background: #353b48;
          border: 1px solid rgba(0, 0, 0, 0.3);
          border-radius: 3px;
          box-shadow: 0 0 10px #2187e7b3;
          overflow: hidden;
          span {
            height: 6px;
            float: left;
            background: #2187e7;
          }
          .enemy {
            --width: 100%;
            width: var(--width);
            transition-duration: 2s;
          }
        }
      }
    }
  }
}
</style>
