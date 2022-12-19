import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { TOKEN_NAME } from '@/config';
import { User } from '@/api';

const InitUserInfo = {};

export const useUserStore = defineStore('user', () => {
  const loggedIn = computed(() => !!localStorage.getItem(TOKEN_NAME));
  const user = ref({ ...InitUserInfo });
  const router = useRouter();
  const route = useRoute();

  async function login(credentials) {
    const { token } = await User.login(credentials);

    if (token) {
      localStorage.setItem(TOKEN_NAME, token);
      await getUserInfo();
      return true;
    }
    return false;
  }

  async function logout() {
    await User.logout();
    localStorage.removeItem(TOKEN_NAME);
    user.value = { ...InitUserInfo };
    router.push(`/login?redirect=${route.fullPath}`);
  }

  async function getUserInfo() {
    const data = await User.getUserInfo();
    user.value = { ...user.value, ...data };
  }

  return { loggedIn, login, logout, getUserInfo };
});
