<template>
  <ProfileWrapper>
    <IntroductionWrapper>
      <Subtitle>Me chamo Eduardo Almeida</Subtitle>
      <Title>Entusiasta de Tecnologia</Title>
      <Description>Fascinado por desenvolvimento de software</Description>

      <TagsWrapper>
        <Tag>Project Management</Tag>
        <Tag>Development</Tag>
      </TagsWrapper>
    </IntroductionWrapper>

    <PhotoWrapper>
      <PhotoFrame>
        <Photo :src="require('../assets/img/profile.jpeg')" alt=''/>
      </PhotoFrame>
    </PhotoWrapper>

    <WaterMark>SOFTWARE</WaterMark>
  </ProfileWrapper>
</template>

<script>
import styled from 'vue-styled-components';
import { Theme, WaterMark, TagsWrapper, Tag } from '../assets/style';

const ProfileWrapper = styled.section`
  position: relative;
  height: 100vh;
  width: 100%;
  background-color: #1B1B1B;
  background-image: linear-gradient(to right, #1B1B1B , #3E3D3D);
  display: grid;
  padding: 4rem;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
  align-items: center;
`;

const IntroductionWrapper = styled.div`
  
`;

const Subtitle = styled.h2`
  font: ${Theme.font.subtitle};
  color: ${Theme.color.orange};
  margin: 0;
`;

const Title = styled.h1`
  font: ${Theme.font.title};
  color: ${Theme.color.lightGray};
  margin: 1.5rem 0 0 0;
`;

const Description = styled.h3`
  font: ${Theme.font.bigText};
  color: ${Theme.color.lightGray};
  margin: 1rem 0 0 0;
`;

const PhotoWrapper = styled.div``;

const PhotoFrame = styled.div`
  width: 80%;
  height: 0;
  padding: 40%;
  border-radius: 50%;
  border: solid 3px ${Theme.color.gray};
  position: relative;
  margin: auto;
`;

const Photo = styled.img`
  width: calc(100% - 1rem);
  height: calc(100% - 1rem);
  border-radius: 50%;
  border: solid 3px ${Theme.color.gray};
  object-fit: cover;
  position: absolute;
  top: 0.5rem;
  left: 0.5rem;
`;

export default {
  name: 'Profile',
  components: {
    ProfileWrapper,
    IntroductionWrapper,
    Subtitle,
    Title,
    Description,
    TagsWrapper,
    Tag,
    PhotoWrapper,
    PhotoFrame,
    Photo,
    WaterMark,
  },
};
</script>
