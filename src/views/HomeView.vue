<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
    <ul>
      <li v-for="(item, index) in store.item" :key="index">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
// import { ref, watch, onMounted } from 'vue';
import { useStore } from '@/pinia/store';
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
  },
  setup() {
    const store = useStore();
    return {
      store,
    };
  }
};
</script>
