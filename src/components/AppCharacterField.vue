<template>
  <div class="character-field">
    <slot />
  </div>
</template>
<style lang="scss">
.character-field {
  width: 50px;
  height: 50px;
  padding: 4px;
  background: url('../assets/filed.png');
  background-size: cover;
}
</style>
