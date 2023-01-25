import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

import Calendar from './Calendar.js';
import ColorTag from './ColorTag.js';

const ModalView = styled.div.attrs(props => ({
    role: 'dialog'
}))`
    text-align: center;
    text-decoration: none;
    background-color: white;
    width: 348px;
    height: 302px;
    border-radius: 9px;
    box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.2);
	-webkit-animation: scale-up-bottom 0.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
	        animation: scale-up-bottom 0.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;

    .topContainer {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
    #todoContent {
        width: 312px;
        height: 35px;
        box-shadow: inset 0px 1px 6px rgba(0, 0, 0, 0.15);
        border: none;
        border-radius: 9px;
        margin-bottom: 10px;
        font-size: 1rem;
        padding: 0 10px 0 10px;
        ::placeholder {color:rgba(180, 180, 180);}
        ::-webkit-input-placeholder {color:rgba(180, 180, 180);}
        :-ms-input-placeholder {color:rgba(180, 180, 180);}
    }
    /* .input--memo {
        vertical-align: top;
    } */
    #todoMemo {
        width: 312px;
        height: 126px;
        box-shadow: inset 0px 1px 6px rgba(0, 0, 0, 0.15);
        border: none;
        border-radius: 9px;
        font-size: 1rem;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
        "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        padding: 10px 10px 10px 10px;
        resize: none;
        ::placeholder {color:rgba(180, 180, 180);}
        ::-webkit-input-placeholder {color:rgba(180, 180, 180);}
        :-ms-input-placeholder {color:rgba(180, 180, 180);}
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
        background-color: #F3A339;
        box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.2);
        margin-top: 6px;
        color: white;
        font-size: 1rem;
        transition: 0.1s;
        :hover {
            background-color: #E47C01;
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


const ModalAdd = () => {
    // const [isOn, setisOn] = useState(false);

    // const toggleHandler = () => {
    //     console.log('실행')
    //     setisOn(!isOn)
    // };

    return (
        <>
            <ModalView>
                <div className="topContainer">
                    <Calendar />
                    <ColorTag />
                </div>
                <div className="input--content">
                    <input
                        type="text"
                        content="todoContent"
                        id="todoContent"
                        placeholder="Todo"
                        maxlength="20"
                    />
                </div>
                <div className="input--memo">
                    <textarea
                        content="todoMemo"
                        id="todoMemo"
                        placeholder="Memo"
                        rows="10"
                    />
                </div>
                <div className="submit">
                    <button className="todoSubmit" type="submit" value="submit">
                        <FontAwesomeIcon icon={faArrowUp} />
                    </button>
                </div>
            </ModalView>
        </>
    );
};

export default ModalAdd;