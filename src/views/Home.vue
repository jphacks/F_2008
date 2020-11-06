<template>
  <div class="home">
    <AppSpacer :height="150" />
    <!-- Note: アプリケーションのロゴ -->
    <div class="appLogo">
      <img class="appLogo__logo" src="../assets/app_logo_1.png" alt="" />
      <img class="appLogo__sword" src="../assets/sword.png" alt="" />
    </div>
    <AppSpacer :height="140" />
    <router-link to="/battle">START GAME</router-link>
    <AppSpacer :height="20" />
    <a href="">OPTIONS</a>
    <AppSpacer :height="70" />
    <!-- Note: Position を下の方で固定 -->
    <div class="copy-light-container">
      <span>@2020</span>
      <span>yasukawa kouno</span>
    </div>
  </div>
</template>

<script>
import AppSpacer from '../components/AppSpacer.vue'
// import AppBlueButton from '../components/AppBlueButton.vue'
// import AppButton from '../components/AppButton.vue'

export default {
  name: 'Home',
  components: {
    AppSpacer,
    // AppBlueButton,
    // AppButton,
  },
}
</script>
<style lang="scss">
.home {
  width: 100%;
  min-height: 100vh;
  background: #181a1b;
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  .appLogo {
    img {
      height: 58px;
    }
    .appLogo__logo {
      margin-right: 16px;
    }
  }
  a {
    color: white;
    font-size: 26px;
  }
  a:hover {
    color: rgb(207, 112, 255);
  }
  .copy-light-container {
    position: absolute;
    bottom: 100px;
    right: 100px;
    span {
      margin-right: 20px;
      color: rgb(207, 112, 255);
      font-size: 22px;
    }
  }
}
</style>
