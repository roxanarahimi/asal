<template>
<div v-if="data?.id">
  <h3 class="my-color">{{ data.title }}</h3>
  <img :src="storageUrl+data.image" alt="">

  <div>
    { !! data.text !!}
  </div>
</div>
</template>

<script>
import {useStore} from "vuex";
import {useRoute} from "vue-router/dist/vue-router";
import {computed, onMounted} from "vue";

export default {
  name: "Content",
  setup() {
    const store = useStore();
    const route = useRoute();
    const slug = route.params.slug;
    const serverUrl = store.state.serverUrl;
    const storageUrl = store.state.storageUrl;
    const getContent = async () => {
      try {
        await store.dispatch('getContent', slug);
      } catch (error) {
        console.error('API call failed:', error);
      }
    }
    onMounted(() => {
      getContent();
    });
    return {
      data: computed(() => store.state.content),
      store, storageUrl, serverUrl, getContent, route, slug
    }
  }

}
</script>

<style scoped>

</style>