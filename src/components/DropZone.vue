<template>
  <div class="bg-dark rounded-4 ">
    <div
        :id="'dropAreaContainer' + index"
        class="dropAreaContainer position-relative"
        :class="{ dropAreaContainerHasError: hasError }"
        @dragover.prevent
        @drop.prevent="fileChanged($event, 'drop')"
    >
      <!-- Clear all button -->
      <div
          v-if="files.length"
          @click="clearAll"
          class="pointer close bg-danger rounded-circle position-absolute"
          style="font-size:17px; z-index:100; top:13px; right:100px; width:20px; height:20px"
      >
        <i class="bi bi-x"></i>
      </div>

      <!-- Drop area -->
      <div
          :id="'dropArea' + index"
          @click="clickLabel"
          class="dropArea text-center p-3 position-relative"
          :class="{ dropAreaHasError: hasError }"
      >
        <!-- Image previews -->
        <div v-if="files.length" class="d-flex flex-wrap justify-content-center gap-2">
          <div
              v-for="(file, i) in files"
              :key="i"
              class="position-relative"
              style="width:150px"
          >
            <img
                :src="file.preview"
                class="img-fluid rounded"
                style="border-radius:17px; width:150px"
                alt="Preview"
            />
            <div
                class="bg-danger rounded-circle position-absolute pointer d-flex align-items-center justify-content-center"
                style="top:5px; right:5px; width:20px; height:20px"
                @click.stop="removeFile(i)"
            >
              <i class="bi bi-x text-white" style="font-size:12px"></i>
            </div>
          </div>
        </div>

        <!-- Label area -->
        <div class="position-relative mt-3" v-if="!files.length">
          <div class="label my-font">
            <div class="text-center mx-auto" style="width:calc(100% - 80px)">
              {{ title }}
            </div>
            <div style="position:absolute; right:5px; top:0px">
              <img src="/img/upload.png" alt="Upload Icon" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Hidden file input -->
    <input
        style="display:none !important"
        type="file"
        :id="'dr' + index"
        multiple
        accept="image/jpeg,image/png"
        @change="fileChanged"
    />

    <!-- Hidden model -->
    <input :id="'img' + index" type="hidden" v-model="fileValues" required />


  </div>
  <!-- Error message -->
  <div v-if="errorMsg" class="form-text text-danger mt-2">{{ errorMsg }}</div>
</template>

<script setup>
import { ref, computed } from 'vue';
const mx = 600;//kB
const MAX_SIZE = mx * 1024; // to Bytes
const ALLOWED_TYPES = ['image/jpeg', 'image/png'];

const props = defineProps({
  title: String,
  index: Number,
  hasError: Boolean,
});

const files = ref([]);
const errorMsg = ref('');
const hasError = computed(() => props.hasError);
const fileValues = ref('');
const emit = defineEmits(['update:files'])
const clickLabel = () => {
  document.querySelector('#dr' + props.index).click();
};

const fileChanged = (e, type) => {
  let newFiles = [];

  if (type === 'drop') {
    newFiles = Array.from(e.dataTransfer.files);
  } else {
    newFiles = Array.from(e.target.files);
  }

  errorMsg.value = ''; // clear previous errors

  newFiles.forEach((file) => {
    // Validation
    if (!ALLOWED_TYPES.includes(file.type)) {
      errorMsg.value = 'فرمت تصاویر باید jpg یا png باشد.';
      return;
    }
    if (file.size > MAX_SIZE) {
      errorMsg.value = 'حجم هر تصویر باید کمتر از '+mx+' KB باشد.';
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      files.value.push({
        file,
        preview: event.target.result,
      });
      updateHiddenInput();
    };
    reader.readAsDataURL(file);
  });

  removeErrorState();
};

const removeFile = (i) => {
  files.value.splice(i, 1);
  updateHiddenInput();

  if (!files.value.length && hasError.value) {
    addErrorState();
  }
};

const clearAll = () => {
  files.value = [];
  document.querySelector('#dr' + props.index).value = '';
  updateHiddenInput();

  if (hasError.value) addErrorState();
};

const updateHiddenInput = () => {
  fileValues.value = files.value.map(f => f.preview).join(',');
  emit('update:files', files.value.map(f => f.file)); // ✅ emit actual File objects
};
const removeErrorState = () => {
  document
      .querySelector('#dropAreaContainer' + props.index)
      ?.classList.remove('dropAreaContainerHasError');
  document
      .querySelector('#dropArea' + props.index)
      ?.classList.remove('dropAreaHasError');
};

const addErrorState = () => {
  document
      .querySelector('#dropAreaContainer' + props.index)
      ?.classList.add('dropAreaContainerHasError');
  document
      .querySelector('#dropArea' + props.index)
      ?.classList.add('dropAreaHasError');
};
</script>

<style scoped>
.dropAreaContainer {
  border: 2px dotted #F7941D;
  border-radius: 15px;
  padding: 10px;
  transition: 0.3s;
}

.dropAreaContainerHasError {
  border-color: red;
}

.dropArea {
  cursor: pointer;
  border-radius: 10px;
}

.dropAreaHasError {
  background: #ffe6e6;
}

.pointer {
  cursor: pointer;
}
</style>
