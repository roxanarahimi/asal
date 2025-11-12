<template>
<div class="container-fluid p-0 m-0 banners">
  <div v-if="data?.length === 1" class="bg-black  text-center">
    <a :href="data[0]?.link || storageUrl+data[0]?.image" class="img-link">
      <img :src="storageUrl+data[0]?.image" :height="height" :width="width" alt="copabee">
    </a>
  </div>
  <div v-if="data?.length > 1" id="myc"  class="mt-2 carousel carousel-light slide" data-bs-ride="carousel" data-bs-interval="4000" data-bs-pause="false">
    <div class="carousel-inner">
      <div v-for="(slide,index) in data" class="carousel-item banners" :class="{'active':index===0}" >
        <a :href="slide.link || storageUrl+slide.image" class="img-link">
          <img :src="storageUrl+slide.image" :height="height" :width="width" alt="copabee">
        </a>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#myc" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#myc" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</div>
</template>

<script>
import {useStore} from "vuex";
import {computed, onMounted} from "vue";

export default {
  name: "MainCarousel",
  setup(){
    const store = useStore();
    const serverUrl = store.state.serverUrl;
    const storageUrl = store.state.storageUrl;
    const width = computed(()=>window.innerWidth>=700? 'auto': '100%');
    const height = computed(()=>window.innerWidth>=700? '100%': 'auto');
    const getBanners = async () => {
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
      store, storageUrl, serverUrl, getBanners,width,height
    }
  }
}
</script>

<style scoped>
img{
  max-width:100%;
  max-height: 100%;
}
</style>