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
            <ul class="px-3 my-color" v-if="data?.length">
              <li v-for="(item, index) in data" class="results-wrapper" :key="index">
                <a :href="item.link" class="fw-bold results" @click="setScroll(item.page,item.title)" :title="item.title">{{item.title}}</a>
                <span v-if="item.title.length>45">...</span>
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
import { ref} from "vue";
import Loader from '@/components/Loader2.vue'
import {useStore} from "vuex";
import { h, render } from 'vue';
import ProductPage from '@/views/Product.vue';
import FaqPage from '@/views/Faq.vue';
import CollaborationPage from '@/views/Collaboration.vue';
import ParticipantsPage from '@/views/Participants.vue';

export default {
  components:{Loader,},
  setup(){
    const isLoading = ref(false);
    const notFund = ref(false);
    const term = ref();
    const pagesSearchResult = ref([]);
    const data = ref([]);
    const store = useStore();
    const serverUrl = store.state.serverUrl;
    const storageUrl = store.state.storageUrl;
    const searchResult = ref([])//computed(() => store.state.searchResult);
    const searchPages = async () => {
      pagesSearchResult.value = [];
      const container = document.createElement('div'); // off-DOM
      document.body.appendChild(container);
      let pages = [[ProductPage,'/product'], [FaqPage,'/faq'],[CollaborationPage,'/collaboration'], [ParticipantsPage,'/participants']]
      pages.forEach((page)=>{
        render(h(page[0]), container);
        const titles = Array.from(container.querySelectorAll('h3,h4')).map(el => el.textContent);
        let x = [];
            titles.forEach((el)=>{
          if(el.match(term.value)){
            x.push({title: el, link:page[1], page:true}) ;
          }
        });
        pagesSearchResult.value = pagesSearchResult.value.concat(x);
      })
    }
    const getSearchResult = async () => {

      try {
        await searchPages();
        await store.dispatch('getSearchResult',term.value);
        searchResult.value = store.state.searchResult;
        data.value = searchResult.value.concat(pagesSearchResult.value);

        isLoading.value = false;
        if(data?.value.length===0){
          notFund.value = true;
        }
      } catch (error) {
        console.error('API call failed:', error);
      }

    }
    const setScroll=(page,title)=>{
      if (page){
        localStorage.setItem('searchScroll', title);
      }
    }
    const search = ()=>{
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
      isLoading,notFund,search, term, data,pagesSearchResult,setScroll
    }
  }
}
</script>

<style scoped>

.modal-content{
  height: 400px !important;
}
:deep(.results-wrapper) {
  width: 48ch;
  text-align: start !important;
}

:deep(.results) {
  width: 45ch;
  text-align: start !important;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: fade;
}
</style>