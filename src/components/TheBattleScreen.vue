<template>
  <div class="battle-screen">
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
      <img class="ghost-image" src="../assets/B-Ghost.png" alt="Ghost Image" />
    </div>
  </div>
</template>
<script>
export default {
  props: {},
  computed: {
    positionLeft() {
      return this.$parent.currentDir === 'left'
    },
    positionCenter() {
      return this.$parent.currentDir === '~'
    },
    positionRight() {
      return this.$parent.currentDir === 'right'
    },
  },
}
</script>
<style>
.battle-screen {
  max-width: 800px;
  min-height: 400px;
  margin: auto;
  position: relative;
  background-image: url('../assets/backgroud_glass.png');
  background-size: cover;
}
.battle-screen img {
  width: 50px;
}
.battle-screen .field {
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
</style>
