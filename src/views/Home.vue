<template>
  <div class="home">
    <AppSpacer :height="50" />
    <h1 class="title">Terminal RPG</h1>
    <AppSpacer :height="230" />
    <AppBlueButton>
      <router-link to="/battle">Battle</router-link>
    </AppBlueButton>
  </div>
</template>

<script>
import AppSpacer from '../components/AppSpacer.vue'
import AppBlueButton from '../components/AppBlueButton.vue'

export default {
  name: 'Home',
  components: {
    AppSpacer,
    AppBlueButton,
  },
}
</script>
<style lang="scss">
.home {
  width: 100%;
  min-height: 100vh;
  background-image: url('../assets/homepage-background.png');
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  .title {
    font-size: 38px;
  }
}
</style>
