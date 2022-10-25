import { RewardService } from '@/services/reward.service'

const state = {
  rewards: []
}

const getters = {
  rewards: (state: Record<string, any>) => state.rewards,
}

const actions = {
  async loadRewards({ commit }: { commit: any}) {
    const rewards = await RewardService.loadRewards()
    commit('setRewards', rewards.data)
  }
}

const mutations = {
  setRewards: (state: Record<string, any>, rewards: any[]) => state.rewards = rewards,
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
