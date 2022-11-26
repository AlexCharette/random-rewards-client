<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Add Reward</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <reward-form></reward-form>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import RewardForm from '@/components/RewardForm.vue'

export default defineComponent({
  name: 'AddRewardPage',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, RewardForm }
});
</script>
