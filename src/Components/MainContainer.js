import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
    width: 393px;
    height: 715px;
    position: relative;
    background: white;
    border-radius: 10px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.5) 0px 30px 60px -30px, rgba(10, 37, 64, 0.5) 0px -2px 6px 0px inset;
    margin: 0 auto;
    margin-top: 96px;
    margin-bottom: 32px;
    display: flex;
    flex-direction: column;
`;

function MainContainer({ children }) {
    return (
        <Container>
            {children}
        </Container>
    );
};

export default MainContainer;