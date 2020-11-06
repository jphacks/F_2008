<template>
  <div class="home">
    <AppSpacer :height="230" />
    <div class="sample__container">
      <img src="../assets/app_logo.png" alt="" />
      <p>@2020</p>
      <p>yasukawa kouno</p>
    </div>
    <AppBlueButton>
      <router-link to="/battle">START GAME</router-link>
    </AppBlueButton>
    <AppSpacer :height="30" />
    <AppButton>
      <a>OPTIONS</a>
    </AppButton>
  </div>
</template>

<script>
import AppSpacer from '../components/AppSpacer.vue'
import AppBlueButton from '../components/AppBlueButton.vue'
import AppButton from '../components/AppButton.vue'

export default {
  name: 'Home',
  components: {
    AppSpacer,
    AppBlueButton,
    AppButton,
  },
}
</script>
<style lang="scss">
.home {
  width: 100%;
  min-height: 100vh;
  background: #181a1b;
  // background-image: url('../assets/homepage-background.png');
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  .title {
    font-size: 38px;
  }
}
.sample__container {
  * {
    color: white;
    font-size: 26px;
  }
  img {
    height: 40px;
  }
}
</style>
