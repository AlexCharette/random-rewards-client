import Vue from 'vue'
import { Store, createLogger } from 'vuex'
import rewards from './rewards.module'

const debug = process.env.NODE_ENV != 'production'

export default new Store({
  modules: {
    rewards
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
