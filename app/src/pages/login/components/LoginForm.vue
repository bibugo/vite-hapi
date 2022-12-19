<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { MessagePlugin } from 'tdesign-vue-next';
import { useUserStore } from '@/store';

const userStore = useUserStore();
const router = useRouter();

const FORM_RULES = {
  username: [{ required: true, message: '账号必填', type: 'error' }],
  password: [{ required: true, message: '密码必填', type: 'error' }],
};

const INITIAL_DATA = {
  username: 'admin',
  password: '1234',
};
const formData = ref({ ...INITIAL_DATA });
const showPsw = ref(false);
const isLoading = ref(false);

async function onSubmit({ validateResult }) {
  if (validateResult === true) {
    isLoading.value = true;
    userStore
      .login(formData.value)
      .then(() => {
        MessagePlugin.success('登录成功');
        const { redirect } = router.currentRoute.value.query;
        router.replace(redirect || '/');
      })
      .finally(() => {
        isLoading.value = false;
      });
  }
}
</script>

<template>
  <t-form
    ref="form"
    class="login-item-container"
    :data="formData"
    :rules="FORM_RULES"
    label-width="0"
    @submit="onSubmit"
  >
    <t-form-item name="username">
      <t-input v-model="formData.username" size="large" placeholder="请输入账号">
        <template #prefix-icon>
          <t-icon name="user" />
        </template>
      </t-input>
    </t-form-item>
    <t-form-item name="password">
      <t-input
        v-model="formData.password"
        size="large"
        :type="showPsw ? 'text' : 'password'"
        clearable
        placeholder="请输入登录密码"
      >
        <template #prefix-icon>
          <t-icon name="lock-on" />
        </template>
        <template #suffix-icon>
          <t-icon v-if="showPsw" name="browse" @click="showPsw = !showPsw" />
          <t-icon v-else name="browse-off" @click="showPsw = !showPsw" />
        </template>
      </t-input>
    </t-form-item>

    <div class="check-container remember-pwd">
      <t-checkbox>记住账号</t-checkbox>
      <span class="tip">忘记账号？</span>
    </div>
    <t-form-item class="btn-container">
      <t-button :loading="isLoading" block size="large" type="submit"> 登录 </t-button>
    </t-form-item>
  </t-form>
</template>

<style lang="less" scoped>
.login-item-container {
  width: 400px;
  .check-container {
    display: flex;
    align-items: center;
    font-size: 14px;
    color: var(--td-text-color-secondary);
    &.remember-pwd {
      margin-bottom: 16px;
      justify-content: space-between;
    }
    :deep(.t-checkbox__label) {
      color: var(--td-text-color-secondary);
    }
    .tip {
      float: right;
      color: var(--td-brand-color);
      &:hover {
        cursor: pointer;
      }
    }
  }
  .btn-container {
    padding-top: 32px;
  }
}
</style>
