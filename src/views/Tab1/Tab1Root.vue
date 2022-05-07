<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-back-button />
        <ion-title>Tab 1</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 1</ion-title>
        </ion-toolbar>
      </ion-header>

      <p>
        <router-link to="/tabs/tab1/level2/1">
          Go to Level2 (1)
        </router-link>
      </p>

      <p>
        <router-link to="/tabs/tab1/level2/2">
          Go to Level2 (2)
        </router-link>
      </p>

      <p>
        <router-link to="/tabs/tab1/level2/3">
          Go to Level2 (3)
        </router-link>
      </p>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import ExploreContainer from '@/components/ExploreContainer.vue';
import { IonBackButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import { defineComponent } from 'vue';
import { RouterLink } from 'vue-router';

export default defineComponent({
  name: "Tab1Root",
  components: { ExploreContainer, IonHeader, IonToolbar, IonTitle, IonContent, IonPage, RouterLink, IonBackButton }
});
</script>

<style scoped lang="scss">

</style>
