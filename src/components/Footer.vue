<template>
  <FooterWrapper>
    <EmailLink href="mailto:eduardoaqz@gmail.com">eduardoaqz@gmail.com</EmailLink>
  </FooterWrapper>
</template>

<script>
import styled from 'vue-styled-components';
import { Theme } from '../assets/style';

const FooterWrapper = styled.footer`
  background-color: ${Theme.color.darkGray};
  height: 4rem;
  width: 100%;
  padding: 0 4rem;
  display: inline-flex;
  align-items: center;
  justify-content: flex-end;

  @media(max-width: 1024px) {
    display: none;
  }
`;

const EmailLink = styled.a`
  font: ${Theme.font.bigText};
  color: ${Theme.color.lightGray};
  cursor: pointer;
  margin: auto 0;
  transition: all .2s ease-in-out;
  text-decoration: none;

  &:hover {
    transform: scale(1.1);
  }
`;

export default {
  name: 'Footer',
  components: {
    FooterWrapper,
    EmailLink,
  },
};
</script>
