<script setup>
import Header from './components/Header.vue';
import Content from './components/Content.vue';
</script>
<template>
  <div>
    <t-layout>
      <t-header>
        <Header />
      </t-header>
      <t-layout>
        <Content />
      </t-layout>
    </t-layout>
  </div>
</template>

<style lang="less">
.left-operation-container,
.operation-container {
  .t-button + .t-button {
    margin-left: var(--td-comp-margin-s);
  }
}
.t-menu__popup {
  z-index: 1000;
}
</style>
