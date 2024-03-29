import { useState } from 'react';

import TodoDetail from './TodoDetail';
import { MdDelete } from 'react-icons/md';

import styled from 'styled-components';

const Remove = styled.div`
  right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #c9c9c9;
  font-size: 1.6rem;
  margin-right: 2px;
  cursor: pointer;
  transition: 0.2s ease-out;
  &:hover {
    color: #f3a339;
    transition: 0.2s ease-out;
  }
`;
const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid #f3f0ec;
  .editor {
    display: flex;
    justify-content: space-between;
  }
`;
const Mark = styled.div`
  width: 0.22rem;
  height: 1rem;
  margin: 0 6px 0 6px;
  border-radius: 2px;
  background-color: #f2bc74;
  opacity: 0.5;
`;
const CheckBox = styled.input`
  cursor: pointer;
  appearance: none;
  width: 20px;
  height: 20px;
  box-shadow: 0.5px 0.5px 3px rgba(0, 0, 0, 0.3),
    inset -1px -2px 3px rgba(0, 0, 0, 0.1);
  margin-right: 7px;
  border-radius: 3.5px;
  :active {
    box-shadow: 0.5px 0.5px 3px rgba(0, 0, 0, 0.1),
      inset 1px 2px 3px rgba(0, 0, 0, 0.1);
  }
  &:checked {
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='orange' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
    background-size: 130% 130%;
    background-position: 50%;
    background-repeat: no-repeat;
  }
`;
const StyledLabel = styled.label`
  display: flex;
  align-items: center;
  user-select: none;
`;
const StyledP = styled.p`
  margin-left: 0.25rem;
`;
const Date = styled.div`
  font-size: 0.7rem;
  text-align: end;
  margin-right: 10px;
  padding-top: 2px;
  color: #868686;
`;
const Text = styled.div`
  flex: 1;
  margin-left: 5px;
  font-size: 1rem;
  cursor: pointer;
  color: ${(props) => (props.checked ? '#C9C9C9' : 'black')};
`;
const ModalBackdrop = styled.div`
  position: absolute;
  width: 393px;
  height: 715px;
  bottom: 0px;
  left: 0;
  border-radius: 10px;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  z-index: 999;
  background: linear-gradient(
    180deg,
    rgba(150, 150, 150, 0) 10.4%,
    rgba(150, 150, 150, 0.2) 10.4%
  );
`;

function TodoItem({ todos, setTodos, text }) {
  const { id, title, body, done, date } = todos;
  const [isOpen, setIsOpen] = useState(false);

  const openModalHandler = () => {
    setIsOpen(!isOpen);
  };

  const checkHandler = (e) => {
    let updatedTodo = {
      id: id,
      title: title,
      body: body,
      done: e.target.checked ? 'true' : 'false',
      date: date,
    };

    setTimeout(() => {
      const currentTodos = JSON.parse(localStorage.getItem('todos')) || [];
      const newTodos = currentTodos.map((todo) =>
        todo.id === id ? updatedTodo : todo
      );
      setTodos(newTodos);
      localStorage.setItem('todos', JSON.stringify(newTodos));
    }, 10);
  };

  const handleDeleteClick = () => {
    const currentTodos = JSON.parse(localStorage.getItem('todos')) || [];
    const updatedTodos = currentTodos.filter((todo) => todo.id !== id);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));

    window.location.reload();
  };

  return (
    <TodoItemBlock>
      <Mark />
      <Text checked={done === 'true'} onClick={openModalHandler}>
        {todos.title}
      </Text>
      <Date>{todos.date}</Date>
      <StyledLabel htmlFor={text}>
        <CheckBox
          type="checkbox"
          id={text}
          checked={done === 'true'}
          onChange={checkHandler}
        ></CheckBox>
        <StyledP>{text}</StyledP>
      </StyledLabel>
      <Remove>
        <MdDelete onClick={handleDeleteClick} />
      </Remove>
      {isOpen ? (
        <ModalBackdrop onClick={openModalHandler}>
          <TodoDetail todos={todos} setTodos={setTodos} setIsOpen={setIsOpen} />
        </ModalBackdrop>
      ) : null}
    </TodoItemBlock>
  );
}
export default TodoItem;
