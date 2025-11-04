<template>
  <div class="search-bar">
    <div class="search-row">
      <div class="search-input">
        <span class="icon">📍</span>
        <input
          type="text"
          placeholder="Kota"
          :value="modelValue"
          @input="$emit('update:modelValue', $event.target.value)"
        />
        <button class="btn-search">🔍</button>
      </div>

      <button class="btn-filter" @click="showFilter = !showFilter">
        ⚙️ Filter
      </button>
      
      <div v-if="showFilter" class="filter-panel">
        <h3>Batas Harga</h3>
        <div class="price-range">
            <input type="number" placeholder="Min" />
            <span>—</span>
            <input type="number" placeholder="Max" />
        </div>

        <h3>Penilaian</h3>
        <div class="ratings">
            <div class="rating-option" v-for="n in 5" :key="n">
            <span class="stars">
                <span v-for="i in 5" :key="i">
                {{ i <= (6 - n) ? '⭐' : '☆' }}
                </span>
            </span>
            <span>Ke atas</span>
            </div>
        </div>

        <button class="btn-apply">Terapkan</button>
        </div>

    </div>

    <div class="location-buttons">
      <button class="btn-location">📡 Lokasimu saat ini</button>
      <button class="btn-map">🗺 pilih lewat peta</button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  modelValue: String
})
defineEmits(['update:modelValue'])
</script>

<style scoped>
.search-bar {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
}

.search-row {
  display: flex;
  align-items: center;
  gap: 10px;
}

.search-input {
  display: flex;
  align-items: center;
  border: 1px solid #aaa;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  flex: 1;
}

.search-input input {
  flex: 1;
  border: none;
  outline: none;
  font-size: 1rem;
}

.btn-filter {
  border: 1px solid #999;
  background: transparent;
  border-radius: 6px;
  padding: 0.5rem 1rem;
  cursor: pointer;
}

.btn-filter:hover {
  background: rgba(0, 0, 0, 0.188);
}

.location-buttons {
  display: flex;
  gap: 1rem;
}

.btn-location,
.btn-map {
  border: 1px solid #ccc;
  border-radius: 15px;
  padding: 0.5rem 1rem;
  background: #fff;
  cursor: pointer;
}

.filter-panel {
  position: absolute;
  right: 0;
  top: 100%;
  background-color: #05496c;
  color: #fff;
  padding: 20px;
  border-radius: 8px;
  width: 300px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 100;
}

.filter-panel h3 {
  font-size: 1rem;
  margin-bottom: 10px;
}

.price-range {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
}

.price-range input {
  width: 80px;
  padding: 6px;
  border-radius: 4px;
  border: none;
  text-align: center;
}

.ratings {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.rating-option {
  display: flex;
  align-items: center;
  gap: 10px;
}

.stars {
  font-size: 1.2rem;
}

.btn-apply {
  background: #f89b2a;
  border: none;
  color: white;
  padding: 8px 20px;
  border-radius: 6px;
  cursor: pointer;
  margin-top: 15px;
  font-weight: bold;
}

</style>