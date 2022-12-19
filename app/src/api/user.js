import { post } from '@/utils/request';

export const User = {
  async login(credentials) {
    const data = await post('/login', credentials);
    return data;
  },
  async logout() {
    return true;
  },
  async getUserInfo() {
    return {
      id: 'abc',
      name: '一二三',
    };
  },
};
