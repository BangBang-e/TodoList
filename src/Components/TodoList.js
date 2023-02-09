import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoElem/TodoItem';

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

function TodoList({ todos, setTodos }) {
    const onUpdate = (updated) => {
        setTodos(todos.map((ele) => (ele.id === updated.id ? updated : ele)))
    }
    return (
        <TodoListBlock>
            {todos.map(todo => (
                < TodoItem
                    key={todo.id}
                    todos={todo}
                    onUpdate={onUpdate}
                />
            ))}
        </TodoListBlock>
    );
}

export default TodoList;