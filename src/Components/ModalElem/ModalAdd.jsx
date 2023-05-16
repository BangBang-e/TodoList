import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/esm/locale';

import { FaRegCalendarAlt } from 'react-icons/fa';
import { TiArrowSortedUp } from 'react-icons/ti';

import styled from 'styled-components';

const ModalView = styled.div.attrs((props) => ({
  role: 'dialog',
}))`
  position: absolute;
  text-align: center;
  text-decoration: none;
  background-color: white;
  width: 348px;
  height: 300px;
  border-radius: 9px;
  box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.2);
  -webkit-animation: scale-up-bottom 0.2s cubic-bezier(0.39, 0.575, 0.565, 1)
    both;
  animation: scale-up-bottom 0.2s cubic-bezier(0.39, 0.575, 0.565, 1) both;

  .topContainer {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .input--title {
    width: 312px;
    height: 35px;
    box-shadow: inset 0px 1px 6px rgba(0, 0, 0, 0.15);
    border: none;
    border-radius: 9px;
    margin-bottom: 10px;
    font-size: 1rem;
    padding: 0 10px 0 10px;
    :focus {
      outline: none;
    }
    ::placeholder {
      color: rgba(180, 180, 180);
    }
    ::-webkit-input-placeholder {
      color: rgba(180, 180, 180);
    }
    :-ms-input-placeholder {
      color: rgba(180, 180, 180);
    }
  }
  .input--body {
    width: 312px;
    height: 126px;
    box-shadow: inset 0px 1px 6px rgba(0, 0, 0, 0.15);
    border: none;
    border-radius: 9px;
    font-size: 1rem;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
      'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
      'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    padding: 10px 10px 10px 10px;
    resize: none;
    :focus {
      outline: none;
    }
    ::placeholder {
      color: rgba(180, 180, 180);
    }
    ::-webkit-input-placeholder {
      color: rgba(180, 180, 180);
    }
    :-ms-input-placeholder {
      color: rgba(180, 180, 180);
    }
  }
  .submit {
    display: flex;
    justify-content: flex-end;
    padding-right: 14px;
  }
  .todoSubmit {
    cursor: pointer;
    width: 36px;
    height: 36px;
    border: none;
    border-radius: 50%;
    background-color: #f3a339;
    box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.2);
    margin-top: 12px;
    padding-top: 4px;
    color: white;
    font-size: 1.2rem;
    transition: 0.1s;
    :hover {
      background-color: #e47c01;
      transition: 0.3s;
    }
    :active {
      font-size: 0.8rem;
      transition: 0.2s;
    }
  }

  @-webkit-keyframes scale-up-bottom {
    0% {
      -webkit-transform: scale(0.5);
      transform: scale(0.5);
      -webkit-transform-origin: 50% 100%;
      transform-origin: 50% 100%;
    }
    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
      -webkit-transform-origin: 50% 100%;
      transform-origin: 50% 100%;
    }
  }
  @keyframes scale-up-bottom {
    0% {
      -webkit-transform: scale(0.5);
      transform: scale(0.5);
      -webkit-transform-origin: 50% 100%;
      transform-origin: 50% 100%;
    }
    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
      -webkit-transform-origin: 50% 100%;
      transform-origin: 50% 100%;
    }
  }
`;
const Calendar = styled.div`
  cursor: pointer;
  display: flex;
  position: relative;
  align-items: center;
  left: -96px;
  width: 115px;
  height: 24px;
  box-shadow: inset 0px 1px 6px rgba(0, 0, 0, 0.15);
  border: none;
  border-radius: 12px;
  margin: 25px 5px 10px 0;
  padding: 0 1px 0 9px;
  color: rgba(120, 120, 120);
  font-size: 0.85rem;
`;
const DatePick = styled(DatePicker)`
  cursor: pointer;
  width: 66px;
  height: 11px;
  border: none;
  text-align: end;
  color: rgba(120, 120, 120);
`;

const ModalAdd = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [done, setDone] = useState('false');
  const [date, setDate] = useState(new Date());

  const handleSubmit = (e) => {
    e.preventDefault();
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    const data = {
      id: uuidv4(),
      title,
      body,
      done,
      date: `${year}.${month}.${day}`,
    };

    const currentTodos = JSON.parse(localStorage.getItem('todos')) || [];
    currentTodos.push(data);
    localStorage.setItem('todos', JSON.stringify(currentTodos));

    window.location.reload();
  };
  return (
    <ModalView onClick={(e) => e.stopPropagation()}>
      <form onSubmit={handleSubmit}>
        <div className="topContainer">
          <Calendar>
            <FaRegCalendarAlt />
            <DatePick
              selected={date}
              value={date}
              onChange={(date) => {
                setDate(date);
              }}
              locale={ko}
              dateFormat="yyyy.MM.dd"
              disabledKeyboardNavigation
            />
          </Calendar>
        </div>
        <input
          className="input--title"
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Todo"
          maxLength="20"
        />
        <textarea
          className="input--body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="Memo"
          rows="10"
        />
        <div className="submit">
          <button className="todoSubmit">
            <TiArrowSortedUp
              value={done}
              onChange={(e) => setDone(e.target.value)}
            />
          </button>
        </div>
      </form>
    </ModalView>
  );
};

export default ModalAdd;
