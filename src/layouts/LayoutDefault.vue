<template>
  <v-app class="bg-purple-lighten-5">
    <div class="wrapper bg-white">
      <div class="wrapper-content">
        <top-bar v-if="route.name !== 'SearchPage'" />
        <top-bar-search v-if="route.name === 'SearchPage'" />
        <v-main class="py-4">
          <slot />
        </v-main>
        <bottom-navigation />
      </div>
    </div>
  </v-app>
</template>

<script setup>
import BottomNavigation from '../components/navigation/BottomNavigation.vue';
import TopBar from '../components/TopBar.vue';
import TopBarSearch from '../components/TopBarSearch.vue';
import { useRoute } from 'vue-router'

const route = useRoute()

</script>

<style lang="scss" scoped>

</style>