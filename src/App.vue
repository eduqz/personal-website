<template>
  <div id="app">
    <Sidebar/>

    <Profile/>

    <GlobalStyle/>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar.vue';
import Profile from './components/Profile.vue';
import { GlobalStyle } from './assets/style';

export default {
  name: 'App',
  components: {
    Sidebar,
    Profile,
    GlobalStyle,
  },
};
</script>
