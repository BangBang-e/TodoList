import React, { useState } from 'react';
import styled from 'styled-components';

import Toggle from './HeaderElem/Toggle.js';
import DropDown from './HeaderElem/DropDown.js';

const Container = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

    padding: 58px 15px 5px 25px;
    border-bottom: 1px solid rgba(150, 150, 150, 0.2);
    background-color: rgba(212, 205, 169, 0.2);
    border-radius: 10px 10px 0px 0px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    h1 {
        margin: 0px 20px 0px 35px;
        padding-right: 45px;
        font-size: 1.5rem;
        color: black;
        font-family: 'Roboto', sans-serif;
    }
`;

const Header = (props) => {
    const [dropdownVisibility, setDropdownVisibility] = React.useState(false);

    return (
        <Container>
            <Toggle />
            <div><h1>Todo-List</h1></div>
            <DropDown />
        </Container>
    );
};

export default Header;