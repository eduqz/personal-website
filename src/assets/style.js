import { createGlobalStyle } from 'vue-styled-components';

const Theme = {
  color: {
    orange: '#FF7A21',
    black: '#292828',
    lightGray: '#C2C2C2',
    gray: '#676767',
  },
  font: {
    title: 'normal normal bold 4rem "Raleway", sans-serif',
    subtitle: 'normal normal bold 2rem "Raleway", sans-serif',
    bigText: 'normal normal 500 1.25rem "Raleway", sans-serif',
    text: 'normal normal normal 1rem "Raleway", sans-serif',
    waterMark: 'normal normal 900 8rem "Raleway", sans-serif',
  },
};

const GlobalStyle = createGlobalStyle`
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


export { Theme, GlobalStyle };
