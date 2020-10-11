import styled, { injectGlobal } from 'vue-styled-components';

const Theme = {
  color: {
    orange: '#FF7A21',
    black: '#292828',
    darkGray: '#383737',
    lightGray: '#C2C2C2',
    gray: '#676767',
  },
  font: {
    title: 'normal normal bold 4rem "Raleway", sans-serif',
    subtitle: 'normal normal bold 2rem "Raleway", sans-serif',
    bigText: 'normal normal 500 1.25rem "Raleway", sans-serif',
    text: 'normal normal normal 1rem "Raleway", sans-serif',
    waterMark: 'normal normal bold 12rem "Raleway", sans-serif',
  },
};

const GlobalStyle = injectGlobal`
  :root {
    font-size: 16px;

    @media(max-width: 1024px) {
        font-size: 14px;
    }
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
  body,
  #root {
    height: 100vh;
    scroll-behavior: smooth;
  }

  body {
    background-color: ${Theme.color.black};
  }

  body,
  input,
  button,
  textarea {
    font: ${Theme.font.text};
  }
`;

const WaterMark = styled.p`
  position: absolute;
  bottom: 2rem;
  left: 0;
  font: ${Theme.font.waterMark};
  color: ${Theme.color.lightGray};
  opacity: 0.05;
  overflow: hidden;
  width: 100%;
`;

const TagsWrapper = styled.div`
  display: flex;
  margin-top: 0.5rem;
  flex-wrap: wrap;
`;

const propsTag = { light: Boolean };

const Tag = styled('p', propsTag)`
  background-color: ${({ light }) => (light ? Theme.color.lightGray : Theme.color.orange)};
  font: ${Theme.font.text};
  font-weight: bold;
  padding: 0.25rem 1rem;
  border-radius: 2rem;
  color: ${Theme.color.black};
  margin: 0 1rem 0.5rem 0;
`;


export { Theme, GlobalStyle, WaterMark, TagsWrapper, Tag };
