<template>
  <div class="modal fade" id="searchModal" tabindex="-1" aria-labelledby="searchModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content  bg-dark text-light">
        <div class="p-3 d-flex justify-content-between w-100">
          <span type="button" class=" text-light" data-bs-dismiss="modal" aria-label="Close"><i class="bi bi-x-lg"></i></span>
          <h1 class="modal-title fs-5" id="searchModalLabel">جستجو در کوپابی</h1>
        </div>
        <div class="modal-body">
          <div>
            <p>لطفا واژه مورد نظر خود را وارد کنید</p>
            <div class="input-group mb-3">
              <input id="search" @input="search" type="text" autocomplete="off" v-model="term" class="form-control  bg-dark text-light my-border" >
              <span class="input-group-text my-bg my-border" id="basic-addon2"><i class="bi bi-search"></i></span>
            </div>
            <ul class="px-3 my-color" v-if="searchResult?.length">
              <li v-for="(item, index) in searchResult" :key="index">
                <a :href="item.link" class="fw-bold">{{item.title}}</a>
              </li>
            </ul>

              <div class="w-100">
                <loader v-if="isLoading" />
                <p v-if="notFund === true">موردی پیدا نشد.</p>
              </div>

          </div>
        </div>

      </div>
    </div>
  </div>
</template>
<script>
import {computed, onMounted, ref} from "vue";
import Loader from '@/components/Loader2.vue'
import {useStore} from "vuex";

export default {
  components:{Loader,},
  setup(){
    const isLoading = ref(false);
    const notFund = ref(false);
    const term = ref();
    const store = useStore();
    const serverUrl = store.state.serverUrl;
    const storageUrl = store.state.storageUrl;
    const searchResult = ref();
    const getSearchResult = async () => {
      try {
        await store.dispatch('getSearchResult',term.value);
        searchResult.value = store.state.searchResult;
        isLoading.value = false;
        if(searchResult?.value.length===0){
          notFund.value = true;
        }
      } catch (error) {
        console.error('API call failed:', error);
      }

    }


    const search = ()=>{
      //axios => term.value
      searchResult.value = [];
      isLoading.value = true;
      notFund.value = false;
      if (term.value === ''){
        isLoading.value = false;
      }else{
        getSearchResult();
      }

    }
    return{
      searchResult,
      store, storageUrl, serverUrl, getSearchResult,
      isLoading,notFund,search, term
    }
  }
}
</script>

<style scoped>

.modal-content{
  height: 400px !important;
}
</style>