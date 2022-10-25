<template>
  <div id="container">
    <ion-button @click="fetchReward" shape="round">Time for a reward!</ion-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { IonButton } from '@ionic/vue'
import { mapState } from 'vuex'

export default defineComponent({
  name: 'RewardFetcher',
  components: { IonButton },
  computed: {
    ...mapState('rewards', ['rewards'])
  },
  methods: {
    fetchReward() {
      const randomChance = Math.floor(Math.random() * 3)
      
      let reward = null
      if (randomChance == 1) {
        const randomIndex = Math.floor(Math.random() * this.rewards.length)
        reward = this.rewards[randomIndex]
        // Play animation and spread the good word
        console.log(`Congrats! ${reward.comment}`)
      } else {
        console.log('No reward this time')
      }
    }
  }
});
</script>

<style lang="scss" scoped>
</style>
