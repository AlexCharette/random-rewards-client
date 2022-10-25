import { ApiService } from '@/services/api.service'

const RewardService = {

  addReward: async (data: Record<string, any>) => await ApiService.post('addReward', data),

  // TODO: Figure out implementation
  // deleteReward: async () => {},

  loadRewards: async () => await ApiService.get('getRewards'),

  updateReward: async (data: Record<string, any>) => await ApiService.put('updateReward', data),

}

export { RewardService }
