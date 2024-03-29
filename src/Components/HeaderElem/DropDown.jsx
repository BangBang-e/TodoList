import { useState } from 'react';
import { Link } from 'react-router-dom';

import { IoIosArrowBack } from 'react-icons/io';

import styled from 'styled-components';

const DDContainer = styled.div`
  margin-top: 3px;
  font-family: sans-serif;
  display: flex;
  justify-content: center;
  position: relative;
  bottom: 10px;
`;
const DDBtn = styled.div`
  display: flex;
  position: absolute;
  right: -70px;
  font-size: 1.2rem;
  text-align: end;
  transition: 0.1s ease-out;
  cursor: pointer;
  .selected {
    margin-right: 3px;
  }
  :hover {
    cursor: pointer;
  }
  .close {
    transform: rotate(-90deg);
    transition: transform 0.2s ease-out;
  }
  .open {
    transform: rotate(0deg);
    transition: transform 0.2s ease-out;
  }
`;
const DDContent = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  right: -5px;
  top: 88px;
  width: 60px;
  height: 100px;
  border-radius: 3px;
  background: white;
  box-shadow: rgba(50, 50, 93, 0.45) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.45) 0px 3px 7px -3px;
  ul {
    list-style-type: none;
    position: relative;
    margin-top: 5px;
    bottom: 5px;
  }
  li {
    margin-top: 8px;
    padding: 3px 10px 1px 15px;
    text-align: right;
    color: rgb(80, 80, 80);
    transition: 0.2s;
  }
  li:hover {
    cursor: pointer;
    color: black;
    background: rgba(100, 100, 100, 0.1);
    transition: 0.2s;
  }
`;
const DDBackdrop = styled.div`
  position: absolute;
  width: 393px;
  height: 715px;
  top: -64px;
  right: -67px;
  border-radius: 10px;
  background: rgba(0, 0, 0, 0);
  z-index: 300;
`;

function DropDown() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState('All');
  const menuArr = [
    { link: '/', type: 'All' },
    { link: '/todo', type: 'Todo' },
    { link: '/done', type: 'Done' },
  ];

  const openDDHandler = () => {
    setIsOpen(!isOpen);
  };
  const switchToClicked = (item) => {
    setSelected(`${item.type}`);
  };
  return (
    <DDContainer>
      <DDBtn onClick={openDDHandler}>
        <div className="selected">{selected}</div>
        <IoIosArrowBack className={isOpen ? 'close' : 'open'} />
      </DDBtn>
      {isOpen ? (
        <DDBackdrop onClick={openDDHandler}>
          <DDContent>
            <ul>
              {menuArr.map((item, idx) => {
                return (
                  <Link
                    to={item.link}
                    key={idx}
                    style={{ textDecoration: 'none' }}
                  >
                    <li
                      role="presentation"
                      onClick={() => switchToClicked(item)}
                    >
                      {item.type}
                    </li>
                  </Link>
                );
              })}
            </ul>
          </DDContent>
        </DDBackdrop>
      ) : null}
    </DDContainer>
  );
}

export default DropDown;
