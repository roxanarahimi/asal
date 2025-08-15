<template>
  <div class="floating-buttons-wrapper">
    <div class="d-grid h-100 floating-buttons-inner">
    <div class="align-self-center d-flex">
<!--      <div class="circle"><a href=""><i class="bi bi-search text-dark fs-3"></i></a></div>-->
      <div class="circle c1"><a href="tel:09125802203"><i class="bi bi-telephone-fill text-info fs-4"></i></a></div>
      <div class="circle"><router-link to="/register"><i class="bi bi-person-fill text-danger fs-2"></i></router-link></div>
<!--      <div class="circle"><a href=""><img src="/img/uk.png" class="img-fluid" alt=""></a></div>-->
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FloatingBtns"
}
</script>

<style scoped>

</style>