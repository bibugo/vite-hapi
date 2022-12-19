<script setup>
import { useRouter } from 'vue-router';
import result from '@/components/Result.vue';

const router = useRouter();
</script>

<template>
  <result title="网络异常" tip="网络异常，请稍后再试" type="wifi">
    <div>
      <t-button @click="() => router.push('/')">重新加载</t-button>
      <t-button theme="default" @click="() => router.push('/')">返回首页</t-button>
    </div>
  </result>
</template>

<style lang="less" scoped>
.t-button + .t-button {
  margin-left: var(--td-comp-margin-s);
}
</style>
