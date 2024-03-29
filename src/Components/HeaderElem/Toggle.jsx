import styled from 'styled-components';

const ToggleContainer = styled.div`
  position: relative;
  cursor: pointer;
  margin-top: 3px;
  width: 93px;
  height: 23px;
  bottom: 3px;
  right: 15px;
  z-index: 1;
  border-radius: 3px;
  background-color: #ffffff;
  box-shadow: inset 0px 0px 2px rgba(0, 0, 0, 0.4);
`;
const ToggleCircle = styled.div`
  position: absolute;
  top: 8.7%;
  bottom: 8.7%;
  left: ${(props) => (props.checked ? '47px' : '2px')};
  z-index: 2;
  width: 44px;
  height: 19px;
  border-radius: 2px;
  background-color: #a9a9a9;
  box-shadow: inset -1px -1px 4px rgba(0, 0, 0, 0.2);
  transition: 0.2s;
`;
const ToggleTextContainer = styled.div`
  display: flex;
`;
const ToggleText = styled.div`
  width: 44px;
  font-weight: 500;
  margin: 2px 0px 0px 2px;
  text-align: center;
  color: ${(props) => (props._on ? '#A9A9A9' : '#FFFFFF')};
  z-index: 3;
  transition: 0.2s;
`;

function Toggle({ isOn, setisOn }) {
  const toggleHandler = () => {
    setisOn(!isOn);
  };

  return (
    <ToggleContainer onClick={toggleHandler}>
      <ToggleCircle checked={isOn} />
      <ToggleTextContainer>
        <ToggleText _on={isOn}>모두</ToggleText>
        <ToggleText _on={!isOn}>오늘</ToggleText>
      </ToggleTextContainer>
    </ToggleContainer>
  );
}

export default Toggle;
