<script setup>
import { ref } from 'vue';
import { useUserStore } from '@/store';
import LogoFull from '@/assets/images/logo-full.svg';
import Notice from './Notice.vue';
import Search from './Search.vue';

const userStore = useUserStore();

const menuValue = ref('1');

function handleNav() {}
function handleLogout() {
  userStore.logout();
}
function toggleSettingPanel() {}
</script>

<template>
  <div class="main-header-layout">
    <t-head-menu v-model="menuValue" expand-type="popup" class="main-header-menu-fixed">
      <template #logo>
        <span class="header-logo-container">
          <logo-full class="t-logo" />
        </span>
      </template>
      <t-menu-item value="1" to="/"> 首页 </t-menu-item>
      <t-menu-item value="2" to="/project"> 项目 </t-menu-item>
      <t-submenu value="3" title="结果页">
        <t-menu-item value="3-1" to="/result/success"> 成功页 </t-menu-item>
        <t-menu-item value="3-2" to="/result/fail"> 失败页 </t-menu-item>
        <t-menu-item value="3-3" to="/result/network-error"> 网络异常 </t-menu-item>
        <t-menu-item value="3-4" to="/result/403"> 无权限 </t-menu-item>
        <t-menu-item value="3-5" to="/result/404"> 访问页面不存在页 </t-menu-item>
        <t-menu-item value="3-6" to="/result/500"> 服务器出错页 </t-menu-item>
        <t-menu-item value="3-7" to="/result/browser-incompatible"> 浏览器不兼容页 </t-menu-item>
        <t-menu-item value="3-8" to="/result/maintenance"> 系统维护页 </t-menu-item>
      </t-submenu>
      <template #operations>
        <div class="operations-container">
          <search :iconic="true" />
          <notice />
          <t-dropdown :min-column-width="125" trigger="click">
            <template #dropdown>
              <t-dropdown-menu>
                <t-dropdown-item class="operations-dropdown-container-item" @click="handleNav('/user/index')">
                  <div class="dropdown-item-content"><t-icon name="user-circle" />个人中心</div>
                </t-dropdown-item>
                <t-dropdown-item class="operations-dropdown-container-item" @click="handleLogout">
                  <div class="dropdown-item-content"><t-icon name="poweroff" />退出登录</div>
                </t-dropdown-item>
              </t-dropdown-menu>
            </template>
            <t-button class="header-user-btn" variant="text">
              <template #icon>
                <t-icon name="user-circle" class="header-user-avatar" />
              </template>
              <div class="header-user-account">Tencent</div>
              <template #suffix>
                <t-icon name="chevron-down" />
              </template>
            </t-button>
          </t-dropdown>
          <t-tooltip placement="bottom" content="系统设置">
            <t-button shape="square" variant="text" @click="toggleSettingPanel">
              <t-icon name="setting" />
            </t-button>
          </t-tooltip>
        </div>
      </template>
    </t-head-menu>
  </div>
</template>

<style lang="less" scoped>
.main-header-menu-fixed {
  position: fixed;
  top: 0;
  z-index: 1001;
}

:deep(.t-head-menu__inner) {
  border-bottom: 1px solid var(--td-border-level-1-color);
}

.header-logo-container {
  width: 184px;
  height: 26px;
  display: flex;
  margin-left: 24px;
  color: var(--td-text-color-primary);
  .t-logo {
    width: 100%;
    height: 100%;
    &:hover {
      cursor: pointer;
    }
  }
  &:hover {
    cursor: pointer;
  }
}

.operations-container {
  display: flex;
  align-items: center;
  margin-right: 12px;
  :deep(.t-button) {
    margin: 0 8px;
    &.header-user-btn {
      margin: 0;
    }
  }
  :deep(.t-icon) {
    font-size: 20px;
  }
}

.operations-dropdown-container-item {
  font-weight: 600;
  .dropdown-item-content {
    display: flex;
    align-items: center;
  }
  .t-icon {
    margin-right: 8px;
  }
}
</style>
