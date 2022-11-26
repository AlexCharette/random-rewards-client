import rewardStore from '@/store/rewards.module'
import { mount } from '@vue/test-utils'

type State = {
  rewards: any[],
}

describe('mutations', () => {
  it('sets the rewards', () => {
    const state: State = { rewards: [] }
    const rewards = [
      { 
        name: 'test', 
        comment: 'This is just a test',
        icon: '🧪',
      }
    ]
    rewardStore.mutations.setRewards(state, rewards)
    expect(state.rewards.length).toEqual(1)
    expect(state.rewards[0].name).toEqual('test')
  })
})

// describe('actions', () => {
//     it('renders tab 1 Tab1Page', () => {
//       const wrapper = mount(Tab1Page)
//       expect(wrapper.text()).toMatch('Tab 1 page')
//     })
//   })

