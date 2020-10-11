<template>
  <AppWrapper>
    <GlobalStyle/>

    <Sidebar/>

    <Profile/>
    <AboutMe/>
  </AppWrapper>
</template>

<script>
import styled from 'vue-styled-components';
import Sidebar from './components/Sidebar.vue';
import Profile from './components/Profile.vue';
import AboutMe from './components/AboutMe.vue';
import { GlobalStyle } from './assets/style';

const AppWrapper = styled.div`
  padding: 0 0 0 5rem;
`;

export default {
  name: 'App',
  components: {
    GlobalStyle,
    AppWrapper,
    Sidebar,
    Profile,
    AboutMe,
  },
};
</script>
