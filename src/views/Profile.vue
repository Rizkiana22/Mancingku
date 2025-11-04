<template>
  <div class="profile-container">
    <aside class="sidebar">
      <div class="menu">
        <!-- Profil -->
        <div
          class="menu-item"
          :class="{ active: activeMenu === 'profil' }"
          @click="activeMenu = 'profil'"
        >
          <i class="ri-user-3-line"></i>
          <span>Profil</span>
        </div>

        <!-- Tiket Saya -->
        <div class="menu-item" @click="toggleTicketMenu">
          <i class="ri-ticket-line"></i>
          <span>Tiket Saya</span>
          <i
            class="ri-arrow-down-s-line arrow"
            :class="{ open: showTickets }"
          ></i>
        </div>

        <!-- Dropdown daftar tiket -->
        <ul v-show="showTickets" class="ticket-dropdown">
          <li
            v-for="ticket in tickets"
            :key="ticket.id"
            @click="selectTicket(ticket)"
            class="ticket-item"
          >
            • {{ ticket.spot }}
          </li>
        </ul>
      </div>

      <!-- Tombol Logout -->
      <button class="logout-btn" @click="logout">
        <i class="ri-logout-box-line"></i> LogOut
      </button>
    </aside>

    <!-- Content -->
    <main class="profile-content">
      <h2>{{ pageTitle }}</h2>

      <!-- === PROFIL === -->
      <div v-if="activeMenu === 'profil'">
        <form class="profile-form">
          <label>
            Username
            <input type="text" v-model="username" readonly />
          </label>

          <label>
            Nama Lengkap
            <input type="text" v-model="name" readonly/>
          </label>

          <label>
            Email
            <input type="email" v-model="email" readonly />
          </label>

          <label>
            Nomor Telepon
            <input type="text" v-model="phone" readonly/>
          </label>
        </form>
      </div>


     <!-- === DETAIL TIKET === -->
<div v-else-if="activeMenu === 'tiket' && selectedTicket">
  <div class="ticket-detail">
    <h3>{{ selectedTicket.spot }}</h3>
    <p><strong>Tanggal:</strong> {{ selectedTicket.date }}</p>
    <p><strong>Jumlah:</strong> {{ selectedTicket.amount }} tiket</p>
    <p><strong>Harga:</strong> Rp {{ selectedTicket.price.toLocaleString() }}</p>
  

    <!-- Tambahan info pemilik tiket --!>

    <!-- Dummy barcode -->
    <div class="barcode-wrapper">
      <img src="/src/assets/barcode.png" alt="Barcode Tiket" class="barcode-img" />
    </div>
  </div>
</div>
    </main>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const activeMenu = ref("profil");
const showTickets = ref(false);
const selectedTicket = ref(null);

const username = ref("Username");
const name = ref("Username13");
const email = ref("Us****ame13@gmail.com");
const phone = ref("081*****789");

const tickets = ref([
  { id: 1, spot: "Saung Kemangi", date: "2025-11-05", amount: 2, price: 50000 },
  { id: 2, spot: "Pantai Glagah", date: "2025-11-10", amount: 1, price: 40000 },
]);

const pageTitle = computed(() =>
  activeMenu.value === "profil"
    ? "Profil Saya"
    : selectedTicket.value
    ? "Detail Tiket"
    : "Tiket Saya"
);

function toggleTicketMenu() {
  showTickets.value = !showTickets.value;
}

function selectTicket(ticket) {
  activeMenu.value = "tiket";
  selectedTicket.value = ticket;
}

function logout() {
  localStorage.removeItem("isLoggedIn");
  localStorage.removeItem("username");
  router.push("/signin");
}
</script>

<style scoped>
@import url("https://cdnjs.cloudflare.com/ajax/libs/remixicon/3.5.0/remixicon.min.css");

.profile-container {
  display: flex;
  height: 100vh;
  background: linear-gradient(135deg, #005f85, #00344d);
  color: #fff;
  font-family: "Poppins", sans-serif;
}
.ticket-owner {
  margin-top: 10px;
  background: #f6f6f6;
  padding: 10px 12px;
  border-radius: 8px;
  color: #333;
  font-size: 14px;
  font-weight: 500;
}

/* Barcode */
.barcode-wrapper {
  margin-top: 20px;
  text-align: center;
}

.barcode-img {
  width: 180px;
  height: auto;
  background: #fff;
  padding: 10px;
  border-radius: 8px;
}

.ticket-code {
  margin-top: 6px;
  font-size: 14px;
  color: #222;
  background: #fff;
  display: inline-block;
  padding: 4px 10px;
  border-radius: 6px;
  font-weight: 600;
}

/* === Sidebar === */
.sidebar {
  width: 250px;
  background: #002c3e;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 30px 20px;
}

.menu {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.menu-item {
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  color: #bbb;
  font-size: 16px;
  transition: 0.3s;
}

.menu-item.active,
.menu-item:hover {
  color: #ffb341;
}

.arrow {
  margin-left: auto;
  transition: transform 0.3s;
}
.arrow.open {
  transform: rotate(180deg);
}

/* Dropdown daftar tiket */
.ticket-dropdown {
  margin-left: 30px;
  list-style: none;
  padding: 0;
  margin-top: 2px;
}

.ticket-item {
  font-size: 14px;
  color: #fff;
  cursor: pointer;
  margin: 4px 0;
  transition: color 0.2s;
}

.ticket-item:hover {
  color: #ffb341;
}

.logout-btn {
  background: transparent;
  border: none;
  color: #ffb341;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  font-weight: 600;
  transition: 0.3s;
}

.logout-btn:hover {
  color: #fff;
}

/* === Content === */
.profile-content {
  flex: 1;
  background: linear-gradient(to bottom right, #035e83, #004160);
  padding: 50px 60px 60px 120px;
  overflow-y: auto;
}

h2 {
  font-size: 26px;
  font-weight: 600;
  margin-bottom: 30px;
}

/* Form profil */
.profile-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 800px;
}

label {
  display: flex;
  flex-direction: column;
  font-size: 15px;
  color: #fff;
}

input {
  margin-top: 6px;
  padding: 10px 12px;
  border-radius: 8px;
  border: none;
  outline: none;
  font-size: 15px;
  color: #333;
}

input[readonly] {
  background: #e8e8e8;
  color: #777;
}

/* Detail tiket */
.ticket-detail {
  background: #ffffff;
  color: #333;
  border-radius: 10px;
  padding: 25px;
  max-width: 500px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
}

/* === Responsive === */
@media (max-width: 900px) {

  .logout-btn {
  margin-right: 20px; /* kasih jarak dari tepi kanan */
  padding: 6px 10px;
  background: transparent;
  color: #ffb341;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 600;
}

  .profile-container {
    flex-direction: column;
    background: #004160; /* ganti gradient ke warna solid biar rapi di HP */
    overflow-x: hidden;
  }

  .sidebar {
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 15px 20px;
    border-bottom: 2px solid rgba(255, 255, 255, 0.1);
  }

  .menu {
    position: relative;
  }

  .menu-item {
    font-size: 15px;
    position: relative;
  }

  .profile-content {
    padding: 20px;
    background: #fff; /* ubah jadi putih supaya teks terbaca */
    color: #222;
    border-radius: 0;
  }

  label {
    color: #222;
  }

  h2 {
    color: #05496c;
  }

  .ticket-detail {
    width: 100%;
    max-width: none;
    box-shadow: none;
    padding: 20px;
  }

.ticket-dropdown {
  position: flex;
  min-width: 180px;
  border-radius: 6px;
  overflow: hidden;
  top: 45px; /* sedikit lebih jauh biar gak nempel di menu */
  left: 0;
  z-index: 999;
  display: block; /* biar Vue yang kontrol tampilannya */
  animation: fadeIn 0.2s ease;
}

}

/* Tambahan: biar gak geser kanan di layar kecil */
html, body {
  overflow-x: hidden;
}
</style>
