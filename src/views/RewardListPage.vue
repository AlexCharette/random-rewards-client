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
          :key="reward.Name"
          :name="reward.Name"
          :icon="reward.Icon"
        />
      </ion-list>

      <ion-fab
        vertical="bottom"
        horizontal="end"
        slot="fixed"
      >
        <ion-fab-button
          href="/addreward"
        >
          <ion-icon name="add-circle-outline"></ion-icon>
        </ion-fab-button>
      </ion-fab>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { 
  IonFab, 
  IonFabButton, 
  IonIcon, 
  IonPage, 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent, 
  IonList 
} from '@ionic/vue'
import { mapGetters, mapState } from 'vuex'
import RewardItem from '@/components/RewardItem.vue'

export default defineComponent({
  name: 'RewardsListPage',
  components: { IonFab, IonFabButton, IonHeader, IonIcon, IonToolbar, IonTitle, IonContent, IonList, IonPage, RewardItem },
  computed: {
    ...mapState('rewards', ['rewards'])
  }
})
</script>
