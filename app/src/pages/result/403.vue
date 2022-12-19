<script setup>
import { useRouter } from 'vue-router';
import result from '@/components/Result.vue';

const router = useRouter();
</script>

<template>
  <result title="403 Forbidden" tip="抱歉，您无权限访问此页面" type="403">
    <t-button @click="() => router.push('/')">返回首页</t-button>
  </result>
</template>
