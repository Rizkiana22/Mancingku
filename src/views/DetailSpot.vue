<template>
  <div class="detail-spot">
    <div v-if="loading" class="loading">Loading...</div>
    <div v-else>
      <div class="spot-header">
        <div class="image-section">
            <img :src="spot.image" alt="Spot" class="main-image" />
            <div class="gallery">
            <img v-for="(img, i) in spot.galeri" :key="i" :src="img" class="gallery-img" alt="galery"/>
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
                <RouterLink to=/komentar><button class="view-komentar">lihat semua</button> </RouterLink>
                
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

const route = useRoute()
const spot = ref({})
const loading = ref(true)

const dummyData = [
  {
    id: 1,
    nama: "Saung Kemangi",
    alamat: "Jl. Cipaku Indah X No.2, Ledeng, Bandung",
    rating: 4.5,
    harga: 20000,
    jam_operasional: "10.00 - 22.00",
    image: "https://i.pinimg.com/736x/8f/8d/14/8f8d1477e57e783872b809c5447b5280.jpg",
    galeri: [
      "https://i.pinimg.com/1200x/36/31/25/363125df0f728983311938f7b1f1d01a.jpg",
      "https://i.pinimg.com/736x/dc/d1/4e/dcd14e3ca7cb0a819976077d46dfe5c0.jpg",
      "https://i.pinimg.com/1200x/fa/c6/19/fac619f73c7119b7e561eb7765da0257.jpg"
    ],
    fasilitas: ["Tempat Istirahat", "Toilet", "Mushola", "Sewa Alat", "Restoran"],
    ulasan: [
      { id: 1, user: "U***", komentar: "Tempat nyaman dan tenang", stars: "4.5" },
      { id: 2, user: "D***", komentar: "Kolam luas, cocok untuk keluarga", stars: "4.5" }
    ]
  },
  {
    id: 2,
    nama: "Situ Ciburuy",
    alamat: "Padalarang, Kabupaten Bandung Barat",
    rating: 4.2,
    harga: 15000,
    jam_operasional: "08.00 - 20.00",
    image: "https://i.pinimg.com/736x/a6/cd/3a/a6cd3a2a8194fedce2c8c2c54c11140a.jpg",
    galeri: [
      "https://i.pinimg.com/736x/84/51/5d/84515d6f22e81fa4942647f8610c7456.jpg",
      "https://i.pinimg.com/736x/30/28/9c/30289c1a9ea3c6dc05f260c6e10ceb7b.jpg",
      "https://i.pinimg.com/736x/97/a8/bf/97a8bf62226bc443b18762b0e3452cee.jpg"
    ],
    fasilitas: ["Tempat Istirahat", "Toilet", "Parkir"],
    ulasan: []
  }
]

onMounted(() => {
  const id = parseInt(route.params.id)
  const found = dummyData.find(s => s.id === id)
  if (found) {
    spot.value = found
  } else {
    spot.value = { nama: "Spot tidak ditemukan" }
  }
  loading.value = false
})
</script>

<style scoped>

a {
  text-decoration: none;
}
.view-komentar{

background-color:#ff8800;
color: #fff;
border: none;
padding: 8px 16px;
border-radius: 6px;
cursor: pointer;
font-weight: 500;
display: block;
margin-left: auto;
margin-top: 10px;
transition: background 0.2s;
}

.view-komentar:hover{
  background-color: #e57200;
}
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
  /* transition: transform 0.2s ease; */
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

/* Media Query */
@media (max-width: 768px) {
  .spot-header {
    align-items: center;
    flex-direction: column;
  }

  .main-image {
    width: 90%;
    justify-content: center;
  }

  .gallery {
    justify-content: center;
  }

  .spot-info {
    width: 90%;
    text-align: center;
  }

  .ulasan {
    max-height: 200px;
  }
}
</style>