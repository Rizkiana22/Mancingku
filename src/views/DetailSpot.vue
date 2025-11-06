<template>
  <div class="detail-spot">
    <div v-if="loading" class="loading">Loading...</div>
    <div v-else>

      <SpotHeader :spot="spot" />
      <SpotFasilitas :spot="spot" />
      
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import SpotHeader from '@/components/DetailSpot/SpotHeader.vue'
import SpotFasilitas from '@/components/DetailSpot/SpotFasilitas.vue'

const route = useRoute()
const spot = ref({})
const loading = ref(true)

const dummyData = [
  {
    id: 1,
    slug: "saung-kemangi",
    nama: "Saung Kemangi",
    alamat: "Jl. Cipaku Indah X No.2, Ledeng, Bandung",
    rating: 4.5,
    harga: 20000,
    jam_operasional: "10.00 - 22.00",
    capacity: 20,
    image: "https://i.pinimg.com/736x/8f/8d/14/8f8d1477e57e783872b809c5447b5280.jpg",
    galeri: [
      "https://i.pinimg.com/1200x/36/31/25/363125df0f728983311938f7b1f1d01a.jpg",
      "https://i.pinimg.com/736x/dc/d1/4e/dcd14e3ca7cb0a819976077d46dfe5c0.jpg",
      "https://i.pinimg.com/1200x/fa/c6/19/fac619f73c7119b7e561eb7765da0257.jpg"
    ],
    fasilitas: [
      { nama: "Tempat Istirahat", icon: "https://cdn-icons-png.flaticon.com/128/2881/2881924.png" },
      { nama: "Toilet", icon: "https://cdn-icons-png.flaticon.com/128/185/185547.png" },
      { nama: "Mushola", icon: "https://cdn-icons-png.flaticon.com/128/6152/6152893.png" },
      { nama: "Sewa Alat", icon: "https://cdn-icons-png.flaticon.com/128/2265/2265049.png" },
      { nama: "Restoran", icon: "https://cdn-icons-png.flaticon.com/128/10372/10372638.png" },
      { nama: "Parkir", icon: "https://cdn-icons-png.flaticon.com/128/15767/15767705.png" }
    ],
    ulasan: [
      { id: 1, user: "U***", komentar: "Tempat nyaman dan tenang", stars: "4.5" },
      { id: 2, user: "D***", komentar: "Kolam luas, cocok untuk keluarga", stars: "4.5" }
    ]
  },
  {
    id: 2,
    slug: "situ-ciburuy",
    nama: "Situ Ciburuy",
    alamat: "Padalarang, Kabupaten Bandung Barat",
    rating: 4.2,
    harga: 15000,
    jam_operasional: "08.00 - 20.00",
    capacity: 25,
    image: "https://i.pinimg.com/736x/a6/cd/3a/a6cd3a2a8194fedce2c8c2c54c11140a.jpg",
    galeri: [
      "https://i.pinimg.com/736x/84/51/5d/84515d6f22e81fa4942647f8610c7456.jpg",
      "https://i.pinimg.com/736x/30/28/9c/30289c1a9ea3c6dc05f260c6e10ceb7b.jpg",
      "https://i.pinimg.com/736x/97/a8/bf/97a8bf62226bc443b18762b0e3452cee.jpg"
    ],
    fasilitas: [
      { nama: "Toilet", icon: "https://cdn-icons-png.flaticon.com/128/185/185547.png" },
      { nama: "Sewa Alat", icon: "https://cdn-icons-png.flaticon.com/128/2265/2265049.png" },
      { nama: "Parkir", icon: "https://cdn-icons-png.flaticon.com/128/15767/15767705.png" }
    ],
    ulasan: []
  }
]

onMounted(() => {
  const slug = route.params.slug
  const found = dummyData.find(s => s.slug === slug)

  if (found) {
    spot.value = found
    document.title = `${found.nama} | Mancingku`
  } else {
    spot.value = { nama: "Spot tidak ditemukan" }
  }
  loading.value = false
})

</script>

<style scoped>
.detail-spot {
  background: #fff;
  padding: 1rem 4vw;
  min-height: 100vh;
  font-family: 'Poppins', sans-serif;
  color: #222;
}
</style>