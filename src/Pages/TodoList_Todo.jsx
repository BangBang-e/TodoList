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

function TodoList_Todo({ todos, dateFormat, onUpdate, isOn }) {
  const undoneTasks = todos.filter((todo) => todo.done === 'false');
  const todayOnly_Todo = todos.filter(
    (todo) => todo.date === dateFormat(new Date()) && todo.done === 'false'
  );

  return (
    <TodoListBlock>
      {isOn === false
        ? undoneTasks.map((todo) => (
            <TodoItem key={todo.id} todos={todo} onUpdate={onUpdate} />
          ))
        : todayOnly_Todo.map((todo) => (
            <TodoItem key={todo.id} todos={todo} onUpdate={onUpdate} />
          ))}
    </TodoListBlock>
  );
}

export default TodoList_Todo;
