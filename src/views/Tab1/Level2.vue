<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Level 2</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-router-outlet></ion-router-outlet>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonHeader, IonPage, IonRouterOutlet, IonTitle, IonToolbar } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: "Level2",
  components: {
    IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonRouterOutlet
  }
});
</script>

<style scoped lang="scss">

</style>
