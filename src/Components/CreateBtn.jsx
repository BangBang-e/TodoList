import { useState } from 'react';

import ModalAdd from './ModalElem/ModalAdd.jsx';
import { TfiPlus } from 'react-icons/tfi';

import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
`;
const ModalBtn = styled.button`
  cursor: pointer;
  position: absolute;
  z-index: 100;
  right: 160px;
  bottom: 40px;
  width: 66px;
  height: 66px;
  border: none;
  border-radius: 50%;
  background-color: #f3a339;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.35);
  padding-top: 10px;
  color: white;
  font-size: 2.5rem;
  transition: 0.1s ease-out;
  .close {
    transform: rotate(45deg);
    transition: transform 0.2s ease-out;
  }
  .plus {
    transform: rotate(0deg);
    transition: transform 0.2s ease-out;
  }
  :hover {
    background-color: #e47c01;
    transition: 0.3s ease-out;
  }
  :active {
    font-size: 2rem;
    transition: 0.2s;
  }
`;
const ModalBackdrop = styled.div`
  position: absolute;
  width: 393px;
  height: 715px;
  bottom: 0px;
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

const CreateBtn = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModalHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Container>
      <ModalBtn onClick={openModalHandler}>
        <TfiPlus className={isOpen ? 'close' : 'plus'} />
      </ModalBtn>
      {isOpen ? (
        <ModalBackdrop onClick={openModalHandler}>
          <ModalAdd />
        </ModalBackdrop>
      ) : null}
    </Container>
  );
};

export default CreateBtn;
