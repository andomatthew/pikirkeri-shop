<template>
  <v-app class="wrapper">
    <div class="wrapper-content">
      <top-bar />
      <v-main class="py-4">
        <slot />
      </v-main>
      <bottom-navigation />
    </div>
  </v-app>
</template>

<script setup>
import BottomNavigation from '../components/navigation/BottomNavigation.vue';
import TopBar from '../components/TopBar.vue';
</script>

<style lang="scss" scoped>

</style>