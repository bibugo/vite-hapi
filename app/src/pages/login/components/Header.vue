<template>
  <header class="login-header">
    <img src="@/assets/images/logo-full.svg?url" class="logo" />
    <div class="operations-container"></div>
  </header>
</template>

<style lang="less" scoped>
.login-header {
  height: 32px;
  padding: 0 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  backdrop-filter: blur(5px);
  color: var(--td-text-color-primary);
  .logo {
    width: 188px;
    height: 16px;
  }
  .operations-container {
    display: flex;
    align-items: center;
  }
}
</style>
