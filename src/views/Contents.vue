<template>
  <h1 class="fw-bold my-font my-color ms-4 mt-5" v-if="id == 1">تازه های زنبور داری</h1>
  <h1 class="fw-bold my-font my-color ms-4 mt-5" v-if="id == 2">اخبار و رویداد ها</h1>
  <div v-if="data?.length" class="row p-5">
    <div v-for="(item, index) in data" :key="index" class="col-sm-6 col-md-4 col-xl-3 mb-3">
      <router-link :to="'/content/'+item.slug" class="h-100">
        <div class="card bg-transparent my-border rounded h-100">
          <div class="card-body text-white d-grid">
            <img :src="storageUrl+item.image" class="w-100 rounded-top-2 border border-white mb-3" alt="">
            <p class="align-self-start">{{ item.title }}</p>
            <div class="align-self-end d-flex justify-content-end">
              <small>{{ item.created_at }}</small>
            </div>
          </div>
        </div>
      </router-link>
    </div>
  </div>
  <div v-if="notFund"><p class="m-5 text-white">مطلبی وجود ندارد</p></div>
  <div v-if="isLoading"><loader /></div>
</template>

<script>
import {useStore} from "vuex";
import {computed, onMounted, ref} from "vue";
import {useRoute} from "vue-router/dist/vue-router";
import Loader from "@/components/Loader2.vue";

export default {
  name: "Contents",
  components: {Loader},
  setup() {
    const store = useStore();
    const route = useRoute();
    const id = route.params.id;
    const serverUrl = store.state.serverUrl;
    const storageUrl = store.state.storageUrl;
    const isLoading = ref(true);
    const notFund = ref(false);
    const getContents = async () => {
      try {
        await store.dispatch('getContents', id);
        if(!store.state.contents.length){
          notFund.value = true;
        }
        isLoading.value = false;

      } catch (error) {
        console.error('API call failed:', error);
      }
    }
    onMounted(() => {
      getContents();
    });
    return {
      data: computed(() => store.state.contents),
      store, storageUrl, serverUrl, getContents, route, id, isLoading, notFund
    }
  }
}
</script>

<style scoped>
:deep(.loader-center){ margin-top: -100px}
</style>