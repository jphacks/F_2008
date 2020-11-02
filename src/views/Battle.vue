<template>
  <div class="battle">
    <div class="sample-content">
      <button @click="moveLeft">Left</button>
      <button @click="moveCenter">Center</button>
      <button @click="moveRight">Right</button>
    </div>
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
        <img
          class="ghost-image"
          src="../assets/B-Ghost.png"
          alt="Ghost Image"
        />
      </div>
    </div>
    <!-- Note: バトルスクリーンの下にターミナルを表示する -->
    <Terminal />
  </div>
</template>

<script>
// Components
import Terminal from "../components/Terminal.vue";

export default {
  components: {
    Terminal,
  },
  data() {
    return {
      position: "CENTER",
    };
  },
  computed: {
    positionLeft() {
      return this.position === "LEFT";
    },
    positionCenter() {
      return this.position === "CENTER";
    },
    positionRight() {
      return this.position === "RIGHT";
    },
  },
  methods: {
    moveRight() {
      this.position = "RIGHT";
    },
    moveCenter() {
      this.position = "CENTER";
    },
    moveLeft() {
      this.position = "LEFT";
    },
  },
};
</script>
<style>
.battle {
  width: 100%;
  min-height: 100vh;
  background: #181a1b;
  text-align: center;
}
.battle > h1 {
  color: black;
}

.battle-screen {
  max-width: 800px;
  min-height: 400px;
  margin: auto;
  position: relative;
  background-image: url("../assets/backgroud_glass.png");
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
