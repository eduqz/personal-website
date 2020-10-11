<template>
  <div id="app">
    <Profile/>

    <GlobalStyle/>
  </div>
</template>

<script>
import Profile from './components/Profile.vue';
import { GlobalStyle } from './assets/style';

export default {
  name: 'App',
  components: {
    Profile,
    GlobalStyle,
  },
};
</script>
