<template>
  <ProjectsWrapper>
    <WaterMark>PROJETOS</WaterMark>
  </ProjectsWrapper>
</template>

<script>
import styled from 'vue-styled-components';
import { Theme, WaterMark } from '../assets/style';

const ProjectsWrapper = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  background-color: #1B1B1B;
  background-image: linear-gradient(to right, #292828, #1B1B1B);
  display: grid;
  padding: 4rem;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
  align-items: center;
`;

export default {
  name: 'Projects',
  components: {
    ProjectsWrapper,
    WaterMark,
  },
};
</script>
