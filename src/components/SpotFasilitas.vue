<template>
  <div class="fasilitas">
    <h3>Fasilitas</h3>
    <div class="fasilitas-list">
      <div v-for="item in spot.fasilitas" :key="item.nama" class="fasilitas-item">
        <img :src="item.icon" :alt="item.nama" class="icon" />
        <span>{{ item.nama }}</span>
      </div>
    </div>
  </div>

  <div class="operasional">
        <h3>Jam Operasional</h3>
        <p>{{ spot.jam_operasional }}</p>
        <p>Harga per jam: <b>Rp {{ spot.harga }}</b></p>
        <!-- <button class="btn-pesan">Pesan Sekarang</button> -->
        <router-link :to="`/bookingpage/${spot.id}`" class="btn-pesan">
          Pesan Sekarang
        </router-link>
      </div>
</template>

<script setup>
defineProps({
  spot : {
    type: Object,
    required: true
  }
})
</script>

<style scoped>
  
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

.fasilitas-list {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.fasilitas-item {
  display: flex;
  align-items: center;
  gap: 8px;
  background: #f5f5f5;
  padding: 6px 10px;
  border-radius: 8px;
}

.fasilitas-item .icon {
  width: 24px;
  height: 24px;
}


/* Tombol */
.btn-pesan {
  text-decoration: none;
  font-size: 14px;
  background-color: #ff8800;
  border: none;
  color: white;
  padding: 7px 15px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 500;
  transition: background-color 0.2s;
}

.btn-pesan:hover {
  background-color: #e57200;
}
</style>