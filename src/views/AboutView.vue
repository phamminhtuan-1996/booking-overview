<template>
  <div class="about">
    <h1>This is an about page</h1>
    <b-form-input v-model="text" placeholder="Enter your name" @keypress.enter="addItemForStore"></b-form-input>
  </div>
</template>
<script lang="ts">
import { ref } from 'vue';
import { useStore } from '@/pinia/store';

export default {
  setup() {
    const text = ref<string>('');
    const store = useStore();
    const addItemForStore = () => {
      store.addItem(text.value);
      text.value = '';
    }
    return {
      text,

      addItemForStore
    };
  }
}
</script>
