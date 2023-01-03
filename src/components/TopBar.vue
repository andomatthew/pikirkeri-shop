<template>
  <!--topbar-->
  <v-container class="topbar-default bg-white">
    <v-row no-gutters class="align-center">
      <v-col class="d-flex align-center">
        <v-btn
          icon
          size="x-small"
          variant="text"
          class="me-2"
          @click="router.go(-1)"
          v-if="route.name === 'Category'"
          >
          <v-icon icon="arrow_back"></v-icon>
        </v-btn>
        <h2>Pikirkeri</h2>
      </v-col>
      <v-col class="d-flex justify-end">
        <v-btn 
          icon 
          variant="text" 
          size="small"
          :to="{ name: 'SearchPage' }">
          <v-icon icon="search" size="24"></v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
  <div class="topbar-height"></div>
  <!--topbar-->
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';

const route = useRoute()
const router = useRouter()
</script>

<style lang="scss" scoped>

</style>