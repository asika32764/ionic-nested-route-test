<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Tab 2</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 2</ion-title>
        </ion-toolbar>
      </ion-header>
      
      <p>
        <router-link to="/tabs/1/tab1">
          To Tab1
        </router-link>
      </p>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
import { RouterLink } from 'vue-router';

export default defineComponent({
  name: 'Tab2Page',
  components: { ExploreContainer, IonHeader, IonToolbar, IonTitle, IonContent, IonPage, RouterLink }
});
</script>
