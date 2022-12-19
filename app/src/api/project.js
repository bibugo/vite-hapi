import { get } from '@/utils/request';

export const Project = {
  async getList() {
    return get('/project');
  },
};

export async function getDashboard() {
  return get('/dashboard');
}
