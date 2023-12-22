<template>

 <div class="bg-black">
   <the-menu />
  <div class="">
    <router-view/>
  </div>
   <the-footer />
 </div>
</template>

<style>


</style>

<script>

import theMenu from '@/components/TheMenu.vue'
import theFooter from "@/components/TheFooter";

export default {
  components: {theFooter, theMenu},
}
</script>