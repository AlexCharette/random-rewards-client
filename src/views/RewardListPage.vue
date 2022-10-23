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
          name=""
          icon=""
        />
      </ion-list>

      <ExploreContainer name="Rewards" />
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue'
import { mapGetters, mapState } from 'vuex'
import ExploreContainer from '@/components/ExploreContainer.vue'
import RewardItem from '@/components/RewardItem.vue'

export default defineComponent({
  name: 'RewardsListPage',
  components: { ExploreContainer, IonHeader, IonToolbar, IonTitle, IonContent, IonPage, RewardItem },
  computed: {
    ...mapGetters([
      'rewards'
    ]),
    ...mapState('rewards', ['rewards']),
  },
  mounted() {
    this.$store.dispatch('rewards/loadRewards')
  }
})
</script>
