<script setup>
import { useRouter } from 'vue-router';
import result from '@/components/Result.vue';

const router = useRouter();
</script>

<template>
  <result title="系统维护中" tip="系统维护中，请稍后再试" type="maintenance">
    <t-button @click="() => router.push('/')">返回首页</t-button>
  </result>
</template>
