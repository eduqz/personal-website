<template>
  <AppWrapper>
    <GlobalStyle/>

    <Navbar/>

    <Sidebar/>

    <Profile id="profile"/>
    <AboutMe id="about-me"/>
    <Projects id="projects"/>

    <Footer/>
  </AppWrapper>
</template>

<script>
import styled from 'vue-styled-components';
import Navbar from './components/Navbar.vue';
import Sidebar from './components/Sidebar.vue';
import Profile from './components/Profile.vue';
import AboutMe from './components/AboutMe.vue';
import Projects from './components/Projects.vue';
import Footer from './components/Footer.vue';
import { GlobalStyle } from './assets/style';

const AppWrapper = styled.div`
  padding: 0 0 0 5rem;

  @media(max-width: 1024px) {
    padding: 0 0 5rem 0;
  }
`;

export default {
  name: 'App',
  components: {
    GlobalStyle,
    AppWrapper,
    Navbar,
    Sidebar,
    Profile,
    AboutMe,
    Projects,
    Footer,
  },
};
</script>
