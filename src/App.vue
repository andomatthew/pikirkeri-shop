<template>
<layout-default>
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</layout-default>
</template>

<script setup>
import LayoutDefault from './layouts/LayoutDefault.vue';
</script>

<style lang="scss" scoped>
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.25s ease-out;
  }
</style>