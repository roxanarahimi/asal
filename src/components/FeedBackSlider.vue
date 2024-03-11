<template>
  <div class="px-5 mx-auto">
    <div class="d-none d-lg-block productSlider mb-5">
      <Carousel class="" :itemsToShow="3.0" :itemsToScroll="1" :wrapAround="true" :snapAlign="'start'"
                :transition="500">
        <slide v-for="(item,index) in data" :key="index">

          <router-link :to="'/recipe/'+item.article_id">
            <div class="w-100 h-100" style="margin: 1px">
              <div class="w-100 h-100">
                <a class="shadow-sm rounded" style="overflow: hidden;">
                  <div class="slideContainer" style="position: relative">
                    <div class="w-100 d-grid h-100">
                      <img style="align-self:center !important;"
                           :src="panelUrl+item.image" class="mx-auto  rounded img-fluid w-100"
                           alt="">
                    </div>
                    <div class="w-100 h-100 slideProductImg">
                      <img style="align-self:center !important; height: 80% "
                           :src="panelUrl+item.article.product.image"
                           class="img-fluid mx-auto  rounded img-fluid" alt="">

                    </div>
                    <div class="slideTitle text-center text-light">
                      <h4>
                        {{ item.article?.title }}
                        <br>
                        با {{ item.article?.product?.title }} الیت
                      </h4>

                    </div>
                  </div>
                </a>
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
    <div class="d-none d-md-block d-lg-none productSlider mb-5">
      <Carousel class="" :itemsToShow="2.0" :itemsToScroll="1" :wrapAround="true" :snapAlign="'start'"
                :transition="500">
        <slide v-for="(item,index) in data" :key="index">

          <router-link :to="'/recipe/'+item.article_id">
            <div class="w-100 h-100" style="margin: 1px">
              <div class="w-100 h-100">
                <a class="shadow-sm rounded" style="overflow: hidden;">
                  <div class="slideContainer" style="position: relative">
                    <div class="w-100 d-grid h-100">
                      <img style="align-self:center !important;"
                           :src="panelUrl+item.image" class="mx-auto  rounded img-fluid w-100"
                           alt="">
                    </div>
                    <div class="w-100 h-100 slideProductImg">
                      <img style="align-self:center !important; height: 80% "
                           :src="panelUrl+item.article.product.image"
                           class="img-fluid mx-auto  rounded img-fluid" alt="">

                    </div>
                    <div class="slideTitle text-center text-light">
                      <h4>
                        {{ item.article?.title }}
                        <br>
                        با {{ item.article?.product?.title }} الیت
                      </h4>

                    </div>
                  </div>
                </a>
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
    <div class=" d-md-none productSlider mb-5">
      <Carousel class="" :itemsToShow="1.0" :itemsToScroll="1" :wrapAround="true" :snapAlign="'start'"
                :transition="500">
        <slide v-for="(item,index) in data" :key="index">

          <router-link :to="'/recipe/'+item.article_id">
            <div class="w-100 h-100" style="margin: 1px">
              <div class="w-100 h-100">
                <a class="shadow-sm rounded" style="overflow: hidden;">
                  <div class="slideContainer" style="position: relative">
                    <div class="w-100 d-grid h-100">
                      <img style="align-self:center !important;"
                           :src="panelUrl+item.image" class="mx-auto  rounded img-fluid w-100"
                           alt="">
                    </div>
                    <div class="w-100 h-100 slideProductImg">
                      <img style="align-self:center !important; height: 80% "
                           :src="panelUrl+item.article.product.image"
                           class="img-fluid mx-auto  rounded img-fluid" alt="">

                    </div>
                    <div class="slideTitle text-center text-light">
                      <h4>
                        {{ item.article?.title }}
                        <br>
                        با {{ item.article?.product?.title }} الیت
                      </h4>

                    </div>
                  </div>
                </a>
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
  </div>
</template>

<script>
import 'vue3-carousel/dist/carousel.css';
import {Carousel, Slide, Pagination, Navigation} from 'vue3-carousel';
import {computed, onMounted, ref} from "vue";
import {useStore} from 'vuex';

export default {
  name: 'FeedBackSlider',
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  props: [],
  setup(_props) {
    const data = ref([]);
    // const store = useStore();
    // const panelUrl = store.state.panelUrl;
    // const getData = () => {
    //   store.commit('getFoodSlider');
    // }
    onMounted(() => {
      // getData();
    });
    return {
      // getData,
      // store,panelUrl,
      data,

      // data: computed(()=>store.state.foodSlider),
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
  background-color: red !important;
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
  background-color: red !important;
  color: white !important;
  border-radius: 50% !important;
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
  background-color: rgba(0, 0, 0, 0.29);
  height: 80px;
  display: grid;
  /*opacity: 0;*/
  transition: 0.5s ease;

}

:deep(.slideContainer) {
  height: 100% !important;
}

:deep(.slideTitle h4) {
  align-self: center;
  margin: 5px !important;
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