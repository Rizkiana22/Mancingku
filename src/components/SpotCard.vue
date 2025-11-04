<template>
  <div class="spot-card">
    <img :src="spot.img" alt="spot" class="spot-img" />

    <div class="spot-details">
      <h3>{{ spot.name }}</h3>
      <p class="address">📍 {{ spot.address }}</p>

      <div class="rating">
        <span>{{ spot.rating }}</span>
        <span class="stars">⭐️⭐️⭐️⭐️⭐️</span>
      </div>

      <p class="availability">Tersisa {{ spot.remaining }} kursi!</p>
    </div>

    <div class="spot-price">
      <p>{{ spot.price }}</p>

      <router-link :to="`/spot/${spot.id}`" class="btn-pilih">
        Pilih
      </router-link>
    </div>
  </div>
</template>

<script setup>
defineProps({
  spot: Object
})
</script>

<style scoped>
.spot-card {
  display: flex;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  overflow: hidden;
}

.spot-img {
  width: 180px;
  height: 130px;
  object-fit: cover;
}

.spot-details {
  flex: 1;
  padding: 0.8rem 1rem;
}

.spot-price {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  background: #f9f9f9;
  padding: 1rem;
  min-width: 130px;
}

.btn-pilih {
  background: #d97706;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 0.5rem 1rem;
  margin-top: 0.5rem;
  cursor: pointer;
  text-decoration: none;
}

.btn-pilih:hover {
  background: #b45309;
}
</style>