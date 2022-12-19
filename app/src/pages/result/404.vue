<script setup>
import { useRouter } from 'vue-router';
import result from '@/components/Result.vue';

const router = useRouter();
</script>

<template>
  <result title="404 Not Found" tip="抱歉，您访问的页面不存在" type="404">
    <t-button @click="() => router.push('/')">返回首页</t-button>
  </result>
</template>
