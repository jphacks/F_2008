<template>
  <div class="appBtn">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.appBtn {
  padding: 2px 6px;
  background: #adadad;
  border-color: #cbcbcb #4e474e #4e474e #cbcbcb;
  border-style: solid;
  border-width: 5px;
  * {
    font-size: 22px;
  }
  a {
    text-decoration: none;
  }
}
</style>
