<template>
  <div id="carouselExampleAutoplaying" class="carousel carousel-light slide main-carousel " data-bs-ride="carousel" data-bs-interval="5000">
    <div class="carousel-inner">
      <div v-for="(slide,index) in data" :key="index" class="carousel-item">
        <a :href="slide.src" class="vh-100">
          <img :src="slide.src" class="" alt="copabee">
        </a>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script>
export default {
  name: "MainCarousel",
  setup(){
    const data = [
      {src:"/img/s5.jpg"},
      {src:"/img/banner1.png"},
      {src:"/img/banner3.jpg"},
      {src:"/img/banner2.jpg"},
    ]

    return{ data}
  }
}
</script>

<style scoped>
</style>