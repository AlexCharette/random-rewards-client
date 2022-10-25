<template>
  <div id="container">
    <ion-alert
      :is-open="isOpenRef"
      :header="alertContent.header"
      :sub-header="alertContent.subHeader"
      :message="alertContent.message"
      :buttons="alertContent.buttons"
      @didDismiss="setOpen(false)"
    ></ion-alert>
    <ion-button @click="fetchReward" shape="round">Time for a reward!</ion-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { IonAlert, IonButton } from '@ionic/vue'
import { mapState } from 'vuex'

export default defineComponent({
  name: 'RewardFetcher',
  components: { IonAlert, IonButton },
  computed: {
    ...mapState('rewards', ['rewards'])
  },
  data() {
    return {
      alertContent: {
        header: '',
        subHeader: '',
        message: '',
        buttons: ['OK!']
      }
    }
  },
  setup() {
    const isOpenRef = ref(false);
    const setOpen = (state: boolean) => isOpenRef.value = state;
    
    return { isOpenRef, setOpen }
  },
  methods: {
    fetchReward() {
      const randomChance = Math.floor(Math.random() * 3)
      
      if (randomChance == 1) {
        const randomIndex = Math.floor(Math.random() * this.rewards.length)
        const reward = this.rewards[randomIndex]
        this.setAlertContent(reward.icon, reward.name, reward.comment, ['Hurray!']) 
        // Play animation and spread the good word
      } else {
        console.log('No reward this time')
        this.setAlertContent('', 'Nothing this time', 'Keep up the good work!', ['Oh well!'])
      }
      
      this.setOpen(true)
    },
    setAlertContent(
      header: string, 
      subHeader: string, 
      message: string, 
      buttons: string[]
    ) {
      this.alertContent.header = header
      this.alertContent.subHeader = subHeader
      this.alertContent.message = message
      this.alertContent.buttons = buttons
    }
  }
});
</script>

<style lang="scss" scoped>
</style>
