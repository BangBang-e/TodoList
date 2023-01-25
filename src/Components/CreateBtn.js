import { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import ModalAdd from './ModalElem/ModalAdd.js';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
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
    bottom:40px;
    width: 66px;
    height: 66px;
    border: none;
    border-radius: 50%;
    background-color: #F3A339;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.35);
    padding-top: 6px;
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
        background-color: #E47C01;
        transition: 0.3s ease-out;
    }
    :active {
        font-size: 2rem;
        transition: 0.2s;
    }
`;
const ModalBackdrop = styled.div`
    width: 393px;
    height: 715px;
    position: absolute;
    right: 0;
    top: 0;
    border-radius: 10px;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    z-index: 99;
    background:linear-gradient(180deg, rgba(150, 150, 150, 0)  13%, rgba(150, 150, 150, 0.2) 13%);
`;

const CreateBtn = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openModalHandler = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <Container>
                <ModalBtn onClick={openModalHandler} >
                    <FontAwesomeIcon icon={faPlus} className={isOpen ? "close" : "plus"} />
                </ModalBtn>
                {isOpen ?
                    <ModalBackdrop onClick={openModalHandler}>
                        <ModalAdd />
                    </ModalBackdrop>
                    : null}
            </Container>
        </>
    );
};

export default CreateBtn;