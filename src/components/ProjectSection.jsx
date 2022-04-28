import React from "react";
import styled from "styled-components";
import Card from "./Card";

const ProjectSection = () => {
  return (
    <Container>
      <Title> View Projects</Title>
      <Wrapper>
        <Card />
        <Card />
        <Card />
      </Wrapper>
      <More>
        <div>See All project...</div>
      </More>
    </Container>
  );
};

export default ProjectSection;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  font-style: italic;
  font-weight: bold;
  font-size: 20px;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const More = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;

  font-weight: bold;
  font-size: 16px;
  div {
    width: 180px;
    border: 1px solid #94a7ae;
    display: flex;
    justify-content: center;
    padding: 5px;
    border-radius: 5px;
    &:hover {
      border: 2px solid #94a7ae;
      cursor: pointer;
    }
  }
`;
