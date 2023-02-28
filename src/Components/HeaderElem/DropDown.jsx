import { React, useState } from 'react';
import styled from 'styled-components';
import { IoIosArrowBack } from "react-icons/io";

const DDContainer = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
    margin-top: 3px;
    font-family: sans-serif;
    display: flex;
    justify-content: center;
    position: relative;
    bottom: 10px;
`;

const DDBtn = styled.div`
    cursor: pointer;
    display: flex;
    left: 0;
    position: absolute;
    font-size: 1.2rem;
    transition: 0.1s ease-out;
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
    right: 10px;
    top: 88px;
    width: 60px;
    height: 100px;
    border-radius: 3px;
    background: white;
    box-shadow: rgba(50, 50, 93, 0.45) 0px 6px 12px -2px, rgba(0, 0, 0, 0.45) 0px 3px 7px -3px;
    ul {
    list-style-type: none;
    position: relative;
    margin-top: 5px;
    bottom: 5px;
    right: 20px;
    }
    li {
    margin-top: 8px;
    padding: 3px 10px 1px 15px;
    text-align: right;
    }
    li:hover {
    cursor: pointer;
    background: rgba(100, 100, 100, 0.1);
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

    const openDDHandler = () => {
        console.log('드롭다운')
        setIsOpen(!isOpen);
    };
    return (
        <DDContainer>
            <DDBtn onClick={openDDHandler} >
                <div className='selected'>All</div>
                <IoIosArrowBack className={isOpen ? "close" : "open"} />
            </DDBtn>
            {isOpen ?
                <DDBackdrop onClick={openDDHandler}>
                    <DDContent>
                        <ul>
                            <li>All</li>
                            <li>Todo</li>
                            <li>Done</li>
                        </ul>
                    </DDContent>
                </DDBackdrop>
                : null}
        </DDContainer>
    );
}

export default DropDown;