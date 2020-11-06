<template>
  <div class="appBtn__blue">
    <slot />
  </div>
</template>
<style lang="scss">
.appBtn__blue {
  outline: 2px solid #151514;
  border: 1px solid #b1b1af;
  outline: 2px solid #1200f4;
  background: #adadad;
  // border: 2px solid #cbcbcb;
  border-color: #cbcbcb #4e474e #4e474e #cbcbcb;
  border-style: solid;
  border-width: 2px;
  padding: 2px 6px;
  * {
    font-size: 22px;
  }
  a {
    text-decoration: none;
  }
}
</style>
