<template>
<div v-if="data" class="content my-padding">
  <h2 class="my-color my-5 fw-bold">{{ data.title }}</h2>
  <img :src="storageUrl+data.image" style="max-width: 500px" alt="">

  <div v-html="data.text" class="text-white p-3"></div>
</div>
  <div v-if="notFund"><p class="m-5 text-white">این مطلب وجود ندارد</p></div>
  <div v-if="isLoading"><loader /></div>
</template>

<script>
import {useStore} from "vuex";
import {useRoute} from "vue-router/dist/vue-router";
import {computed, onMounted, ref} from "vue";
import Loader from "@/components/Loader2.vue"

export default {
  name: "Content",
  components:{ Loader},
  setup() {
    const store = useStore();
    const route = useRoute();
    const slug = route.params.slug;
    const serverUrl = store.state.serverUrl;
    const storageUrl = store.state.storageUrl;
    const isLoading = ref(true);
    const notFund = ref(false);
    const getContent = async () => {
      try {
        await store.dispatch('getContent', slug+'ff');
        if(!store.state.content){
          notFund.value = true;
        }
        isLoading.value = false;

      } catch (error) {
        console.error('API call failed:', error);
      }
    }
    onMounted(() => {
      getContent();
    });
    return {
      data: computed(() => store.state.content),
      store, storageUrl, serverUrl, getContent, route, slug, isLoading, notFund
    }
  }

}
</script>

<style scoped>
:deep(*){ font-family: IranSans !important}
:deep(a){ color:deepskyblue; cursor: pointer}
:deep(.loader-center){ margin-top: -100px}

</style>