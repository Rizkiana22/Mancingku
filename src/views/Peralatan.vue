<template>
  <main class="peralatan-page">
    <Navbar />
    <div class="container">
      <h1>Macam - macam Alat Pancing</h1>

      <EquipmentCard
        title="Joran & Reel Spinning"
        image="https://pfluegerfishing.com/cdn/shop/files/Pflueger_PresidentSpinningCombo_20_alt3.jpg?v=1724242527"
        description="Joran spinning ini ringan, sensitif, dan kuat, ideal untuk memancing di kolam ikan. Cocok untuk pemula maupun pemancing berpengalaman. Rekomendasi kami adalah Maguro Extrim Viper 180 dan TA Reel Spinning 5.5:1 – D3000."
      />

      <EquipmentCard
        title="Joran & Reel Baitcasting"
        image="https://img.lazcdn.com/g/ff/kf/Sb0ad60489d6547fb8f5e2ffe79cc17d0f.jpg_720x720q80.jpg"
        description="Joran baitcasting dirancang untuk memancing dengan presisi tinggi dan kekuatan besar, ideal untuk ikan besar dan teknik lempar jauh. Cocok untuk memancing di danau, sungai, maupun laut. Rekomendasi kami: Daido Athena III Pro dan Zorro Emperor."
      />

      <EquipmentCard
        title="Joran & Reel Teleskopik"
        image="https://down-id.img.susercontent.com/file/id-11134207-7rbkd-m6ht6kh9uj5808"
        description="Joran teleskopik dirancang agar ringan, ringkas, dan mudah dibawa, sehingga sangat ideal untuk pemancing yang sering bepergian. Jenis joran ini cocok digunakan di berbagai lokasi seperti kolam, sungai, hingga tepi danau. Meski bentuknya portabel, joran teleskopik tetap memiliki kekuatan yang baik untuk pemancing pemula maupun menengah. Rekomendasi dari kami untuk joran teleskopik adalah Pioneer Carbon Telescopic Rod dan Maguro Traveler Series."
      />
    </div>
  </main>
</template>

<script>
import EquipmentCard from "@/components/EquipmentCard.vue";
import Navbar from "@/components/Navbar.vue";

export default {
  name: "EquipmentView",
  components: { EquipmentCard },
};
</script>

<style scoped>
.peralatan-page {
  padding: 2rem 4vw;
  background: #fff;
}
.container {
  max-width: 1000px;
  margin: auto;
  padding: 10px 20px;
}

h1 {
  font-size: 30px;
  color: rgb(0, 0, 0);
  font-weight: bold;
  margin-bottom: 30px;
}

@media (max-width: 768px) {
  h1 {
    font-size: 20px;
    color: rgb(0, 0, 0);
    font-weight: bold;
    margin-bottom: 30px;
    text-align: center;
  }
}
</style>
