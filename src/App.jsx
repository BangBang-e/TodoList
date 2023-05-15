import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router';
import styled from 'styled-components';

import Header from './Components/Header';
import TodoList_All from './Pages/TodoList_All';
import TodoList_Todo from './Pages/TodoList_Todo';
import TodoList_Done from './Pages/TodoList_Done';
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
  const [isOn, setisOn] = useState(false);
  const onUpdate = (updated) => {
    setTodos(todos.map((ele) => (ele.id === updated.id ? updated : ele)));
  };

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

  function dateFormat(date) {
    let formatter =
      date.getFullYear() +
      '.' +
      (date.getMonth() + 1 < 9
        ? '0' + (date.getMonth() + 1)
        : date.getMonth() + 1) +
      '.' +
      (date.getDate() < 9 ? '0' + date.getDate() : date.getDate());
    return formatter;
  }

  return (
    <>
      {isPending || (
        <MainContainer>
          <Header isOn={isOn} setisOn={setisOn} />
          <Routes>
            <Route
              path="/TodoList/"
              element={
                <TodoList_All
                  todos={todos}
                  dateFormat={dateFormat}
                  onUpdate={onUpdate}
                  isOn={isOn}
                />
              }
            />
            <Route
              path="/todo"
              element={
                <TodoList_Todo
                  todos={todos}
                  dateFormat={dateFormat}
                  onUpdate={onUpdate}
                  isOn={isOn}
                />
              }
            />
            <Route
              path="/done"
              element={
                <TodoList_Done
                  todos={todos}
                  dateFormat={dateFormat}
                  onUpdate={onUpdate}
                  isOn={isOn}
                />
              }
            />
          </Routes>
          <CreateBtn />
        </MainContainer>
      )}
    </>
  );
}

export default App;
