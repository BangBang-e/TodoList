import styled from 'styled-components';

import TodoItem from '../Components/TodoElem/TodoItem';

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 20px;
  padding-bottom: 120px;
  overflow-y: auto;
  border-radius: 0 0 10px 10px;
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

function TodoList_All({ todos, dateFormat, onUpdate, isOn }) {
  const todayOnly_All = todos.filter(
    (todo) => todo.date === dateFormat(new Date())
  );

  return (
    <TodoListBlock>
      {isOn === false
        ? todos.map((todo) => (
            <TodoItem key={todo.id} todos={todo} onUpdate={onUpdate} />
          ))
        : todayOnly_All.map((todo) => (
            <TodoItem key={todo.id} todos={todo} onUpdate={onUpdate} />
          ))}
    </TodoListBlock>
  );
}

export default TodoList_All;
