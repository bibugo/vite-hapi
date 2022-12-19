import { MessagePlugin } from 'tdesign-vue-next';
import { useUserStore } from '@/store';
import { TOKEN_NAME } from '@/config';

export default function ApiErrorHandler(response) {
  const { code, message } = response;
  if (code && code === 'HTTP_401') {
    localStorage.removeItem(TOKEN_NAME);
    useUserStore().logout();
  } else {
    MessagePlugin.error(`${message || '未知错误'} (Code: ${code})`);
  }
}
