<template>
  <AboutMeWrapper>
    <Title>Quem sou eu</Title>

    <WaterMark>SOBRE MIM</WaterMark>
  </AboutMeWrapper>
</template>

<script>
import styled from 'vue-styled-components';
import { Theme, WaterMark, TagsWrapper, Tag } from '../assets/style';

const AboutMeWrapper = styled.div`
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

const Title = styled.h1`
  font: ${Theme.font.subtitle};
  color: ${Theme.color.lightGray};
  margin: 1.5rem 0 0 0;
`;

export default {
  name: 'AboutMe',
  components: {
    AboutMeWrapper,
    Title,
    TagsWrapper,
    Tag,
    WaterMark,
  },
};
</script>
