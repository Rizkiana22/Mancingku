<template>
  <div class="signin-container">
    <div class="signin-box">
      <h2>Mari Mulai</h2>
      <p>Buat akun Anda untuk melanjutkan</p>

      <form @submit.prevent="loginUser">
        <input
        v-model="nama"
        type="nama"
        placeholder="Nama"
        required
        />
        <input
          v-model="email"
          type="email"
          placeholder="Email"
          required
        />
        <input
          v-model="password"
          type="password"
          placeholder="Kata sandi"
          required
        />
          <input
          v-model="konfirm"
          type="Konfirmasi"
          placeholder="Konfirmasi Kata sandi"
          required
        />
        <button type="submit" class="login-btn">Masuk</button>
      </form>

      <p class="switch-text">
        Sudah punya akun?
        <RouterLink to="/signin">Masuk sekarang</RouterLink>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const email = ref("");
const password = ref("");

function loginUser() {
  if (!email.value || !password.value) {
    alert("Harap isi email dan kata sandi!");
    return;
  }
  console.log("Login:", email.value, password.value);
  alert("Login berhasil (contoh)");
  router.push("/"); // arahkan ke halaman utama
}
</script>

<style scoped>
.signin-container {
  height: 100vh;
  width: 100%;
  background: linear-gradient(
      rgba(0, 0, 0, 0.4),
      rgba(0, 0, 0, 0.4)
    ),
    url("@/assets/Bg.png");
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

.signin-box {
  background: #ffffff;
  padding: 40px 30px;
  border-radius: 16px;
  width: 90%;
  max-width: 400px;
  text-align: center;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.25);
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(0.95) translateY(-10px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

h2 {
  color: #1b3c53;
  font-size: 28px;
  margin-bottom: 10px;
}

p {
  color: #666;
  margin-bottom: 20px;
}

input {
  width: 100%;
  padding: 12px;
  margin: 8px 0;
  border-radius: 10px;
  border: 1px solid #ddd;
  outline: none;
  font-size: 14px;
  
}

input:focus {
  border-color: #1b3c53;
}

.login-btn {
  width: 100%;
  background: #1b3c53;
  color: white;
  padding: 12px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  margin-top: 10px;
  font-weight: 600;
  transition: 0.3s;
}

.login-btn:hover {
  background: #e28e00;
}

.switch-text {
  margin-top: 15px;
  color: #555;
  font-size: 14px;
}

.switch-text a {
  color: #e28e00;
  font-weight: 600;
  text-decoration: none;
}

.switch-text a:hover {
  text-decoration: underline;
}
</style>
