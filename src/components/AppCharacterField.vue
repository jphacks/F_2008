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
  position: relative;
  .weapons-container {        
    display: flex;
    flex-direction: row;    
    position: absolute;
    bottom: -20px;
    left: -10px;
    .weapon-field {      
      width: fit-content;      
      background: rgba(202, 198, 190, 0.8);
      img {
        width: 20px;
        height: 20px;
      }
    }
  }
}
</style>
