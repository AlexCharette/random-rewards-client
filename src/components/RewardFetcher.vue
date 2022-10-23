<template>
  <div id="container">
    <ion-button shape="round">Time for a reward!</ion-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'RewardFetcher',
  props: {
    name: String
  }
});
</script>

<style lang="scss" scoped>
</style>