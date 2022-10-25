<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Rewards</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">

      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Rewards</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-list>
        <reward-item 
          v-for="reward in rewards"
          :key="reward.name"
          :name="reward.name"
          :icon="reward.icon"
        />
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList } from '@ionic/vue'
import { mapGetters, mapState } from 'vuex'
import RewardItem from '@/components/RewardItem.vue'

export default defineComponent({
  name: 'RewardsListPage',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonPage, RewardItem },
  computed: {
    ...mapState('rewards', ['rewards'])
  }
})
</script>
