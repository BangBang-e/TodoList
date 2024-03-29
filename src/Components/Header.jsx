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

  .Title {
    position: relative;
    margin: 0 50px 0 20px;
    font-size: 1.5rem;
    color: black;
    font-family: 'Roboto', sans-serif;
  }
`;

function Header({ isOn, setisOn }) {
  return (
    <Container>
      <Toggle isOn={isOn} setisOn={setisOn} />
      <h1 className="Title">Todo-List</h1>
      <DropDown />
    </Container>
  );
}

export default Header;
