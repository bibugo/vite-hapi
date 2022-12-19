<script setup>
import { ref, onMounted } from 'vue';
import { getDashboard } from '@/api';

const dashboard = ref();

onMounted(async () => {
  dashboard.value = await getDashboard();
});
</script>

<template src="./dashboard.html"></template>

<style scoped lang="less" src="./dashboard.less" />
