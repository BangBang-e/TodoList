import 'react-datepicker/dist/react-datepicker.css';

import { FaRegCalendarAlt } from 'react-icons/fa';

import styled from 'styled-components';

const ModalView = styled.div.attrs((props) => ({
  role: 'dialog',
}))`
  position: absolute;
  text-align: center;
  text-decoration: none;
  background-color: white;
  width: 348px;
  height: 302px;
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
    cursor: default;
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
    cursor: default;
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
    margin-top: 6px;
    color: white;
    font-size: 1rem;
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
  cursor: default;
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
  padding: 0 1px 0 8px;
  color: rgba(120, 120, 120);
  font-size: 0.8rem;
  div {
    margin: 1px 0 0 8px;
  }
`;

const TodoDetail = ({ todos }) => {
  return (
    <ModalView onClick={(e) => e.stopPropagation()}>
      <form>
        <div className="topContainer">
          <Calendar>
            <FaRegCalendarAlt />
            <div>{todos.date}</div>
          </Calendar>
        </div>
        <input
          className="input--title"
          type="text"
          readOnly
          value={todos.title}
        />
        <textarea className="input--body" value={todos.body} readOnly />
      </form>
    </ModalView>
  );
};

export default TodoDetail;
