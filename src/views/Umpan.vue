<template>
  <main class="umpan-page">
  <Navbar />
  <div class="container">
    <h1>Macam - macam umpan</h1>

    <BaitCard
      title="Cacing tanah"
      image="https://png.pngtree.com/png-vector/20241014/ourmid/pngtree-earthworm-on-transparent-background-png-image_14088640.png"
      description="Cacing tanah adalah umpan alami favorit untuk ikan air tawar seperti mas, lele, mujair, dan nila. Aromanya kuat dan gerakannya hidup sehingga mudah menarik ikan. Gunakan segar dan tempel di kail sesuai ukuran ikan target."
    />

    <BaitCard
      title="Kroto"
      image="https://radarlambar.bacakoran.co/upload/a0e48586c19e20df487d88b39ea565d1.jpg"
      description="Kroto, telur semut rangrang, populer untuk ikan mas, nila, mujair, dan lele. Aromanya kuat, teksturnya kecil, bisa dipakai langsung di kail atau dicampur pelet/adonan umpan."
    />
  </div>
  </main>
</template>

<script>
import BaitCard from "@/components/BaitCard.vue";

export default {
  name: "BaitView",
  components: { BaitCard }
};
</script>

<style scoped>
.umpan-page{
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
  font-weight: bold;
  color: rgb(0, 0, 0);
  margin-bottom: 30px;
}

@media (max-width:768px) {
  h1{
      font-size: 20px;
    color: rgb(0, 0, 0);
    font-weight: bold;
    margin-bottom: 30px;
    text-align: center;
  }
}
</style>
