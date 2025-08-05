<template>
  <div>
    <div :id="'dropAreaContainer'+$props.index" class="dropAreaContainer position-relative"
         :class="{'dropAreaContainerHasError': hasError}" @dragover.prevent @drop.prevent="fileChanged($event, 'drop')">

      <div v-if="src" @click="clearImg" id="close"
           class="pointer close bg-danger rounded rounded-circle position-absolute"
           style=" font-size:17px;z-index: 100; top: 13px; right: 100px; width: 20px; height: 20px"><i
          class="bi bi-x"></i></div>
      <div :id="'dropArea'+$props.index" @click="clickLabel($event)" class="dropArea  text-center p-3 position-relative"
           :class="{'dropAreaHasError': hasError}">
        <img v-if="src" :src="src" class="src img-fluid " style="border-radius: 17px; width: 150px" alt="">
        <div class="position-relative" >
          <div class="label my-font ">
            <div class="text-center mx-auto" style="width: calc(100% - 80px)"> {{ $props.title }}</div>

            <div style="position: absolute; right:5px; top:0px">
              <img v-if="src" src="/img/check1.png" alt="">
              <img v-else src="/img/upload.png" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
    <input style="display:none !important" @change="fileChanged" :id="'dr'+$props.index" type="file">
    <input :id="'img'+index" type="hidden" v-model="src" required>
    <div id="image1Help" class="form-text error"></div>
  </div>
</template>

<script>
import {computed, onMounted, ref, watch} from "vue";

export default {
  name: "DropZone",
  props: ['title', 'index', 'hasError'],
  // emits:['hasError'],
  setup(_props) {
    const clickLabel = () => {
      if (src.value == null) {
        document.querySelector('#dr' + _props.index).click();
      }
    }

    const src = ref();
    const hasError = computed(() => _props.hasError);

    onMounted(() => {
      hasError.value = _props.hasError;
    })


    const fileChanged = (e, type) => {
      if (type == 'drop') {
        var file = e.dataTransfer.files[0];
      } else {
        var file = document.querySelector('#dr' + _props.index).files[0];
      }
      if (file) {
        document.querySelector('#dropAreaContainer' + _props.index).classList.remove('dropAreaContainerHasError')
        document.querySelector('#dropArea' + _props.index).classList.remove('dropAreaHasError')
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
          // console.log(reader.result);
          src.value = reader.result;
        };
        reader.onerror = function (error) {
          console.log('Error: ', error);
        };
      }

    }

    const clearImg = () => {
      document.querySelector('#dr' + _props.index).value = "";
      src.value = null;
      if (_props.hasError) {
        document.querySelector('#dropAreaContainer' + _props.index).classList.add('dropAreaContainerHasError')
        document.querySelector('#dropArea' + _props.index).classList.add('dropAreaHasError')
      }
    }
    return {
      clickLabel, fileChanged, src, clearImg, hasError
    }
  },

}
</script>

<style scoped>

</style>