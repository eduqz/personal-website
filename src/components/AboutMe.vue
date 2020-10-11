<template>
  <AboutMeWrapper>
    <Introduction>
      <Title>Introduction</Title>
      <Content>Work as Software Manager at CITi - Junior Company linked to CIn / UFPE. Is a graduate student in Computer Engineering at UFPE and Computer Technician at IFRN. Has knowledge in JavaScript, Python, Java and C programming languages; using relational (MySQL and PostgreSQL) and non-relational (MongoDB and Firebase) databases.
        Has experience in developing web applications using, at the front-end level, HTML, CSS and React; and, for back-end, with Node + Express, Play Framework and Django Rest. Has also experienced team management tactics and software projects, as well as the application of agile methodologies in this scenario (emphasis on Scrum).
        Is interested in web development, devops, software infrastructure, software architecture, code design, software security, agile and digital product management.
      </Content>
    </Introduction>
    <Detailing>
      <Experiences>
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
    </Detailing>

    <WaterMark>ABOUT ME</WaterMark>
  </AboutMeWrapper>
</template>

<script>
import styled from 'vue-styled-components';
import { Theme, WaterMark, TagsWrapper, Tag } from '../assets/style';

const AboutMeWrapper = styled.section`
  position: relative;
  height: 100vh;
  width: 100%;
  background-color: #1B1B1B;
  background-image: linear-gradient(to right, #292828, #1B1B1B);
  padding: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  font: ${Theme.font.subtitle};
  color: ${Theme.color.lightGray};
  margin: 1.5rem 0 1rem 0;
`;

const Introduction = styled.div``;

const Detailing = styled.div`
  display: grid;
  grid-template-areas:
    'experiences technologies'
    'experiences knowledge';
  grid-gap: 1rem 2rem;
`;

const Content = styled.p`
  font: ${Theme.font.text};
  color: ${Theme.color.lightGray};
`;

const Experiences = styled.div`]
  grid-area: experiences;
  width: 5rem;
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
    Detailing,
    Content,
    Experiences,
    Technologies,
    Knowledge,
  },
};
</script>
