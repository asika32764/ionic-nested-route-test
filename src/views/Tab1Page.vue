<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <ion-router-outlet />
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonRouterOutlet } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
import { RouterLink } from 'vue-router';

export default  defineComponent({
  name: 'Tab1Page',
  components: { ExploreContainer, IonHeader, IonToolbar, IonTitle, IonContent, IonPage, RouterLink, IonRouterOutlet }
});
</script>
