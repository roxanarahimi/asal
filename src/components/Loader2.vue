<template>
  <div class=" text-center loader-wrapper">
    <div class=" text-center loader-inner">
    </div>
    <div class="loader-center">
      <img src="/img/l2.png" class="loader" alt="">
      <p class="text-light text-center" style="margin-top: -50px">درحال بارگذاری...</p>
    </div>

  </div>
</template>

<script>
export default {
  name: "Loader2"
}
</script>

<style scoped>

.loader-wrapper {
  position: static;
  width: inherit;
  height: inherit;
  z-index: 200;
  transition: all 3s ease;
  /*background: #000000;*/
  /*background: radial-gradient(circle,rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.90) 70%, transparent 100%);*/
}

.loader-inner {
  /*position: relative;*/
  width: 100%;
  height: 100%;
  z-index: 200;
  transition: all 3s ease;
  /*background: url('/img/Hive.svg') center bottom no-repeat;*/
  /*background-size: cover;*/
  opacity: 0.2;
}

.loader-center {
  position: fixed;
  top: 100px;
  left: calc(50vw - 75px);
  filter: drop-shadow(1px 1px 12px rgba(255, 255, 255, 0.5));
  transition: all 5s ease;
}

.loader {
  width: 150px;
  height: 38px;
  margin-top: 45vh;
  filter: drop-shadow(1px 1px 12px rgba(255, 255, 255, 0.5));
  -webkit-animation: circle 3s infinite linear;
  transition: all 5s ease;
}

</style>