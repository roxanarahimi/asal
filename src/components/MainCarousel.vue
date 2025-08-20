<template>
  <div id="carouselExampleAutoplaying" class="carousel carousel-dark slide" data-bs-ride="carousel" data-bs-interval="5000">
    <div class="carousel-inner">
      <div class="carousel-item active" >
        <a href="/img/banner3.jpg">
          <img src="/img/banner3.jpg" class="d-block w-100" alt="copabee">
        </a>
      </div>
      <div class="carousel-item">
        <a href="/img/banner2.jpg">
          <img src="/img/banner2.jpg" class="d-block w-100" alt="copabee">
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
  name: "MainCarousel"
}
</script>

<style scoped>

</style>