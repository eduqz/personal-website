<template>
  <AboutMeWrapper>
    <Introduction>
      <Title>Introduction</Title>
      <Content>
        Work as Software Manager at CITi - Junior Company linked to CIn / UFPE.
        Is a graduate student in Computer Engineering at UFPE and Computer Technician at IFRN.
        Has knowledge in JavaScript, Python, Java and C programming languages; using relational
        (MySQL and PostgreSQL) and non-relational (MongoDB and Firebase) databases.
        Has experience in developing web applications using, at the front-end level, HTML,
        CSS and React; and, for back-end, with Node + Express, Play Framework and Django Rest.
        Has also experienced team management tactics and software projects, as well as the
        application of agile methodologies in this scenario (emphasis on Scrum).
        Is interested in web development, devops, software infrastructure, software architecture,
        code design, software security, agile and digital product management.
      </Content>
    </Introduction>
      <Experiences>
        <Title>Experiences</Title>
        <TimelineEvent role="Software Manager" time="8 months" company="at CITi"/>
        <TimelineEvent role="Full stack developer" time="6 months" company="at CITi"/>
      </Experiences>

      <Technologies>
        <Title>Technologies</Title>
        <TagsWrapper>
          <Tag>Javascript</Tag>
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
  background-color: #1B1B1B;
  background-image: linear-gradient(to right, #292828, #1B1B1B);
  padding: 6rem 4rem;
  display: grid;
  grid-template-areas:
    'introduction introduction'
    'experiences technologies'
    'experiences knowledge';
  grid-template-columns: 20rem 1fr;
  grid-gap: 2rem 4rem;
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
  },
};
</script>
