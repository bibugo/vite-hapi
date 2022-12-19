<script setup>
import { useRouter } from 'vue-router';
import result from '@/components/Result.vue';

const router = useRouter();
</script>

<template>
  <result title="浏览器版本低" tip="抱歉，您正在使用的浏览器版本过低，无法打开当前网页。" type="ie">
    <div class="result-slot-container">
      <t-button @click="() => router.push('/')">返回首页</t-button>
      <div class="recommend-container">
        <div>推荐以下主流浏览器</div>
        <div class="recommend-browser">
          <div>
            <img class="browser-icon" src="@/assets/images/browser-chrome.png" />
            <div>Chrome</div>
          </div>
          <div>
            <img class="browser-icon" src="@/assets/images/browser-edge.png" />
            <div>IE/Edge</div>
          </div>
        </div>
      </div>
    </div>
  </result>
</template>

<style lang="less" scoped>
.result-slot-container {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  color: var(--td-text-color-secondary);
  height: calc(75vh - 254px);
  min-height: 156px;
}

.recommend-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px;
  width: 480px;
  background: var(--td-bg-color-container);
  box-shadow: 0px 1px 2px var(--td-shadow-1);
  border-radius: 3px;
}

.recommend-browser {
  display: flex;

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 70px;
  }

  > div + div {
    margin-left: 40px;
  }
}

.browser-icon {
  width: 40px;
  height: 40px;
}
</style>
