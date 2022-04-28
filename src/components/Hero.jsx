import React from "react";
import styled from "styled-components";
import img from "../wall/1.jpg";
import GlobalButton from "./GlobalButton";

const Hero = () => {
  return (
    <Container>
      <Image src={img} />
      <Wrapper>
        <Text>A little help can make a difference</Text>
        <Text2>
          Create campaign project and raise funds for any cause or project for
          free. just create campaign and share with your family and friends
        </Text2>
        <HoldB>
          <GlobalButton text="Create Project" />
        </HoldB>
      </Wrapper>
    </Container>
  );
};

export default Hero;

const Container = styled.div`
  width: 100%;
  /* height: 80vh; */
  /* background-color: blue; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 20px;

  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
    justify-content: center;
    margin-top: 0;
  }
`;
const Wrapper = styled.div`
  width: 500px;
  min-height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  line-height: 1.8;
  /* background-color: green; */

  @media screen and (max-width: 768px) {
    width: 280px;
    margin: 0;
  }
`;
const Image = styled.img`
  width: 500px;
  height: 400px;
  background-color: red;
  object-fit: cover;

  /* margin-left: 50px; */
  @media screen and (max-width: 768px) {
    width: 280px;
    margin: 0;
  }
`;

const Text = styled.div`
  font-weight: bold;
  font-size: 25px;
`;
const Text2 = styled.div`
  font-weight: bold;
  font-size: 20px;
`;
const HoldB = styled.div`
  width: 200px;
`;
