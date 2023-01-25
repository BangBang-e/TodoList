import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

const TodoDrop = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
margin-top: 3px;

    .body {
    font-family: sans-serif;
    display: flex;
    justify-content: center;
    }
    .container {
    position: relative;
    height: 25px;
    z-index: 10;
    }
    #dropdown {
    left: 0;
    visibility: hidden;
    position: absolute;
    }
    .dropdownLabel {
    display: flex;
    justify-content: space-between;
    padding: 12px;
    }
    .dropdownLabel:hover {
    cursor: pointer;
    }
    .content {
    display: none;
    position: absolute;
    left: 5px;
    top: 25px;
    height: 110px;
    border-radius: 3px;
    background: white;
    box-shadow: rgba(50, 50, 93, 0.45) 0px 6px 12px -2px, rgba(0, 0, 0, 0.45) 0px 3px 7px -3px;
    }

    #dropdown:checked + label + div.content {
    display: block;
    border-top: 1px solid #00000026;
    }
    .dropdownIcon {
    transition: transform 0.2s ease-out;
    margin: 1px 0 0 5px
    }
    #dropdown:checked + label > .dropdownIcon {
    transform: rotate(-90deg);
    transition: 0.2s;
    }

    .content ul {
    list-style-type: none;
    padding: 5px 12px 0px 12px;
    margin: 0;
    }
    .content li {
    margin: 0.8rem 0;
    text-align: right;
    }
`;

const DropDown = () => {
    return (
        <TodoDrop className="body">
            <div className="container">
                <input id="dropdown" type="checkbox" />
                <label className="dropdownLabel" for="dropdown">
                    <div>All</div>
                    <FontAwesomeIcon icon={faAngleLeft} className='dropdownIcon' />
                </label>
                <div className="content">
                    <ul>
                        <li>All</li>
                        <li>Todo</li>
                        <li>Done</li>
                    </ul>
                </div>
            </div>
        </TodoDrop>
    );
};

export default DropDown;