<template>
  <ion-item button>
    <ion-badge slot="start">{{ icon }}</ion-badge>
    <ion-label>{{ name }}</ion-label>
  </ion-item>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonItem, IonLabel, IonBadge } from '@ionic/vue'

export default defineComponent({
  name: 'RewardItem',
  components: { IonItem, IonLabel, IonBadge },
  props: {
    name: String,
    icon: String,
  }
});
</script>

<style lang="scss" scoped>
</style>
