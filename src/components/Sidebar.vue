<template>
  <SidebarWrapper>
    <HightlightedText>EDUARDO ALMEIDA</HightlightedText>

    <SocialMedias>
      <a href="www.google.com" target="_blank">
        <Icon :src="require('../assets/icons/github.svg')" />
      </a>
      <a href="www.google.com" target="_blank">
        <Icon :src="require('../assets/icons/github.svg')" />
      </a>
      <a href="www.google.com" target="_blank">
        <Icon :src="require('../assets/icons/github.svg')" />
      </a>
    </SocialMedias>
  </SidebarWrapper>
</template>

<script>
import styled from 'vue-styled-components';
import { Theme } from '../assets/style';

const SidebarWrapper = styled.aside`
  background-color: ${Theme.color.darkGray};
  padding: 4rem 0.5rem;
  width: 5rem;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  z-index: 10;
`;

const HightlightedText = styled.p`
  font: ${Theme.font.bigText};
  color: ${Theme.color.lightGray};
  writing-mode: vertical-rl;
`;

const SocialMedias = styled.div`
  display: flex;
  flex-direction: column;
`;

const Icon = styled.img`
  margin-top: 1rem;
  height: 1.5rem;
  transition: all .2s ease-in-out;

  &:hover {
    transform: scale(1.2);
  }
`;

export default {
  name: 'Sidebar',
  components: {
    SidebarWrapper,
    HightlightedText,
    SocialMedias,
    Icon,
  },
};
</script>
