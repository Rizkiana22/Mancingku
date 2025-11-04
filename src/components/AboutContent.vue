<template>
  <div class="about-content">
    <h1>TENTANG KAMI</h1>
    <p>
      <strong>Mancingku</strong> adalah platform booking tempat pemancingan air
      tawar di Indonesia yang memudahkan Anda menemukan spot terbaik, lengkap
      dengan informasi harga, fasilitas, dan sistem booking online. Tak hanya
      itu, <strong>Mancingku</strong> juga menyediakan rekomendasi joran dan
      umpan agar pengalaman memancing Anda semakin menyenangkan dan praktis.
      Kami percaya bahwa memancing bukan sekadar hobi, tetapi juga cara
      menikmati alam dan kebersamaan.
    </p>
  </div>

  <div class="Fokus-kami">
    <h1>FOKUS KAMI</h1>

    <div class="fokus-container">
      <div class="fokus-item">
        <img src="/src/assets/booking.png" alt="Booking Online" />
        <h3>Booking Online</h3>
      </div>

      <div class="fokus-item">
        <img src="/src/assets/fishing-tool.png" alt="Informasi Joran" />
        <h3>Informasi Joran</h3>
      </div>

      <div class="fokus-item">
        <img src="/src/assets/fishing.png" alt="Informasi Umpan" />
        <h3>Informasi Umpan</h3>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about-content {
  max-width: 600px; /* lebar konten nyaman dibaca */
  margin: 20px auto; /* center horizontal + jarak vertikal */
  text-align: center; /* teks rata tengah */
  padding: 0 10px; /* jarak kiri-kanan di layar kecil */
  box-sizing: border-box;
}

.about-content h1 {
  color: #fff;
  margin-bottom: 1rem;
  font-size: 35px;
  font-weight: 700;
  line-height: 1.3em;
}

.about-content p {
  margin-bottom: 2rem;
  color: #ccc;
  font-size: clamp(0.9rem, 2vw, 1.1rem);
}

.Fokus-kami {
  max-width: 1300px;
  margin: 20px auto;
  text-align: center;
  padding: 0 10px;
  box-sizing: border-box;
}

.Fokus-kami h1 {
  color: #fff;
  margin-bottom: 1rem;
  font-size: 35px;
  font-weight: 700;
  line-height: 1.3rem;
}

.fokus-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.fokus-item {
  padding: 20px;
  border-radius: 16px;
  width: 280px;
  text-align: center;
}
.fokus-item h3 {
  color: #fff;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}

.fokus-item img {
  width: 100px;
  height: 100px;
  margin-bottom: 15px;
  filter: brightness(0) invert(1);
}
@media (max-width: 979px) {
  .about-content h1 {
    font-size: 30px;
    line-height: 2.2rem;
  }

  .about-content p {
    font-size: 15px;
  }

  .fokus-kami h1 {
    font-size: 30px;
    line-height: 2.2rem;
  }

  .fokus-container {
    display: flex;
    justify-content:space-between;
    flex-wrap: nowrap;
    padding: 10px;
    overflow-x: hidden;
  }

  .fokus-item h3{
    color:#fff;
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }
  .fokus-item {
    padding: 20px;
    border-radius: 16px;
    width: 200px;
    text-align: center;
  }
  .fokus-item img {
    width: 70px;
    height: 70px;
  }
}
</style>
