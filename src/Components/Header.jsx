import React from 'react';
import styled from 'styled-components';

import Toggle from './HeaderElem/Toggle';
import DropDown from './HeaderElem/DropDown';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 40px 50px 5px 0;
  border-bottom: 1px solid rgba(150, 150, 150, 0.2);
  background-color: rgba(212, 205, 169, 0.2);
  border-radius: 10px 10px 0px 0px;
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

  .Title {
    position: relative;
    margin: 0 50px 0 20px;
    font-size: 1.5rem;
    color: black;
    font-family: 'Roboto', sans-serif;
  }
`;

function Header() {
  return (
    <Container>
      <Toggle />
      <h1 className="Title">Todo-List</h1>
      <DropDown />
    </Container>
  );
}

export default Header;
