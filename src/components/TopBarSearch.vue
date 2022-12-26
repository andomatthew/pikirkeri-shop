<template>
  <v-container class="topbar-search bg-white">
    <v-row class="align-center">
      <v-col cols="1">
        <v-btn
          icon
          variant="text"
          size="xsmall"
          @click="toPrevPage">
          <v-icon icon="mdi-arrow-left" size="22"/>
        </v-btn>
      </v-col>
      <v-col cols="11">
        <v-text-field 
          variant="underlined"
          prepend-inner-icon="mdi-magnify"
          color="deep-purple"
          placeholder="Sedang cari apa bro & sist..."
          hide-details
        />
      </v-col>
    </v-row>
  </v-container>
  <div class="topbar-height"></div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter()

const toPrevPage = () => {
  router.go(-1)
}
</script>

<style lang="scss" scoped>

</style>