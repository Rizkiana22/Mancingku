<template>
  <div class="equip-card">
    <h2>{{ title }}</h2>
    <div class="content">
      <img :src="image" :alt="title" class="equip-img" />
      <p>{{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "EquipmentCard",
  props: {
    title: String,
    image: String,
    description: String,
  },
};
</script>

<style scoped>
.equip-card {
  background: white;
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 25px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
}

.content {
  display: flex;
  align-items: flex-start;
  gap: 20px;
  margin-top: 10px;
}

.equip-img {
  width: 180px;
  height: auto;
  object-fit: contain;
}

h2 {
  font-size: 25px;
  font-weight:500;
}

p {
  font-size: 20px;
  line-height: 1.6;
  color: #333;
}

@media (max-width: 768px) {
  .content {
    flex-direction: column;
    align-items: center;
  }

  p {
    font-size: 15px;
    line-height: 1.5;
    color: #333;
    text-align: justify;
  }

  h2 {
    font-size: 18px;
    text-align: center;
  }

  .equip-img {
    width: 140px;
    height: auto;
    justify-content: center;
  }
}

</style>
