import { useEffect, useState } from 'react';
import styled from 'styled-components';

import Header from './Components/Header';
import TodoList from './Components/TodoList';
import CreateBtn from './Components/CreateBtn';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 393px;
  height: 715px;
  background: white;
  border-radius: 10px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.5) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.5) 0px -2px 6px 0px inset;
`;

function App() {
  const [todos, setTodos] = useState(null);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    fetch('http://localhost:4000/todos/', {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((data) => {
        setTodos(data);
        setIsPending(false);
      });
  }, []);

  return (
    <>
      {isPending || (
        <MainContainer>
          <Header />
          <TodoList todos={todos} setTodos={setTodos} />
          <CreateBtn />
        </MainContainer>
      )}
    </>
  );
}

export default App;
