import React, { useState } from 'react';
import styled from 'styled-components';
import { MdDone, MdDelete } from 'react-icons/md';
import ModalDetail from './ModalDetail.js';

const Remove = styled.div`
    right: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #C9C9C9;
    font-size: 1.6rem;
    margin-right: 2px;
    cursor: pointer;
    transition: 0.2s ease-out;
    &:hover {
        color: #F3A339;
        transition: 0.2s ease-out;
    }
`;

const TodoItemBlock = styled.div`
    display: flex;
    align-items: center;
    padding-top: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid #F3F0EC;
    .editor{
        display: flex;
        justify-content: space-between;
    }
`;

const Mark = styled.div`
    width: 0.22rem;
    height: 1rem;
    margin: 0 6px 0 6px;
    border-radius: 2px;
    background-color: #F2BC74;
    opacity: 0.5;
`;

const CheckBox = styled.input`
    cursor: pointer;
    appearance: none;
    width: 20px;
    height: 20px;
    box-shadow: 0.5px 0.5px 3px rgba(0, 0, 0, 0.3), inset -1px -2px 3px rgba(0, 0, 0, 0.1);
    margin-right: 7px;
    border-radius: 3.5px;
    :active {
        box-shadow: 0.5px 0.5px 3px rgba(0, 0, 0, 0.1), inset 1px 2px 3px rgba(0, 0, 0, 0.1);
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
    color: ${(props) => (props.checked ? '#C9C9C9' : 'black')}
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
    background:linear-gradient(180deg, rgba(150, 150, 150, 0)  13%, rgba(150, 150, 150, 0.2) 13%);
`;

function TodoItem({ todos, setTodos, onUpdate, text }) {
    const { id, title, body, done, date } = todos;
    const [isOpen, setIsOpen] = useState(false);

    const openModalHandler = () => {
        console.log('자세히 보기')
        setIsOpen(!isOpen);
    };

    const checkHandler = (e) => {
        let a = {
            id: id,
            title: title,
            body: body,
            done: e.target.checked ? "true" : "false",
            date: date,
        }
        setTimeout(() => {
            fetch(`http://localhost:3001/todos/${id}`, {
                method: "PATCH",
                headers: { "Content-type": "Application/json" },
                body: JSON.stringify(a)
            })
                .then((res) => {
                    res.json(a);
                    onUpdate({ ...a });
                })
        });
    }
    const handleDeleteClick = () => {
        setTimeout(() => {
            fetch(`http://localhost:3001/todos/${todos.id}`, {
                method: "DELETE"
            })
                .then(res => {
                    if (!res.ok) {
                        throw Error('could not fetch the data for that resource');
                    }
                    return res.json();
                })
                .then(() => {
                    window.location.reload();
                })
                .catch(err => {
                    console.error("Error", err);
                })
        }, 10);
        console.log('삭제!');
    }

    return (
        <TodoItemBlock>
            <Mark />
            <Text
                checked={done === "true"}
                onClick={openModalHandler}
            >{todos.title}</Text>
            <Date>{todos.date}</Date>
            <StyledLabel htmlFor={text}>
                <CheckBox
                    type="checkbox"
                    id={text}
                    checked={done === "true"}
                    onChange={checkHandler}>
                </CheckBox>
                <StyledP>{text}</StyledP>
            </StyledLabel>
            <Remove>
                <MdDelete onClick={handleDeleteClick} />
            </Remove>
            {isOpen ?
                <ModalBackdrop onClick={openModalHandler}>
                    <ModalDetail
                        todos={todos}
                        setTodos={setTodos} />
                </ModalBackdrop>
                : null}
        </TodoItemBlock >
    );
}
export default TodoItem;