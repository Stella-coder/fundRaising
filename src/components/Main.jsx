import React from "react";
import styled from "styled-components";
import Card from "./Card";
import Hero from "./Hero";
import ProjectSection from "./ProjectSection";

const Main = () => {
  return (
    <Container>
      <Wrapper>
        <Hero />
        <ProjectSection />
      </Wrapper>
    </Container>
  );
};

export default Main;

const Container = styled.div`
  padding-top: 70px;
  width: 100%;
  display: flex;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 95%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
