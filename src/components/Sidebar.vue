<template>
  <SidebarWrapper>
   <HightlightedText>EDUARDO ALMEIDA</HightlightedText>

   <SocialMedias>
       <GithubIcon />
   </SocialMedias>
  </SidebarWrapper>
</template>

<script>
import styled from 'vue-styled-components';
import { Theme } from '../assets/style';
import GithubIcon from '../assets/icons/github.svg';

const SidebarWrapper = styled.div`
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
`;

const Icon = styled.svg``;

export default {
  name: 'Sidebar',
  components: {
    SidebarWrapper,
    HightlightedText,
    SocialMedias,
    Icon,
    GithubIcon,
  },
};
</script>
