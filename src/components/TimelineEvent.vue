<template>
  <EventWrapper>
    <EventMarker :src="require('../assets/icons/timeline-tracker.svg')"/>
    <EventContent>
      <Title>{{role}}</Title>
      <Description>{{time}}</Description>
      <Description>{{company}}</Description>
    </EventContent>
  </EventWrapper>
</template>

<script>
import styled from 'vue-styled-components';
import { Theme } from '../assets/style';

const EventWrapper = styled.div`
  display: flex;
`;

const EventMarker = styled.img`
  width: 1.25rem;
`;

const EventContent = styled.div`
  margin-left: 1rem;
`;

const Title = styled.p`
  font: ${Theme.font.bigText};
  color: ${Theme.color.lightGray};
  margin: 0 0 0.25rem 0;
`;

const Description = styled.p`
  font: ${Theme.font.text};
  color: ${Theme.color.lightGray};
  margin: 0.15rem 0;
`;


export default {
  name: 'TimelineEvent',
  components: {
    EventWrapper,
    EventMarker,
    EventContent,
    Title,
    Description,
  },
  props: ['role', 'time', 'company'],
};
</script>
