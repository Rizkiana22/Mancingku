<template>
  <main class="spot-page">
    <Navbar />

    <section class="search-section">
      <h1>Cari Spot Pemancingan</h1>
      <SearchBar v-model="search" />
    </section>

    <section class="spot-list">
      <SpotCard
        v-for="(spot, index) in filteredSpots"
        :key="index"
        :spot="spot"
      />
    </section>
  </main>
</template>

<script setup>
import { ref, computed } from 'vue'
import SearchBar from '@/components/SearchBar.vue'
import SpotCard from '@/components/SpotCard.vue'

// Data dummy sementara
const spots = ref([
  {
    name: 'Saung Kemangi',
    address: 'Jl. Cipaku Indah X No.2, RW.4, Ledeng, Kec. Cidadap, Kota Bandung, Jawa Barat',
    price: 'Rp. 20.000 / Jam',
    rating: 4.5,
    remaining: 5,
    img: 'https://i.pinimg.com/1200x/12/d8/70/12d870875c5d883244c2bccd102116b6.jpg'
  },
  // bisa tambahkan data lain di sini
])

const search = ref('')

const filteredSpots = computed(() => {
  return spots.value.filter(s => s.name.toLowerCase().includes(search.value.toLowerCase()))
})
</script>

<style scoped>
.spot-page {
  padding: 2rem 4vw;
  background: #fff;
}

.search-section h1 {
  margin-bottom: 1rem;
  color: #111;
  font-weight: 700;
}

.spot-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 1rem;
}
</style>