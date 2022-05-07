<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Level 3 Alpha</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <h1>Level 3 Alpha</h1>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonHeader, IonPage, IonRouterOutlet, IonTitle, IonToolbar } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: "Level3Alpha",
  components: {
    IonHeader, IonToolbar, IonTitle, IonContent, IonPage
  }
});
</script>

<style scoped lang="scss">

</style>
