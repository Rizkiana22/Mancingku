<template>
  <nav class="navbar">
    <div class="nav-logo">
      <RouterLink to="/"><h2>Mancingku</h2></RouterLink>
    </div>

    <!-- Burger button -->
    <div class="burger" @click="toggleMenu">
      <span></span>
      <span></span>
      <span></span>
    </div>

    <!-- Nav Links -->
    <div class="nav-links" :class="{ open: isOpen }">
      <p class="link"><RouterLink to="/">BERANDA</RouterLink></p>
      <p class="link"><RouterLink to="/tentang">TENTANG</RouterLink></p>
      <p class="link"><RouterLink to="/spot">SPOT</RouterLink></p>

      <!-- Dropdown PERLENGKAPAN -->
      <div class="dropdown" @click.stop="toggleDropdown">
        <span class="link">
          PERLENGKAPAN <i class="ri-arrow-down-s-line"></i>
        </span>
        <div class="dropdown-menu" :class="{ open: isDropdownOpen }">
          <RouterLink to="/umpan">Umpan</RouterLink>
          <RouterLink to="/peralatan">Alat Pancing</RouterLink>
        </div>
      </div>
    </div>

    <!-- Desktop Buttons -->
    <div class="button desktop-only">
      <button class="btn-signIN">Masuk</button>
      <button class="btn-signUP">Daftar</button>
    </div>

    <!-- Mobile Buttons -->
    <div class="mobile-buttons" :class="{ open: isOpen }">
      <button class="btn-signIN">Masuk</button>
      <button class="btn-signUP">Daftar</button>
    </div>
  </nav>
</template>

<script setup>
import { ref, watch } from "vue";

const isOpen = ref(false);
const isDropdownOpen = ref(false);

function toggleMenu() {
  isOpen.value = !isOpen.value;
  if (!isOpen.value) {
    isDropdownOpen.value = false; // tutup dropdown jika menu ditutup
  }
}

function toggleDropdown() {
  isDropdownOpen.value = !isDropdownOpen.value;
}

// Tutup dropdown jika klik di luar
window.addEventListener("click", () => {
  isDropdownOpen.value = false;
});
</script>

<style scoped>
@import url("https://cdnjs.cloudflare.com/ajax/libs/remixicon/3.5.0/remixicon.min.css");

.navbar {
  background: rgba(202, 202, 202, 0);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 60px;
  flex-wrap: wrap;
  backdrop-filter: blur(2px);
}

.nav-logo h2 {
  font-size: 30px;
  font-weight: 700;
  color: #ffffff;
}

/* === Links === */
.nav-links {
  display: flex;
  justify-content: center;
  flex: 1;
  gap: 80px;
  align-items: center;
}

.link, .link a {
  display: inline-block;
  font-size: 18px;
  cursor: pointer;
  transition: color 0.1s;
  color: #ffffff;
  text-decoration: none;
}

.link a:hover {
  color: #da9723;
}

/* === Dropdown === */
.dropdown {
  cursor: pointer;
  display: inline-block;
  position: relative;
}

.dropdown-menu {
  display: none;
  position: absolute;
  background-color: #0a7096;
  min-width: 200px;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  overflow: hidden;
  top: 100%;
  left: 0;
  z-index: 100;
}

.dropdown-menu.open {
  display: block;
}

.dropdown-menu a {
  color: rgb(255, 255, 255);
  padding: 10px 14px;
  text-decoration: none;
  display: block;
}

.dropdown-menu a:hover {
  background-color: #e28e00;
}

/* === Buttons === */
.button {
  display: flex;
  gap: 10px;
  margin-right: 100px;
}

.btn-signIN,
.btn-signUP {
  padding: 8px 16px;
  font-weight: 600;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.1s;
}

.btn-signIN {
  background-color: #da9723;
  color: #ffffff;
  border: 0px;
}

.btn-signUP {
  background-color: #1b3c53;
  color: #fff;
  border: 2px solid #1b3c53;
}

.btn-signIN:hover {
  background: #e28e00;
  color: #fff;
}

.btn-signUP:hover {
  background: #e28e00;
  border-color: #e28e00;
}

.desktop-only {
  display: flex;
}

/* === Burger === */
.burger {
  display: none;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;
}
.burger span {
  width: 25px;
  height: 3px;
  background-color: #fff;
  border-radius: 2px;
}

/* === Mobile Buttons === */
.mobile-buttons {
  display: none;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0.5rem 0;
}

/* === Responsive === */
@media (max-width: 490px) {
  .burger {
    display: flex;
  }

  .nav-links {
    display: none;
    flex-direction: column;
    width: 100%;
    background-color: #0a7096; /* biar konsisten dengan tema */
    border-radius: 10px;
    padding: 0.8rem 1.2rem; /* padding kecil di dalam menu */
    gap: 6px; /* jarak antar item lebih rapat */
  }

  .nav-links.open {
    display: flex;
  }

  .desktop-only {
    display: none;
  }

  .mobile-buttons {
    display: none;
  }

  .mobile-buttons.open {
    display: flex;
    width: 100%;
  }

  .nav-links .dropdown-menu {
    position: static;
    box-shadow: none;
    background-color: #0a7096; /* sama seperti menu utama */
    width: 100%;
    padding-left: 1rem; /* sedikit menjorok */
    gap: 4px; /* jarak antar submenu */
  }

  .dropdown-menu.open {
    display: flex;
    flex-direction: column;
  }

  .link a {
    display: block;
    width: 100%;
    padding: 4px 0; /* rapatkan jarak antar link */
    font-size: 16px;
    color: #fff;
    text-decoration: none;
  }

  .link a:hover {
    color: #da9723;
  }
}
</style>
