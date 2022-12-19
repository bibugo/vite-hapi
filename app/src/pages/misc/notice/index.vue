<script setup>
import { ref, computed } from 'vue';
import { storeToRefs } from 'pinia';
import { useNotificationStore } from '@/store';
import { NOTIFICATION_TYPES } from '@/constants';
import NoMessage from '@/assets/images/no-message.svg';

const notificationStore = useNotificationStore();
const { msgData, unreadMsg, readMsg } = storeToRefs(notificationStore);

const TAB_LIST = [
  {
    label: '全部通知',
    value: 'msgData',
  },
  {
    label: '未读通知',
    value: 'unreadMsg',
  },
  {
    label: '已读通知',
    value: 'readMsg',
  },
];
const tabValue = ref('msgData');

const msgDataList = computed(() => {
  if (tabValue.value === 'msgData') return msgData.value;
  if (tabValue.value === 'unreadMsg') return unreadMsg.value;
  if (tabValue.value === 'readMsg') return readMsg.value;
  return [];
});

const selectedItem = ref({});
const visible = ref(false);

function setReadStatus(item) {
  const changeMsg = msgData.value;
  changeMsg.forEach((e) => {
    if (e.id === item.id) {
      if (e.status) e.status = false;
    }
  });
  notificationStore.setMsgData(changeMsg);
}
function handleClickDeleteBtn(item) {
  visible.value = true;
  selectedItem.value = item;
}
function deleteMsg() {
  const item = selectedItem.value;
  const changeMsg = msgData.value;
  changeMsg.forEach((e, index) => {
    if (e.id === item?.id) {
      changeMsg.splice(index, 1);
    }
  });
  visible.value = false;
  notificationStore.setMsgData(changeMsg);
}
</script>
<template>
  <div>
    <div class="notification">
      <t-tabs v-model="tabValue">
        <t-tab-panel v-for="(tab, tabIndex) in TAB_LIST" :key="tabIndex" :value="tab.value" :label="tab.label">
          <t-list v-if="msgDataList.length > 0" class="msg-list" :split="true">
            <t-list-item v-for="(item, index) in msgDataList" :key="index">
              <p :class="['content', { unread: item.status }]" @click="setReadStatus(item)">
                <t-tag size="small" :theme="NOTIFICATION_TYPES[item.quality]" variant="light">
                  {{ item.type }}
                </t-tag>
                {{ item.content }}
              </p>
              <template #action>
                <span class="msg-date">{{ item.date }}</span>
                <div class="msg-action">
                  <t-tooltip class="set-read-icon" :content="item.status ? '设为已读' : '设为未读'">
                    <span class="msg-action-icon" @click="setReadStatus(item)">
                      <t-icon v-if="!!item.status" name="queue" size="16px" />
                      <t-icon v-else name="chat" />
                    </span>
                  </t-tooltip>
                  <t-tooltip style="margin: 0" content="删除通知">
                    <span @click="handleClickDeleteBtn(item)">
                      <t-icon name="delete" size="16px" />
                    </span>
                  </t-tooltip>
                </div>
              </template>
            </t-list-item>
          </t-list>
          <div v-else class="msg-list__empty-list">
            <div>
              <no-message />
              <p>暂无通知</p>
            </div>
          </div>
        </t-tab-panel>
      </t-tabs>
    </div>
    <t-dialog
      v-model:visible="visible"
      header="删除通知"
      :body="`确认删除通知：${selectedItem && selectedItem.content}吗？`"
      :on-confirm="deleteMsg"
    ></t-dialog>
  </div>
</template>

<style lang="less" src="./index.less" scoped />
