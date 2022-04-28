import React, { useState } from "react";
import styled from "styled-components";
import img from "../wall/1.jpg";
import { Input, Button } from "antd";

const CreateProject = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [image, setImage] = useState(img);
  return (
    <Container>
      <Wrapper>
        <CardHolder>
          <HoldLabel>
            <Input type="file" id="up" />
          </HoldLabel>
          <Label htmlFor="up">Upload Image</Label>
          <Input
            placeholder="Enter your Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <Input
            placeholder="Enter your Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <Input
            placeholder="Enter your Password"
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <Label>Sign Up</Label>
          <div>Or</div>
          <Button>Sign Up With Google</Button>
          <Text>
            Already have an account? <div>Log in</div>
          </Text>
        </CardHolder>
        <Image src={image} />
      </Wrapper>
    </Container>
  );
};

export default CreateProject;

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 80px;
  z-index: -1;
`;
const Wrapper = styled.div`
  width: 700px;
  height: 500px;
  background: rgba(150, 127, 127, 0.25);
  box-shadow: 0 8px 12px 0 rgba(31, 38, 13, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
  @media screen and (max-width: 768px) {
    width: 300px;
    height: 100%;
    min-height: 500px;
    flex-wrap: wrap;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: flex-end;
    h1 {
      color: blue;
    }
  }
  @media screen and (min-width: 768px) {
    h1 {
      display: none;
    }
  }
`;
const Image = styled.img`
  height: 50%;
  width: 50%;
  /* margin: 10px 10px; */
  border-radius: 10px;
  border: 1px solid #004080;
  @media screen and (max-width: 768px) {
    border-radius: 50%;
    height: 150px;
    width: 150px;
  }
`;
const CardHolder = styled.div`
  width: 280px;
  display: flex;
  margin: 0px 10px;
  align-items: center;
  justify-content: center;
  height: 100%;
  flex-direction: column;
  Input {
    margin: 10px 0px;
  }
  Button {
    width: 100%;
    background-color: ${({ clr }) => (clr ? "red" : "#004080")};
  }
  div {
    font-weight: bold;
    margin: 5px 0px;
  }
`;

const HoldLabel = styled.div`
  display: none;
`;
const Label = styled.label`
  /* padding: 10px;
  background-color: #004080;
  border-radius: 20px;
  color: #da9393;
  font-weight: bold;
  margin: 5px 0px; */
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  height: 34px;
  width: 100%;
  background-color: #377dff;
  border: none;
  border-radius: 5px;
  color: #fff;
  font-size: 12px;
  font-weight: 600;
  font-family: Montserrat;
  transition: all 350ms;
  transform: scale(1);
  margin: 5px 5px;

  :hover {
    transform: scale(0.94);
  }
`;

const Text = styled.div`
  margin: 5px 0px;
  align-items: center;
  display: flex;
  div {
    margin-left: 5px;
    color: blue;
    cursor: pointer;
    font-weight: bold;
  }
`;
