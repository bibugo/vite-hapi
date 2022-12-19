<script setup>
import LoginForm from './components/LoginForm.vue';
import LoginHeader from './components/Header.vue';
</script>

<template>
  <div class="login-wrapper">
    <login-header />
    <div class="login-container">
      <login-form />
    </div>
    <footer class="copyright" data-v-247e7dd8="">Copyright @ 2021-2022 Tencent. All Rights Reserved</footer>
  </div>
</template>

<style lang="less" scoped>
.login-wrapper {
  background-color: white;
  background-image: url('@/assets/images/login-bg-white.png');
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-size: cover;
  position: relative;
}
.login-container {
  position: absolute;
  top: 33%;
  left: 5%;
  line-height: 22px;
}
.copyright {
  font-size: 14px;
  position: absolute;
  left: 5%;
  bottom: 64px;
  color: var(--td-text-color-secondary);
}
@media screen and (max-height: 600px) {
  .copyright {
    display: none;
  }
}
</style>
