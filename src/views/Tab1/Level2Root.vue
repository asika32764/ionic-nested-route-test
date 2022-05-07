<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button />
        </ion-buttons>
        <ion-title>Level 2</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <p>
        <router-link :to="`level2/${id}/alpha/1`">To Alpha 1</router-link>
      </p>
      <p>
        <router-link :to="`level2/${id}/alpha/2`">To Alpha 2</router-link>
      </p>
      <p>
        <router-link :to="`level2/${id}/beta/1`">To Beta 1</router-link>
      </p>
      <p>
        <router-link :to="`level2/${id}/beta/2`">To Beta 2</router-link>
      </p>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonRouterOutlet,
  IonTitle,
  IonToolbar
} from '@ionic/vue';
import { computed, defineComponent, ref } from 'vue';
import { RouterLink, useRoute } from 'vue-router';

export default defineComponent({
  name: "Level2Root",
  components: {
    IonHeader, IonToolbar, IonTitle, IonContent, IonPage, RouterLink, IonBackButton, IonButtons
  },
  setup() {
    const route = useRoute();

    const id = computed(() => route.params.lid);
    
    return {
      id
    };
  }
});
</script>

<style scoped lang="scss">

</style>
