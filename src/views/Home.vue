<template>
  <div class="home">
    <h1>Home 画面</h1>
    <div>
      <router-link to="/battle">Battle</router-link>
    </div>
    <div>
      <router-link to="/about">About Page へ</router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {
    // HelloWorld
  },
};
</script>
