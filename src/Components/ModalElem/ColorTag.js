import React, { useState } from 'react';
import styled from 'styled-components';

const Colors = styled.div`
    display: flex;
    div {
        cursor: pointer;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        box-shadow: inset 0px 1px 3px rgba(0, 0, 0, 0.2);
        margin: 20px 2px 7px 2px;
        transition: 0.1s ease - out;
        :hover {
        transition: 0.2s ease - out;
        box-shadow: inset 0px 1px 6px rgba(0, 0, 0, 0.5);
        }
    }
    .red {
        background-color: #E08989;
    }
    .orange {
        background-color: #F2BC74;
    }
    .yellow {
        background-color: #ECE079;
    }
    .green {
        background-color: #B5E089;
    }
    .skyblue {
        background-color: #9BDBCF;
    }
    .blue {
        background-color: #8BB5CD;
    }
    .navy {
        background-color: #9AA3D1;
    }
    .purple {
        background-color: #BE9ED1;
    }
`;

const ColorTag = () => {
    return (
        <>
            <Colors>
                <div className="red" />
                <div className="orange" />
                <div className="yellow" />
                <div className="green" />
                <div className="skyblue" />
                <div className="blue" />
                <div className="navy" />
                <div className="purple" />
            </Colors>
        </>
    );
};

export default ColorTag;