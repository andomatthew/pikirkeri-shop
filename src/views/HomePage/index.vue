<template>
  <v-carousel
      cycle
      interval="1000"
      :show-arrows="false"
      hide-delimiters
      height="480"
    >
    <v-carousel-item 
      v-for="product in products"
      :src="product.image"
    />
  </v-carousel>

  <v-row class="mt-0 mx-0">
    <v-col 
      cols="6"
      v-for="category in categories"
    >
      <v-card
        rounded="lg"
        flat
        color="deep-purple"
        width="100%"
        height="270"
        :title="category"
      ></v-card>
    </v-col>
  </v-row>
</template>

<script setup>
import { onMounted, ref } from 'vue';

const products = ref([])
const fetchProducts = async () => {
  const response = await fetch(`${import.meta.env.VITE_FAKESTORE_API}/products?limit=5`)
  const res = await response.json()
  products.value = res
}

const categories = ref([])
const fetchCategories = async () => {
  const response = await fetch(`${import.meta.env.VITE_FAKESTORE_API}/products/categories`)
  const res = await response.json()
  categories.value = res
}

onMounted(() => {
  fetchProducts()
  fetchCategories()
})
</script>

<style lang="scss" scoped>

</style>