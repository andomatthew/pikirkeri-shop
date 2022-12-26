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

<style lang="scss" scoped></style>