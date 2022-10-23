<template>
  <ion-item button>
    <ion-icon slot="start"></ion-icon>
    <ion-label>{{ name }}</ion-label>
  </ion-item>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'RewardItem',
  props: {
    name: String,
    icon: String,
  }
});
</script>

<style lang="scss" scoped>
</style>