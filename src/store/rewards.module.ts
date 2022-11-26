import { RewardService } from '@/services/reward.service'

const state = {
  rewards: []
}

const getters = {
  rewards: (state: Record<string, any>) => state.rewards,
}

const actions = {
  async loadRewards({ commit }: { commit: any}) {
    const result = await RewardService.loadRewards()
      .then((response: any) => {
        const rewards = JSON.parse(response.data)
        console.log('Loaded rewards')
        console.log(rewards)
        commit('setRewards', rewards)
      })
      .catch((error: any) => console.log(error))
  },

  async createReward({ dispatch, commit }: { dispatch: any, commit: any}, data: any) {
    await RewardService.createReward(data.body)
      .then(async (response: any) => await dispatch('loadRewards'))
      .catch((error: any) => console.log(error))
  },

  async updateReward({ dispatch, commit }: { dispatch: any, commit: any}, data: any) {
    await RewardService.updateReward(data.id, data.body)
      .then(async (response: any) => await dispatch('loadRewards'))
      .catch((error: any) => console.log(error))
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
