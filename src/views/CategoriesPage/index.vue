<template>
  <div>
    <div class="px-4" v-if="loading">Loading...</div>
    <template v-else>
      <div class="px-4 d-flex justify-space-between align-center">
        <p>Clothing</p>
        <v-btn
          variant="plain"
          size="small"
          append-icon="chevron_right"
          class="text-capitalize">
          Lihat Semua
        </v-btn>
      </div>
      <div class="pa-4">
        <v-row>
          <v-col 
            cols="4"
            v-for="category in categories">
            <v-card
              rounded="lg"
              flat
              color="deep-purple"
              width="100%"
              height="138"
              :title="category"
              @click="handleOnSelectCategory(category)"
            ></v-card>
          </v-col>
        </v-row>
      </div>
    </template>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()

const categories = ref([])

const loading = ref(false)
const fetchCategories = async () => {
  loading.value = true
  const response = await fetch(`${import.meta.env.VITE_FAKESTORE_API}/products/categories`)
  const res = await response.json()
  categories.value = res
  loading.value = false
}

const handleOnSelectCategory = (categoryName) => {
  router.push(`/${categoryName.replace(' ', '_')}`)
}

onMounted(() => {
  fetchCategories()
})
</script>

<style lang="scss" scoped>

</style>