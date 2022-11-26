<template>
  <ion-card>
    <ion-card-header>
      <ion-card-title>New Reward</ion-card-title>
    </ion-card-header>
    <ion-card-content>
      <ion-list>
        <ion-item>
          <ion-label>{{ formName.label }}</ion-label>
          <ion-input 
            v-model="formName.value" 
            :placeholder="formName.value"
          ></ion-input>
          
        </ion-item>
        <ion-item>
          <ion-label>{{ formIcon.label }}</ion-label>
          <ion-input 
            v-model="formIcon.value" 
            :placeholder="formIcon.value"
          ></ion-input>
        </ion-item>
        <ion-item>
          <ion-label>{{ formComment.label }}</ion-label>
          <ion-input 
            v-model="formComment.value" 
            :placeholder="formComment.value"
          ></ion-input>
        </ion-item>
      </ion-list>
      <ion-button @click="cancel">
        <ion-icon name="close-circle-outline">
        </ion-icon>
      </ion-button>
      <ion-button @click="submit">
        <ion-icon name="checkmark-circle-outline">
        </ion-icon>
      </ion-button>
    </ion-card-content>
  </ion-card>
</template>

<script lang="ts">
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonIcon, IonInput, IonLabel } from '@ionic/vue'
import { defineComponent } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required } from '@vuelidate/validators'

export default defineComponent({
  name: 'RewardForm',
  components: { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonIcon, IonInput, IonLabel },
  props: {
    id: String,
    name: String,
    icon: String,
    comment: String,
  },
  data() {
    return {
      formName: {
        label: 'Name',
        value: this.name,
      },
      formIcon: {
        label: 'Icon',
        value: this.icon,
      },
      formComment: {
        label: 'Comment',
        value: this.comment,
      },
    }
  },
  validations() {
    return {
      formName: { required },
      formIcon: { required },
    }
  },
  methods: {
    cancel() {
      console.log("Going back")
      this.$router.back()
    },
    submit() {
      // If it's an update
      if (this.id != null) {
        this.$store.dispatch(
          'rewards/updateReward', 
          {
            id: this.id,
            body: {
              name: this.formName.value,
              icon: this.formIcon.value,
              comment: this.formComment.value,
            },
          },
        )
      } else {
        this.$store.dispatch(
          'rewards/createReward', 
          {
            body: {
              name: this.formName.value,
              icon: this.formIcon.value,
              comment: this.formComment.value,
            },
          },
        )
        // TODO: Validate the form
        // TODO: Wait for response
        // this.$router.back()
      }
    }
  },
  setup() {
    return {
      v$: useVuelidate()
    }
  }
})
</script>
