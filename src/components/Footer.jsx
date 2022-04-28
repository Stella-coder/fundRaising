import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <div>
          <div>About</div>
          <div>About</div>
          <div>About</div>
          <div>About</div>
        </div>
        <div>
          <div>link</div>
          <div>link</div>
          <div>link</div>
        </div>
      </Wrapper>
      <Wrap>
        <div>all right reserved</div>
      </Wrap>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  width: 100%;
  min-height: 100px;
  background-color: #64766a;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
`;
const Wrapper = styled.div`
  display: flex;
`;
const Wrap = styled.div``;
