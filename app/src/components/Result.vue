<script setup>
import { computed } from 'vue';
import Result403Icon from '@/assets/images/result-403.svg';
import Result404Icon from '@/assets/images/result-404.svg';
import Result500Icon from '@/assets/images/result-500.svg';
import ResultIeIcon from '@/assets/images/result-ie.svg';
import ResultWifiIcon from '@/assets/images/result-wifi.svg';
import ResultMaintenanceIcon from '@/assets/images/result-maintenance.svg';

const props = defineProps({
  title: {
    type: String,
    default: '',
  },
  tip: {
    type: String,
    default: '',
  },
  type: {
    type: String,
    default: '',
  },
});

const dynamicComponent = computed(() => {
  switch (props.type) {
    case '403':
      return Result403Icon;
    case '404':
      return Result404Icon;
    case '500':
      return Result500Icon;
    case 'ie':
      return ResultIeIcon;
    case 'wifi':
      return ResultWifiIcon;
    case 'maintenance':
      return ResultMaintenanceIcon;
    default:
      return Result403Icon;
  }
});
</script>

<template>
  <div class="result-container">
    <div class="result-bg-img">
      <component :is="dynamicComponent"></component>
    </div>
    <div class="result-title">{{ title }}</div>
    <div class="result-tip">{{ tip }}</div>
    <slot />
  </div>
</template>

<style lang="less" scoped>
.result {
  &-link {
    color: var(--td-brand-color);
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: var(--td-brand-color);
    }

    &:active {
      color: var(--td-brand-color);
    }

    &--active {
      color: var(--td-brand-color);
    }

    &:focus {
      text-decoration: none;
    }
  }

  &-container {
    min-height: 400px;
    height: 75vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 24px;
  }

  &-bg-img {
    width: 200px;
    color: var(--td-brand-color);
  }

  &-title {
    color: var(--td-text-color-primary);
    font: var(--td-font-title-large);
    font-weight: 500;
    font-style: normal;
    margin-top: 8px;
  }

  &-tip {
    margin: 8px 0 32px;
    font: var(--td-font-body-medium);
    color: var(--td-text-color-secondary);
  }
}
</style>
