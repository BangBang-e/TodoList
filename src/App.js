import React from "react";
import { createGlobalStyle } from 'styled-components';

import Header from './Components/Header';
import MainContainer from './Components/MainContainer';
import TodoList from './Components/TodoList';
import CreateBtn from './Components/CreateBtn';

const GlobalStyle = createGlobalStyle`
  body {
    background: linear-gradient(50deg, #DE9B52  38%, rgba(0,0,0,0) 30%),linear-gradient(73deg, #EFCF77  70%, rgba(0,0,0,0) 30%), linear-gradient(40deg, #FBF1B4 60%, #F9F2DA 90%);
  }
  .container {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
function App() {
  return (
    <>
      <GlobalStyle />
      <MainContainer className='container'>
        <Header />
        {/* <TodoList /> */}
        <CreateBtn />
      </MainContainer>
    </>
  );
}

export default App;
