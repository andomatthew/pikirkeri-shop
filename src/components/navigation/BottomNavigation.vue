<template>
  <v-bottom-navigation elevation="0" grow>
    <v-btn
      v-for="item in menu"
      :value="item.value"
      :to="item.props.to"
      size="x-small"
    >
      <v-icon>{{ item.icon }}</v-icon>
      {{ item.title }}
    </v-btn>
  </v-bottom-navigation>
</template>

<script setup>
import { ref } from 'vue'
import MENU from '../../data/bottomBar';

const menu = ref([...MENU])

</script>

<style lang="scss" scoped>

</style>