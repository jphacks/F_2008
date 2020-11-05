<template>
  <div class="home">
    <AppSpacer :height="50" />
    <h1 class="title">Terminal RPG</h1>
    <AppSpacer :height="250" />
    <div class="appBtn">
      <router-link to="/battle">Battle</router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import AppSpacer from '../components/AppSpacer.vue'

export default {
  name: 'Home',
  components: {
    AppSpacer,
  },
}
</script>
<style>
.home {
  width: 100%;
  min-height: 100vh;
  background-image: url('../assets/homepage-background.png');
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.appBtn {
  width: fit-content;
  padding: 4px 8px;
  background: black;
  border-radius: 4px;
}
.appBtn > a {
  color: red;
  text-decoration: none;
  font-size: 28px;
}
</style>
