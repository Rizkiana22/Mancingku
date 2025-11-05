<template>
  <div class="payment-page">
    <h2 class="title">Pembayaran Tiket Mancing</h2>

    <div class="payment-container">
      <!-- Metode Pembayaran -->
      <div class="payment-methods">
        <h3>Metode Pembayaran</h3>
        <hr />

        <div
          v-for="(method, index) in methods"
          :key="index"
          class="method"
          :class="{ active: selectedMethod === method.name }"
          @click="selectMethod(method.name)"
        >
          <img :src="method.logo" :alt="method.name" />
          <span>{{ method.name }}</span>
        </div>
      </div>

      <!-- Rincian Biaya -->
      <div class="payment-summary">
        <h3>Rincian Biaya</h3>
        <hr />
        <div class="summary-item">
          <div>
            <p>Subtotal Pesanan</p>
            <small>Durasi: {{ durasi }} jam</small><br />
            <small>Nama: {{ nama }}</small><br />
            <small>Tanggal: {{ tanggal }}</small><br />
            <small>Jam Mulai: {{ jamMulai }}</small>
          </div>
          <span>Rp{{ formatNumber(subtotal) }}</span>
        </div>

        <div class="summary-item">
          <p>Pajak & Layanan</p>
          <span>Rp{{ formatNumber(pajak) }}</span>
        </div>

        <div class="total">
          <p>Total Pembayaran</p>
          <h2>Rp {{ formatNumber(total) }}</h2>
        </div>

        <button class="btn-pay" @click="lanjutkanPembayaran">
          Lanjutkan Pembayaran
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"
import { useRoute, useRouter } from "vue-router"

const route = useRoute()
const router = useRouter()

// Ambil data dari query
const nama = route.query.nama || "-"
const tanggal = route.query.tanggal || "-"
const jamMulai = route.query.jamMulai || "-"
const durasi = route.query.durasi || "1"

// Hitung total
const hargaPerJam = 20000
const subtotal = hargaPerJam * Number(durasi)
const pajak = 2500
const total = subtotal + pajak

// Metode pembayaran
const methods = [
  { name: "QRIS", logo: "/img/qris.png" },
  { name: "BCA", logo: "/img/bca.png" },
  { name: "Mandiri", logo: "/img/mandiri.png" },
  { name: "Dana", logo: "/img/dana.png" },
]

const selectedMethod = ref(null)

const selectMethod = (method) => {
  selectedMethod.value = method
}

const lanjutkanPembayaran = () => {
  if (!selectedMethod.value) {
    alert("Silakan pilih metode pembayaran terlebih dahulu!")
    return
  }

  alert(`✅ Pembayaran berhasil melalui ${selectedMethod.value}!`)
  router.push("/") // redirect ke halaman utama
}

// Format angka ribuan
const formatNumber = (num) => num.toLocaleString("id-ID")
</script>

<style scoped>
.payment-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
  background: linear-gradient(to bottom right, #004d73, #007fa3);
  min-height: 100vh;
  color: #222;
}

.title {
  color: #fff;
  margin-bottom: 30px;
  font-size: 1.8rem;
  text-align: center;
}

.payment-container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 30px;
  width: 100%;
  max-width: 900px;
}

/* === Metode Pembayaran === */
.payment-methods {
  background: #fff;
  padding: 20px;
  border-radius: 12px;
  width: 300px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
}

.payment-methods h3 {
  margin-bottom: 10px;
}

.method {
  display: flex;
  align-items: center;
  gap: 10px;
  border: 1px solid #ddd;
  padding: 10px 12px;
  border-radius: 8px;
  margin-top: 10px;
  cursor: pointer;
  transition: 0.3s;
}

.method img {
  width: 35px;
  height: 35px;
  object-fit: contain;
}

.method:hover {
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
}

.method.active {
  border: 2px solid #f79e1b;
  background-color: #fff8e7;
}

/* === Ringkasan Biaya === */
.payment-summary {
  background: #fff;
  padding: 20px;
  border-radius: 12px;
  width: 320px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
}

.payment-summary h3 {
  margin-bottom: 10px;
}

.summary-item {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: 12px 0;
  color: #555;
}

.total {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
  border-top: 1px solid #ddd;
  padding-top: 10px;
}

.total h2 {
  color: #f79e1b;
}

.btn-pay {
  width: 100%;
  background: #f79e1b;
  color: white;
  font-weight: bold;
  border: none;
  padding: 12px;
  border-radius: 8px;
  margin-top: 20px;
  cursor: pointer;
  transition: 0.3s;
}

.btn-pay:hover {
  background: #e38c00;
}

/* === Responsif untuk mobile === */
@media (max-width: 768px) {
  .payment-container {
    flex-direction: column;
    align-items: center;
  }

  .payment-methods,
  .payment-summary {
    width: 90%;
  }
}
</style>
