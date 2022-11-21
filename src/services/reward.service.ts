import { ApiService } from '@/services/api.service'

const RewardService = {

  createReward: async (data: Record<string, any>) => await ApiService.post({ resource: 'reward', body: data }),

  deleteReward: async (id: string) => await ApiService.delete({ resource: 'reward', params: { id } }),

  loadRewards: async () => await ApiService.get({ resource: 'rewards' }),

  updateReward: async (id: string, data: Record<string, any>) => await ApiService.put({ 
    resource: 'reward', 
    params: { id }, 
    body: data
  }),
}

export { RewardService }
