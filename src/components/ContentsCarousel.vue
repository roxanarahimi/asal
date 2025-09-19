<template>
  <div v-if="data?.length" :class="{'bg-black':category==1,'bg-gray py-3': category==2}">
    <h1 class="my-title my-4 text-center fw-bold my-font my-color" >{{ title}}</h1>
    <div class="px-5 mx-auto mt-5 contents-carousel">
      <div class="d-none d-lg-block mb-5">
        <Carousel class="" :itemsToShow="4.0" :itemsToScroll="1" :wrapAround="true" :snapAlign="'start'"
                  :transition="500">
          <slide v-for="(item,index) in data" :key="index">
            <router-link class="p-2" :to="'/content/'+item.slug">
              <div class="w-100 h-100" style="margin: 1px">
                <div class="card bg-light">
                  <div class="card-body">
                    <img :src="panelUrl+item.image" alt="" class="card-img">
                    <h3 class="mt-3 text-start">{{ item.title }}</h3>
                    <small class="d-block text-end">1404/05/03</small>
                  </div>
                </div>
              </div>

            </router-link>
          </slide>
          <template #addons>
            <navigation/>
            <!--          <pagination />-->
          </template>
        </carousel>
      </div>
      <div class="d-none d-md-block d-lg-none mb-5">
        <Carousel class="" :itemsToShow="3.0" :itemsToScroll="1" :wrapAround="true" :snapAlign="'start'"
                  :transition="500">
          <slide v-for="(item,index) in contents" :key="index">
            <router-link class="p-1" :to="'/content/'+item.slug">
              <div class="w-100 h-100" style="margin: 1px">
                <div class="card bg-light">
                  <div class="card-body">
                    <img :src="item.image" alt="" class="card-img">
                    <h3 class="mt-3 text-start">{{ item.title }}</h3>
                    <small class="d-block text-end">1404/05/03</small>
                  </div>
                </div>
              </div>

            </router-link>
          </slide>
          <template #addons>
            <navigation/>
            <!--          <pagination />-->
          </template>
        </carousel>
      </div>
      <div class="d-none d-sm-block d-md-none mb-5">
        <Carousel class="" :itemsToShow="2.0" :itemsToScroll="1" :wrapAround="true" :snapAlign="'start'"
                  :transition="500">
          <slide v-for="(item,index) in contents" :key="index">
            <router-link class="p-1" :to="'/content/'+item.slug">
              <div class="w-100 h-100" style="margin: 1px">
                <div class="card bg-light">
                  <div class="card-body">
                    <img :src="item.image" alt="" class="card-img">
                    <h3 class="mt-3 text-start">{{ item.title }}</h3>
                    <small class="d-block text-end">1404/05/03</small>
                  </div>
                </div>
              </div>

            </router-link>
          </slide>
          <template #addons>
            <navigation/>
            <!--          <pagination />-->
          </template>
        </carousel>
      </div>
      <div class="d-sm-none   mb-5">
        <Carousel class="" :itemsToShow="1" :itemsToScroll="1" :wrapAround="true" :snapAlign="'start'" :transition="500">
          <slide v-for="(item,index) in contents" :key="index">
            <router-link class="" :to="'/content/'+item.slug">
              <div class="w-100 h-100" style="margin: 1px">
                <div class="card border-0 bg-light ms-1">
                  <div class="card-body">
                    <img :src="item.image" alt="" class="card-img">
                    <b class="d-block mt-3 mb-2 text-start">{{ item.title }}</b>
                    <div class="d-flex justify-content-between text-black-50" style="font-size: 13px">
                      <small class="d-block text-end">1404/05/03</small>
                      <div class="d-flex" dir="rtl">
                        <small class="d-block me-2"><i class="bi bi-hand-thumbs-up-fill"></i> 181</small>
                        <small class="d-block"><i class="bi bi-eye-fill"></i> 325</small>
                      </div>

                    </div>
                  </div>
                </div>
              </div>

            </router-link>
          </slide>
          <template #addons>
            <navigation/>
            <!--          <pagination />-->
          </template>
        </carousel>

      </div><!-- -->
    </div>

  </div>
</template>

<script>
import 'vue3-carousel/dist/carousel.css';
import {Carousel, Slide, Pagination, Navigation} from 'vue3-carousel';
import {computed, onMounted, ref} from "vue";
import {useStore} from 'vuex'

export default {
  name: 'ContentsCarousel',
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  props: ['title','category'],
  setup(_props) {

    // const data = ref([]);
    const store = useStore();
    // const panelUrl = store.state.panelUrl;
    const panelUrl = 'http://localhost:8000/storage/';
    const contents = ref([]);
    const getContents = () => {
      store.commit('getContents',_props.category);
    }

    onMounted(() => {
      // getContents();
    });
    return {
      data: computed(()=>store.state.contents),
      store, panelUrl, contents, getContents,
    }
  }
}


</script>

<style scoped>

:deep(.page-numbers) {
  display: block;
  padding: 5px 15px !important;
  border: 1px solid lightgray;
  border-radius: 2px;
  margin: 1px;

}

:deep(.page-numbers.current) {
  background-color: lightblue;
  color: white;

}


:deep(.carousel__slide) {

  z-index: 1 !important;
}

:deep(.carousel) {
  /*margin-bottom: 100px !important;*/
}

:deep(.carousel__viewport) {
  max-height: 700px !important;
}

:deep(.carousel__slide) {
  /*height: 350px !important;*/
  transition: 0.5s ease;

}

:deep(.carousel__slide .carousel__slide--visible .carousel__slide--active) {
  z-index: 1 !important;
}

:deep(.carousel__pagination-button) {
  width: 10px !important;
  height: 10px !important;
  border-radius: 50% !important;
  margin: 5px !important;
  background: gray !important;
}


:deep(.carousel__pagination-button:hover::after),
:deep(.carousel__pagination-button--active::after),
:deep(.carousel__pagination-button:hover),
:deep(.carousel__pagination-button--active) {
  background-color: #F7941D !important;
}

:deep(.carousel__pagination-button::after) {
  display: block;
  content: none !important;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: gray !important;
}

:deep(.carousel__prev),
:deep(.carousel__next) {
  cursor: pointer;
  /*background-color: #8f8f8f;*/
  background-color: #F7941D;
  color: white !important;
  border-radius: 50% !important;
  /*filter: drop-shadow(1px 1px 10px rgba(255, 255, 255, 1));*/

}


:deep(.carousel__prev) {
  left: -30px !important;
  top: calc(50% - 7px) !important;
}

:deep(.carousel__next ) {
  right: -30px !important;
  top: calc(50% - 7px) !important;

}

:deep(.slideTitle) {
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 0.45);
  height: 80px;
  display: grid;
  /*opacity: 0;*/
  transition: 0.5s ease;
  /*color:#F7941D ;*/
}

:deep(.slideContainer) {
  height: 100% !important;
}

:deep(.slideTitle h4) {
  align-self: center;
  margin: 5px !important;
  /*color:#F7941D;*/
  color: black;
  text-shadow: 2px 1px 10px #F7941D;

  /*font-weight: bolder;*/
  font-family: IranYekanExtraBold;
}

:deep(.slideProductImg) {
  opacity: 0;
  transition: 1s ease;
  position: absolute;
  top: 0;
  left: 0;
  background-color: black;
}

:deep(.slideContainer:hover .slideProductImg) {
  opacity: 1;
}


:deep(.bg-gray3) {
  background-color: whitesmoke;
  margin: 2px;
  width: 100% !important;
  height: 100% !important;
}
</style>