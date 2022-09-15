<template>
  <NavigationHeaderVue v-if="hasLogin" />
  <main>
    <router-view/>
  </main>
</template>
<script lang="ts">
import { ref, onMounted, watch } from 'vue';
import { useStore } from '@/pinia/store';
import NavigationHeaderVue from './components/NavigationHeader/NavigationHeader.vue';

export default {
  components: {
    NavigationHeaderVue,
  },
  setup() {
    const store = useStore();
    const hasLogin = ref<boolean>(false);
    

    watch(() => store.$state.hasLogin, (value: boolean) => {
      console.log('hasLogin watch', value);
      hasLogin.value = value;
    });

    onMounted(() => {
      localStorage.setItem('Lang', '1000000');
      if (localStorage.getItem('AccessToken')) {
        store.setStatesLogin(true);
      }
    })
    return {
      hasLogin,
    };
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  main {
    padding: 0 14px;
  }
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
