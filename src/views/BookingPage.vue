<template>
  <div class="booking-page">
    <h2>Form Pemesanan Tiket Mancing</h2>

    <div class="booking-form">
      <label>
        Nama:
        <input type="text" v-model="form.nama" placeholder="Masukkan nama anda" />
      </label>

      <label>
        Tanggal:
        <input type="date" v-model="form.tanggal" @change="checkJadwal" />
      </label>

      <label>
        Jam Mulai:
        <select v-model="form.jamMulai">
          <option disabled value="">Pilih jam mulai</option>
          <option
            v-for="slot in jamTersedia"
            :key="slot.jam"
            :disabled="slot.status === 'Penuh'"
          >
            {{ slot.jam }} — {{ slot.status }}
          </option>
        </select>
      </label>

      <label>
        Durasi (jam):
        <select v-model.number="form.durasi">
          <option disabled value="">Pilih durasi</option>
          <option value="1">1 jam</option>
          <option value="2">2 jam</option>
          <option value="3">3 jam</option>
        </select>
      </label>

      <!-- 🔹 Tambahan: Jumlah orang -->
      <label>
        Jumlah Orang:
        <input
          type="number"
          v-model.number="form.jumlahOrang"
          min="1"
          placeholder="Masukkan jumlah orang"
        />
      </label>

      <!-- 🔹 Sewa alat -->
      <label>
        Apakah ingin sewa alat pancing?
        <select v-model="form.sewaAlat">
          <option disabled value="">Pilih opsi</option>
          <option value="tidak">Tidak, saya bawa sendiri</option>
          <option value="ya">Ya, sewa alat pancing</option>
        </select>
      </label>

      <div v-if="form.sewaAlat === 'ya'" class="alat-section">
        <label>
          Pilih jenis alat:
          <select v-model="form.jenisAlat">
            <option disabled value="">Pilih jenis alat</option>
            <option v-for="alat in daftarAlat" :key="alat.nama" :value="alat.nama">
              {{ alat.nama }} — Rp{{ alat.harga }}/jam
            </option>
          </select>
        </label>
      </div>

      <!-- 🔹 Total biaya otomatis -->
      <div v-if="totalBiaya > 0" class="total-section">
        <p><strong>Total Biaya:</strong> Rp{{ totalBiaya.toLocaleString() }}</p>
      </div>

      <button @click="pesanTiket">Pesan Sekarang</button>
    </div>

    <!-- Jadwal -->
    <div class="jadwal-section" v-if="form.tanggal">
      <h3>Jadwal {{ form.tanggal }}</h3>
      <div class="jadwal-list">
        <div
          v-for="slot in jadwal"
          :key="slot.jam"
          class="jadwal-item"
          :class="{ penuh: slot.status === 'Penuh' }"
        >
          <span>{{ slot.jam }}</span>
          <span>{{ slot.status }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import router from "@/router"
import { ref, computed } from "vue"
import { useRoute } from "vue-router"

const route = useRoute()
const spotId = ref(route.params.spotId || null)

const form = ref({
  nama: "",
  tanggal: "",
  jamMulai: "",
  durasi: "",
  jumlahOrang: 1,
  sewaAlat: "",
  jenisAlat: "",
})

// Jadwal dummy
const semuaJam = [
  "06:00", "07:00", "08:00", "09:00",
  "10:00", "11:00", "12:00", "13:00",
  "14:00", "15:00", "16:00", "17:00"
]

const dataPenuh = {
  "2025-11-06": ["08:00", "09:00", "14:00"],
  "2025-11-07": ["07:00", "10:00"],
}

// 🔹 Data alat pancing (dummy)
const daftarAlat = [
  { nama: "Joran & Reel Spinning", harga: 15000 },
  { nama: "Joran Bambu Tradisional", harga: 10000 },
  { nama: "Set Pancing Profesional", harga: 25000 },
]

// 🔹 Harga dasar spot (misal)
const hargaSpotPerOrangPerJam = 20000

const jadwal = ref([])
const jamTersedia = ref([])

const checkJadwal = () => {
  const tgl = form.value.tanggal
  const penuh = dataPenuh[tgl] || []
  jadwal.value = semuaJam.map((jam) => ({
    jam,
    status: penuh.includes(jam) ? "Penuh" : "Tersedia",
  }))
  jamTersedia.value = jadwal.value
}

// 🔹 Hitung total biaya otomatis
const totalBiaya = computed(() => {
  if (!form.value.durasi || !form.value.jumlahOrang) return 0

  const durasi = form.value.durasi
  const orang = form.value.jumlahOrang
  let total = hargaSpotPerOrangPerJam * durasi * orang

  if (form.value.sewaAlat === "ya" && form.value.jenisAlat) {
    const alat = daftarAlat.find((a) => a.nama === form.value.jenisAlat)
    if (alat) total += alat.harga * durasi * orang
  }

  return total
})

const pesanTiket = () => {
  if (!form.value.nama || !form.value.tanggal || !form.value.jamMulai || !form.value.durasi) {
    alert("Mohon lengkapi semua field terlebih dahulu.")
    return
  }

  const slot = jadwal.value.find((s) => s.jam === form.value.jamMulai)
  if (slot && slot.status === "Penuh") {
    alert("Slot waktu ini sudah penuh. Silakan pilih jam lain.")
    return
  }

  router.push('/payment/id');

  alert(
    `✅ Pemesanan berhasil!\nNama: ${form.value.nama}\nTanggal: ${form.value.tanggal}\nJam: ${form.value.jamMulai}\nDurasi: ${form.value.durasi} jam\nJumlah Orang: ${form.value.jumlahOrang}\nTotal: Rp${totalBiaya.value.toLocaleString()}`
  )

  router.push({
    path: `/payment/${spotId.value}`,
    query: {
      nama: form.value.nama,
      tanggal: form.value.tanggal,
      jamMulai: form.value.jamMulai,
      durasi: form.value.durasi
    }
  })
}
</script>

<style scoped>
.booking-page {
  background: #fff;
  color: #222;
  padding: 2rem 5vw;
  font-family: "Poppins", sans-serif;
  max-width: 600px;
  margin: 40px auto;
  border-radius: 12px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
}

h2 {
  text-align: center;
  color: #05496c;
  margin-bottom: 1.5rem;
}

.booking-form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.booking-form label {
  display: flex;
  flex-direction: column;
  font-weight: 500;
  color: #333;
}

.booking-form input,
.booking-form select {
  padding: 8px 10px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 14px;
}

.booking-form button {
  background-color: #0077cc;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s;
}

.booking-form button:hover {
  background-color: #005fa3;
}

/* 🔹 Tambahan sewa alat */
.alat-section {
  background: #f8f9fa;
  padding: 10px 15px;
  border-radius: 8px;
  border: 1px solid #ddd;
}

/* 🔹 Total biaya */
.total-section {
  background: #e9f6ff;
  border: 1px solid #b3e0ff;
  padding: 10px;
  border-radius: 8px;
  font-weight: 600;
  color: #05496c;
}

/* Jadwal */
.jadwal-section {
  margin-top: 2rem;
}

.jadwal-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 10px;
}

.jadwal-item {
  border: 1px solid #ccc;
  border-radius: 6px;
  padding: 8px 10px;
  text-align: center;
  background: #f7f7f7;
}

.jadwal-item.penuh {
  background-color: #ffcccc;
  color: #a00;
  font-weight: bold;
}
</style>
