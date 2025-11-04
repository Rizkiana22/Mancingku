<template>
  <div class="bait-card">
    <h2>{{ title }}</h2>
    <div class="content">
      <img :src="image" :alt="title" class="bait-img" />
      <p>{{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaitCard",
  props: {
    title: String,
    image: String,
    description: String
  }
};
</script>

<style scoped>
.bait-card {
  background: white;
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 25px;
  box-shadow: 0px 4px 12px rgba(0,0,0,0.1);
}

.content {
  display: flex;
  align-items: flex-start;
  gap: 20px;
  margin-top: 10px;
}

.bait-img {
  width: 160px;
  height: auto;
  border-radius: 10px;
  object-fit: cover;
}

h2 {
  font-size: 25px;
  font-weight: bold;
}

p {
  font-size: 20px;
  line-height: 1.6;
}
</style>
