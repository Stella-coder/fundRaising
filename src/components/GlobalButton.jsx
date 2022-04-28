import React from "react";
import styled from "styled-components";

const GlobalButton = ({ text, click, style }) => {
  return (
    <Container style={style} onClick={click}>
      {text}
    </Container>
  );
};

export default GlobalButton;

const Container = styled.div`
  height: 40px;
  display: flex;
  min-width: 150px;
  max-width: 100%;
  background-color: #64766a;
  margin: 10px;
  border-radius: 10px;
  font-weight: bold;
  color: white;
  padding: 5px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transform: scale(1);
  /* opacity: 0.7; */
  transition: all 450ms;
  text-decoration: none;
  &:hover {
    transform: scale(1.09);
    /* background-color: blue; */
  }
`;
const Wrapper = styled.div``;
