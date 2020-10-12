<template>
  <ProfileWrapper>
    <IntroductionWrapper>
      <Subtitle>I'm Eduardo Almeida</Subtitle>
      <Title>A technology lover</Title>
      <Description>Fascinated by innovation and passionate about software development</Description>

      <TagsWrapper>
        <Tag>Software Development</Tag>
        <Tag>Project Management</Tag>
      </TagsWrapper>
    </IntroductionWrapper>

    <PhotoWrapper>
      <PhotoFrame>
        <Photo :src="require('../assets/img/profile.jpeg')" alt=''/>
      </PhotoFrame>
    </PhotoWrapper>

    <WaterMark>TECHNOLOGY</WaterMark>
  </ProfileWrapper>
</template>

<script>
import styled from 'vue-styled-components';
import { Theme, WaterMark, TagsWrapper, Tag } from '../assets/style';

const ProfileWrapper = styled.section`
  position: relative;
  min-height: 100vh;
  width: 100%;
  background-color: #1B1B1B;
  background-image: linear-gradient(to right, #1B1B1B , #3E3D3D);
  display: grid;
  padding: 4rem;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
  align-items: center;

  @media(max-width: 1024px) {
    padding: 4rem 2rem 4rem 2rem;
    grid-template-columns: 1fr;
    grid-gap: 4rem;
    min-height: calc(100vh - 4rem);
  }
`;

const IntroductionWrapper = styled.div`
  margin-top: 3rem;
`;

const Subtitle = styled.h2`
  font: ${Theme.font.subtitle};
  color: ${Theme.color.orange};
  margin: 0;

  @media(max-width: 1024px) {
    font-size: 1.75rem;
  }
`;

const Title = styled.h1`
  font: ${Theme.font.title};
  color: ${Theme.color.lightGray};
  margin: 1.5rem 0 0 0;

  @media(max-width: 1024px) {
    font-size: 3rem;
  }
`;

const Description = styled.h3`
  font: ${Theme.font.bigText};
  color: ${Theme.color.lightGray};
  margin: 1rem 0 1.5rem 0;
`;

const PhotoWrapper = styled.div`
  @media(max-width: 1024px) {
    max-width: 30rem;
    width: 90%;
    margin-bottom: auto;
    justify-self: center;
  }
`;

const PhotoFrame = styled.div`
  width: 80%;
  height: 0;
  padding: 40%;
  border-radius: 50%;
  border: solid 3px ${Theme.color.gray};
  position: relative;
  margin: auto;

  @media(max-width: 1024px) {
    width: 90%;
    padding: 45%;
  }
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
