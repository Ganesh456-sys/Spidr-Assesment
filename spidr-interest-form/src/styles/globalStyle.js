import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap');

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Inter', sans-serif;
    background-color: #0f0f0f;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
  }

  input, button {
    font-family: inherit;
  }
`;

export default GlobalStyles;