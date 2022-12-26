<template>
  <div class="px-4">
    <img 
      src="../../assets/illustrations/wishlist.png"
      alt="wishlist-image"
      width="216"
      class="d-block mx-auto"
    />

    <div class="info-wrapper mx-auto">
      <h6 class="text-h6 font-weight-bold text-center mt-4">Wishlist Kosong</h6>
      <p class="text-caption text-center mt-4">
        Klik icon berbentuk hati untuk menyimpan barang di wishlist
      </p>
      <v-btn 
        color="deep-purple"
        variant="flat"
        block
        class="mt-6"
        to="/">
        Belanja Sekarang
      </v-btn>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.info-wrapper {
  max-width: 286px;
}
</style>