<template>
  <div class="px-4">
    <div v-if="loading">Loading...</div>
    <div class="pa-4" v-else>
      <v-row>
        <v-col 
          cols="6"
          v-for="item in list">
          <v-card
            rounded="lg"
            flat
            width="100%"
            height="138"
            class="d-flex">
            <v-img 
              :src="item.image"
              alt="item-image"
            />
          </v-card>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router'

const route = useRoute()

const list = ref([])
const loading = ref(false)

const fetchInCategory = async () => {
  const currentRouteName = 
    route.path
      .replace('/', '')
      .replace('_', ' ')

  loading.value = true
  const response = await fetch(`${import.meta.env.VITE_FAKESTORE_API}/products/category/${currentRouteName}`)
  const res = await response.json()
  list.value = res
  loading.value = false
}

onMounted(() => {
  fetchInCategory()
})

</script>

<style lang="scss" scoped>

</style>