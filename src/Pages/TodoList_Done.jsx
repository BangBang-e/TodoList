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

function TodoList_Done({ todos, dateFormat, onUpdate, isOn }) {
  const doneTasks = todos.filter((todo) => todo.done === 'true');
  const todayOnly_Done = todos.filter(
    (todo) => todo.date === dateFormat(new Date()) && todo.done === 'true'
  );

  return (
    <TodoListBlock>
      {isOn === false
        ? doneTasks.map((todo) => (
            <TodoItem key={todo.id} todos={todo} onUpdate={onUpdate} />
          ))
        : todayOnly_Done.map((todo) => (
            <TodoItem key={todo.id} todos={todo} onUpdate={onUpdate} />
          ))}
    </TodoListBlock>
  );
}

export default TodoList_Done;
