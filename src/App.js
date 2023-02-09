import React, { useEffect, useState } from "react";
import { createGlobalStyle } from 'styled-components';

import Header from './Components/Header';
import MainContainer from './Components/MainContainer';
import TodoList from './Components/TodoList';
import CreateBtn from './Components/CreateBtn';

const GlobalStyle = createGlobalStyle`
    width: 100vw;
    height: 100vh;
  body {
    width: 99vw;
    height: 99vh;
    background: linear-gradient(50deg, #DE9B52  38%, rgba(0,0,0,0) 30%),linear-gradient(73deg, #EFCF77  70%, rgba(0,0,0,0) 30%), linear-gradient(40deg, #FBF1B4 60%, #F9F2DA 90%);
  }
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

function App() {
  const [todos, setTodos] = useState(null);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3001/todos/", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setTodos(data);
        setIsPending(false);
      });
  }, []);

  return (
    <>
      <GlobalStyle />
      {isPending ||
        <MainContainer className='container'>
          <Header />
          <TodoList todos={todos} setTodos={setTodos} />
          <CreateBtn />
        </MainContainer>
      }
    </>
  );
}

export default App;
