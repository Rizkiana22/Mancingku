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
    <ul class="nav-links" :class="{ open: isOpen }">
      <li class="link"><RouterLink to="/" @click="closeMenu">BERANDA</RouterLink></li>
      <li class="link"><RouterLink to="/tentang" @click="closeMenu">TENTANG</RouterLink></li>
      <li class="link"><RouterLink to="/spot" @click="closeMenu">SPOT</RouterLink></li>

      <!-- Dropdown PERLENGKAPAN -->
      <li class="dropdown" @click.stop="toggleDropdown">
        <span class="link">
          PERLENGKAPAN <i class="ri-arrow-down-s-line"></i>
        </span>
        <ul class="dropdown-menu" :class="{ open: isDropdownOpen }">
          <li><RouterLink to="/umpan" @click="closeMenu">Umpan</RouterLink></li>
          <li><RouterLink to="/peralatan" @click="closeMenu">Alat Pancing</RouterLink></li>
        </ul>
      </li>

      <!-- Mobile Buttons -->
      <div class="mobile-buttons" :class="{ open: isOpen }">
        <button class="btn-signIN">Masuk</button>
        <button class="btn-signUP">Daftar</button>
      </div>
    </ul>

    <!-- Desktop Buttons -->
    <div class="button desktop-only">
      <button class="btn-signIN">Masuk</button>
      <button class="btn-signUP">Daftar</button>
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue";

const isOpen = ref(false);
const isDropdownOpen = ref(false);

function toggleMenu() {
  isOpen.value = !isOpen.value;
  if (!isOpen.value) isDropdownOpen.value = false;
}

function toggleDropdown() {
  isDropdownOpen.value = !isDropdownOpen.value;
}

window.addEventListener("click", () => {
  isDropdownOpen.value = false;
});

function closeMenu(){
  isOpen.value = false;
  isDropdownOpen.value = false;
}
</script>

<style scoped>
@import url("https://cdnjs.cloudflare.com/ajax/libs/remixicon/3.5.0/remixicon.min.css");

/* === Reset ul/li === */
.nav-links,
.nav-links ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
.nav-links li {
  display: inline-block;
}

/* === Navbar utama === */
.navbar {
  background: rgba(202, 202, 202, 0);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 40px;
  flex-wrap: wrap;
  backdrop-filter: blur(2px);
}

.nav-logo h2 {
  font-size: 30px;
  font-weight: 700;
  color: #ffffff;
}

.nav-logo a{
  text-decoration: none;
  color: inherit;
}

/* === Links === */
.nav-links {
  display: flex;
  justify-content: center;
  flex: 1;
  gap: 80px;
  align-items: center;
}

.link,
.link a {
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
.link:hover {
  color: #da9723;
}
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

.dropdown-menu li a {
  color: rgb(255, 255, 255);
  padding: 10px 14px;
  text-decoration: none;
  display: block;
}

.dropdown-menu li{
  display: block;
  width: 100%;
}

.dropdown-menu li a:hover {
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
  position: relative;
  z-index: 200;
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
@media (max-width: 1200px) {
  .nav-logo a{
     text-decoration: none;
  color: inherit;
  }
  .nav-logo h2 {
    font-size: 22px;
  }

  .navbar {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    z-index: 1000;
  }

  .nav-links {
    display: none;
    flex-direction: column;
    align-items: center;
    background-color: #0a7096;
    width: 100%;
    border-radius: 0 0 10px 10px;
    padding: 1rem 0;
    gap: 20px;
    position: absolute;
    top: 60px;
    left: 0;
    z-index: 1050;
  }

  .nav-links.open {
    display: flex;
  }

  .link a {
    color: white;
    text-decoration: none;
    font-size: 16px;
    padding: 8px 0;
  }

  .link a:hover {
    color: #da9723;
  }

  .desktop-only {
    display: none;
  }

  .mobile-buttons {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 10px;
    margin-top: 10px;
  }

  .btn-signIN,
  .btn-signUP {
    width: 80%;
    font-size: 16px;
    padding: 8px 0;
    border: none;
    border-radius: 6px;
  }

  .btn-signIN {
    background-color: #da9723;
    color: #fff;
  }

  .btn-signUP {
    background-color: #1b3c53;
    color: #fff;
  }

  .btn-signIN:hover,
  .btn-signUP:hover {
    background-color: #e28e00;
  }

  .burger {
    display: flex;
    flex-direction: column;
    position: absolute;
    gap: 5px;
    cursor: pointer;
    top: 35px;
    right: 45px;
    z-index: 300;
  }

  .burger span {
    width: 25px;
    height: 3px;
    background-color: #fff;
    border-radius: 2px;
  }

  .nav-links .dropdown-menu {
    position: static;
    background-color: #0a7096;
    box-shadow: none;
    width: 100%;
    text-align: center;
  }

  .dropdown-menu.open {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }
}
</style>
