<template>
  <div class="hero-content">
    <h1>“Booking Tempat Pemancingan di Sekitar Anda”</h1>
    <p>
      Temukan pemancingan terdekat, lihat fasilitas dan harga, lalu pesan tempat
      dengan mudah
    </p>
    <button class="btn">Lihat</button>
  </div>
</template>

<style scoped>
.hero-content {
  width: 100%;
}

.hero-content h1 {
  color: #fff;
  margin-bottom: 1rem;
  font-size: clamp(1.8rem, 4vw, 3rem);
  font-weight: 700;
  line-height: 1.3em;
}

.hero-content p {
  margin-bottom: 2rem;
  color: #ccc;
  font-size: clamp(0.9rem, 2vw, 1.1rem);
}

.hero-content .btn {
  background-color: #da9723;
  padding: 0.8rem 1.5rem;
  border-radius: 5px;
  font-size: clamp(0.9rem, 2vw, 1.1rem);
}

@media (max-width: 768px) {
  .hero-content h1 {
    font-size: 1.8rem;
    line-height: 2.2rem;
  }

  .hero-content p {
    font-size: 1rem;
  }
}
</style>
