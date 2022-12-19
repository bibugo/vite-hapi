<template>
  <t-layout class="main-layout">
    <t-content class="main-content-layout">
      <router-view />
    </t-content>
  </t-layout>
</template>
<style lang="less" scoped>
.main {
  &-content-layout {
    padding: var(--td-comp-paddingTB-xl) var(--td-comp-paddingLR-xl);
  }

  &-layout {
    height: calc(100vh - var(--td-comp-size-xxxl));
    overflow-y: scroll;

    &::-webkit-scrollbar {
      width: 8px;
      background: transparent;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 6px;
      border: 2px solid transparent;
      background-clip: content-box;
      background-color: var(--td-scrollbar-color);
    }
  }
}
</style>
