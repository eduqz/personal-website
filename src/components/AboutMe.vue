<template>
  <AboutMeWrapper>
    <Introduction>
      <Title>Introduction</Title>
      <Content>
        <P>
          I'm formally a Developer (at <b>loomi</b> & <b>GZero</b>), but I
          actually like to be referred as
          <i>someone who works with technology</i>.
        </P>
        <P>
          Graduation student in Computer Engineering at CIn / UFPE and Computer
          Technician at IFRN.
        </P>
        <P>
          I'm interested in web development, software management, devops,
          software infrastructure, software architecture, code design, software
          security, agile and digital product management.
        </P>
      </Content>
    </Introduction>
    <Experiences>
      <Title>Experiences</Title>
      <TimelineEvent
        role="Software developer"
        time="Now (since 2021)"
        company="at loomi & GZero"
      />
      <TimelineEvent
        role="Software Manager"
        time="1 year (2020)"
        company="at CITi"
      />
      <TimelineEvent
        role="Software developer"
        time="6 months (2019.2)"
        company="at CITi"
      />
    </Experiences>

    <Technologies>
      <Title>Technologies</Title>
      <TagsWrapper>
        <Tag>Javascript</Tag>
        <Tag>Python</Tag>
        <Tag>React</Tag>
        <Tag>Node.js</Tag>
        <Tag>HTML</Tag>
        <Tag>SASS</Tag>
        <Tag>MongoDB</Tag>
        <Tag>PostgreSQL</Tag>
        <Tag>MySQL</Tag>
        <Tag>Git</Tag>
        <Tag>Django</Tag>
        <Tag>Java</Tag>
        <Tag>Play Framework</Tag>
        <Tag>C</Tag>
        <Tag>Express</Tag>
        <Tag>Sequelize</Tag>
        <Tag>Docker</Tag>
        <Tag>Dokku</Tag>
        <Tag>Linux</Tag>
      </TagsWrapper>
    </Technologies>

    <Knowledge>
      <Title>Knowledge</Title>
      <TagsWrapper>
        <Tag light>Software Development</Tag>
        <Tag light>Project Management</Tag>
        <Tag light>Agile</Tag>
        <Tag light>Leadership</Tag>
      </TagsWrapper>
    </Knowledge>

    <Ornament :src="require('../assets/icons/ornament1.svg')" />
    <WaterMark>ABOUT ME</WaterMark>
  </AboutMeWrapper>
</template>

<script>
import styled from 'vue-styled-components';
import TimelineEvent from './TimelineEvent.vue';
import { Theme, WaterMark, TagsWrapper, Tag } from '../assets/style';

const AboutMeWrapper = styled.section`
  position: relative;
  width: 100%;
  background-color: #1b1b1b;
  background-image: linear-gradient(to right, #292828, #1b1b1b);
  padding: 6rem 4rem;
  display: grid;
  grid-template-areas:
    'introduction introduction'
    'experiences technologies'
    'experiences knowledge';
  grid-template-columns: 1fr 2fr;
  grid-gap: 2rem 4rem;
  overflow: hidden;

  @media (max-width: 1024px) {
    padding: 6rem 2rem;
    grid-template-columns: 1fr;
    grid-template-areas:
      'introduction'
      'experiences'
      'technologies'
      'knowledge';
  }
`;

const Title = styled.h2`
  font: ${Theme.font.subtitle};
  color: ${Theme.color.lightGray};
  margin: 0 0 1rem 0;
`;

const Introduction = styled.div`
  grid-area: introduction;
`;

const Content = styled.p`
  font: ${Theme.font.text};
  color: ${Theme.color.lightGray};
  text-justify: none;
  width: 92.5%;
`;

const Experiences = styled.div`
  grid-area: experiences;
`;

const Technologies = styled.div`
  grid-area: technologies;
`;

const Knowledge = styled.div`
  grid-area: knowledge;
`;

const Ornament = styled.img`
  position: absolute;
  top: 6rem;
  right: -5rem;
  width: 20vw;
  min-width: 17.5rem;
`;

const P = styled.p`
  padding-bottom: 1rem;
`;

export default {
  name: 'AboutMe',
  components: {
    AboutMeWrapper,
    Title,
    TagsWrapper,
    Tag,
    WaterMark,
    Introduction,
    Content,
    Experiences,
    Technologies,
    Knowledge,
    TimelineEvent,
    Ornament,
    P,
  },
};
</script>
