<template>
  <ProjectsWrapper>
    <Title>Projects</Title>
    <CardsWrapper>
      <Card name="CSS grid guide" url="https://github.com/eduqz/grid-guide" urlText="../eduqz/grid-guide"/>
      <Card name="Library book registration" url="https://github.com/eduqz/library-manager" urlText="../eduqz/library-manager"/>
      <Card name="Introduction project to programming" url="https://github.com/eduqz/projeto-ip" urlText="../eduqz/projeto-ip"/>
      <Card name="Personal website" url="https://github.com/eduqz/eduqz.github.io" urlText="../eduqz/eduqz.github.io"/>
      <Card name="BALB advocacy landing page" url="https://github.com/citi-onboarding/balb" urlText="../citi-onboarding/balb"/>
    </CardsWrapper>

    <BottomOrnament :src="require('../assets/icons/ornament2.svg')"/>
    <TopOrnament :src="require('../assets/icons/ornament3.svg')"/>
    <WaterMark>PROJECTS</WaterMark>
  </ProjectsWrapper>
</template>

<script>
import styled from 'vue-styled-components';
import { Theme, WaterMark } from '../assets/style';
import Card from './Card.vue';

const ProjectsWrapper = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
  background-color: #1B1B1B;
  background-image: linear-gradient(to right, #292828, #1B1B1B);
  padding: 6rem 4rem;
  overflow: hidden;

  @media(max-width: 1024px) {
    padding: 6rem 2rem;
    min-height: calc(100vh - 4rem);
  }
`;

const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 12.5rem);
  grid-gap: 3rem;
  justify-content: space-evenly;
`;

const Title = styled.h2`
  font: ${Theme.font.subtitle};
  color: ${Theme.color.lightGray};
  margin: 0 0 2rem 0;
`;

const TopOrnament = styled.img`
  position: absolute;
  top: 4rem;
  left: -4rem;
  width: 50vw;
  min-width: 30rem;
`;

const BottomOrnament = styled.img`
  position: absolute;
  bottom: 6rem;
  right: -2rem;
  width: 15vw;
  min-width: 12.5rem;
`;

export default {
  name: 'Projects',
  components: {
    ProjectsWrapper,
    WaterMark,
    Title,
    CardsWrapper,
    Card,
    TopOrnament,
    BottomOrnament,
  },
};
</script>
