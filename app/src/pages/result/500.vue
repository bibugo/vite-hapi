<script setup>
import { useRouter } from 'vue-router';
import result from '@/components/Result.vue';

const router = useRouter();
</script>

<template>
  <result title="500 Internal Server Error" tip="抱歉，服务器出错啦" type="500">
    <t-button @click="() => router.push('/')">返回首页</t-button>
  </result>
</template>
