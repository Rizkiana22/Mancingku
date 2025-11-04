<template>
  <div class="detail-spot">
    <div v-if="loading" class="loading">Loading...</div>
    <div v-else>
      <div class="spot-header">
        <div class="image-section">
            <img :src="spot.image" alt="Spot" class="main-image" />
            <div class="gallery">
            <img v-for="(img, i) in spot.galeri" :key="i" :src="img" class="gallery-img" />
            </div>
        </div>

        <div class="spot-info">
            <h2>{{ spot.nama }}</h2>
            <p class="alamat">📍 {{ spot.alamat }}</p>
            <p class="rating">⭐ {{ spot.rating }} ({{ spot.ulasan.length }} ulasan)</p>

            <h2>Ulasan Pengunjung</h2>
            <div class="ulasan" v-if="spot.ulasan && spot.ulasan.length">
                <div v-for="review in spot.ulasan" :key="review.id" class="review-card">
                    <p class="user"><strong>{{ review.user }}</strong> — ⭐ {{ review.stars }}</p>
                    <p class="comment">{{ review.komentar }}</p>
                </div>
            </div>
            <p v-else>Belum ada ulasan untuk tempat ini.</p>
        </div>
        </div>

      <div class="fasilitas">
        <h3>Fasilitas</h3>
        <ul>
          <li v-for="(fasilitas, i) in spot.fasilitas" :key="i">
            {{ fasilitas }}
          </li>
        </ul>
      </div>

      <div class="operasional">
        <h3>Jam Operasional</h3>
        <p>{{ spot.jam_operasional }}</p>
        <p>Harga per jam: <b>Rp {{ spot.harga }}</b></p>
        <button class="btn-pesan">Pesan Sekarang</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'

const route = useRoute()
const spot = ref({})
const loading = ref(true)

onMounted(async () => {
  try {
    const id = route.params.id
    const response = await axios.get(`http://localhost:5000/api/spots/${id}`)
    spot.value = response.data
  } catch (error) {
    console.error('Gagal memuat data:', error)
  } finally {
    loading.value = false
  }
})
</script>
<style scoped>
.detail-spot {
  background: #fff;
  padding: 1rem 4vw;
  font-family: 'Poppins', sans-serif;
  color: #222;
}

/* Bagian header utama */
.spot-header {
  display: flex;
  gap: 24px;
  align-items: flex-start;
  margin-bottom: 24px;
}

/* Gambar utama dan galeri */
.image-section {
  display: flex;
  flex-direction: column;
  /* align-items: center; */
}

.main-image {
  width: 420px;
  height: 300px;
  border-radius: 10px;
  object-fit: cover;
  box-shadow: 0 2px 6px rgba(0,0,0,0.2);
}

.gallery {
  display: flex;
  gap: 10px;
  margin-top: 8px;
  flex-wrap: wrap;
  /* justify-content: center; */
}

.gallery-img {
  width: 135px;
  height: 90px;
  border-radius: 8px;
  object-fit: cover;
  cursor: pointer;
  transition: transform 0.2s;
}

.gallery-img:hover {
  transform: scale(1.05);
}

/* Info Spot */
.spot-info {
  flex: 1;
}

.spot-info h2 {
  margin-bottom: 5px;
  font-size: 1.4rem;
  color: #05496c;
}

.spot-info .alamat {
  color: #555;
  margin-bottom: 8px;
}

.spot-info .rating {
  font-weight: 500;
  color: #ffb400;
  margin-bottom: 16px;
}

/* Ulasan Pengunjung */
.ulasan {
  background-color: #f8f9fa;
  padding: 15px;
  border-radius: 10px;
  border: 1px solid #e0e0e0;
  max-height: 250px;
  overflow-y: auto;
}

.ulasan::-webkit-scrollbar {
  width: 6px;
}
.ulasan::-webkit-scrollbar-thumb {
  background: #ccc;
  border-radius: 3px;
}

.review-card {
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 5px 10px;
  margin-bottom: 10px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  transition: transform 0.2s ease;
}

.review-card:hover {
  transform: translateY(-2px);
}

.review-card .user {
  font-weight: 400;
  margin-bottom: 4px;
  color: #05496c;
}

.review-card .comment {
  color: #333;
  font-size: 12px;
  line-height: 1.4;
}

/* Fasilitas dan Operasional */
.fasilitas, 
.operasional {
  background: #e6f1f7;
  padding: 15px;
  border-radius: 10px;
  margin-bottom: 15px;
}

.fasilitas h3, 
.operasional h3 {
  margin-bottom: 8px;
  color: #05496c;
}

/* Tombol */
.btn-pesan {
  background-color: #ff8800;
  border: none;
  color: white;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 500;
  transition: background-color 0.2s;
}

.btn-pesan:hover {
  background-color: #e57200;
}
</style>
