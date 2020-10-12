<template>
  <CardWrapper>
    <CardContent>
      <Title>{{name}}</Title>
      <LinkWrapper>
        <Icon :src="require('../assets/icons/github.svg')" />
        <CardLink :href="url" target="_blank">{{urlText}}</CardLink>
      </LinkWrapper>
    </CardContent>
  </CardWrapper>
</template>

<script>
import styled from 'vue-styled-components';
import { Theme } from '../assets/style';

const CardWrapper = styled.div`
  width: 12.5rem;
  height: 8.5rem;
  border: solid 3px ${Theme.color.gray};
  position: relative;
  z-index: 5;
`;

const CardContent = styled.div`
  width: 12.5rem;
  height: 8.5rem;
  border: solid 3px ${Theme.color.gray};
  background-color: ${Theme.color.black};
  position: absolute;
  top: -0.8rem;
  left: 0.4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const Title = styled.p`
  font: ${Theme.font.text};
  color: ${Theme.color.orange};
  font-weight: bold;
  margin: 0 1rem;
  text-align: center;
`;

const LinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Icon = styled.img`
  margin-bottom: 0.25rem;
`;

const CardLink = styled.a`
  font: ${Theme.font.smallText};
  color: ${Theme.color.lightGray};
`;


export default {
  name: 'Card',
  components: {
    CardWrapper,
    CardContent,
    Title,
    LinkWrapper,
    Icon,
    CardLink,
  },
  props: ['name', 'url', 'urlText'],
};
</script>
