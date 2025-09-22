<template>
  <div v-if="data?.length === 1" class="bg-black banner text-center">
    <a :href="storageUrl+data[0]?.image" class="img-link h-100">
      <img :src="storageUrl+data[0]?.image" class="" alt="copabee">
    </a>
  </div>
  <div v-if="data?.length > 1" id="carouselExampleAutoplaying" class="carousel carousel-light slide main-carousel " data-bs-ride="carousel" data-bs-interval="5000">
    <div class="carousel-inner">
      <div v-for="(slide,index) in data" class="carousel-item" :class="{'active':index===0}" >
        <a :href="storageUrl+slide.image" class="img-link">
          <img :src="storageUrl+slide.image" class="" alt="copabee">
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
import {useStore} from "vuex";
import {computed, onMounted} from "vue";

export default {
  name: "MainCarousel",
  setup(){
    const data2 = [
      {src:"/img/s5.jpg"},
      {src:"/img/banner1.png"},
      {src:"/img/banner3.jpg"},
      {src:"/img/banner2.jpg"},
    ];
    const store = useStore();
    const serverUrl = store.state.serverUrl;
    const storageUrl = store.state.storageUrl;
    const getBanners = async () => {
      // await store.commit('getBanners');

        try {
          await store.dispatch('getBanners');
        } catch (error) {
          console.error('API call failed:', error);
        }

    }

    onMounted(() => {
      getBanners();
    });
    return {
      data: computed(()=>store.state.banners),
      store, storageUrl, serverUrl, getBanners,
      data2
    }
  }
}
</script>

<style scoped>
</style>