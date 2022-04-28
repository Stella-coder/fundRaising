import React, { useState } from "react";
import styled from "styled-components";
import { Input } from "antd";
import GlobalButton from "./GlobalButton";

const DetailPage = () => {
  const [donate, setDonate] = useState(false);

  const changeDonate = () => {
    setDonate(!donate);
    console.log(donate);
  };
  return (
    <>
      <Container>
        <Title>Class mic project</Title>
        <Wrapper>
          <Image />
          <Desc>
            Dednnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnsjc
            Dednnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnsjc
          </Desc>
        </Wrapper>
        <Hold>
          {" "}
          <Created>
            Created by <div>5000</div>
          </Created>
          <Cat>
            Category <div>5000</div>
          </Cat>
          <Deadline>
            Deadline <div>5000</div>
          </Deadline>
        </Hold>
        <Wrap>
          <Total>
            Total Amount <div>5000</div>
          </Total>
          <Raised>
            Total Amount raised <div>5000</div>
          </Raised>
          <Input placeholder="Enter amount to donate" />
          <Donate onClick={changeDonate}>Donate</Donate>
        </Wrap>
      </Container>
      {donate ? (
        <Container2>
          <Close onClick={changeDonate}>x</Close>
          <Holder>
            <Form>
              <Text>
                to donate <div>5000</div> enter your details
              </Text>
              <Input placeholder="Enter your name" />
              <Input placeholder="Enter your Reg No" />
              <Input placeholder="Enter your Email" />
              <Pay>
                <GlobalButton text="Pay Now" />
              </Pay>
            </Form>
          </Holder>
        </Container2>
      ) : null}
    </>
  );
};

export default DetailPage;

const Container2 = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  min-height: 90vh;
  /* justify-content: center; */
  top: 80px;
  flex-direction: column;
`;

const Close = styled.div`
  width: 100%;
  /* height: 10px; */
  display: flex;
  justify-content: flex-end;
  font-size: 30px;
  margin-right: 20px;
  cursor: pointer;
  /* background-color: red; */
`;
const Holder = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Form = styled.div`
  height: 500px;
  width: 500px;
  background-color: white;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  Input {
    width: 250px;
    margin: 5px 0px;
  }

  @media screen and (max-width: 768px) {
    width: 250px;
    height: 100%;
    Input {
      width: 200px;
    }
  }
`;
const Text = styled.div`
  display: flex;

  div {
    margin: 0px 5px;
    font-weight: bold;
  }
`;

const Pay = styled.div`
  width: 180px;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #f4f2f3;
  min-height: 100vh;
  justify-content: center;
  padding-top: 80px;
  position: relative;
`;
const Title = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: 22px;
  font-weight: bold;
  text-transform: uppercase;
`;
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  padding: 10px;
  /* background-color: green; */
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
const Image = styled.div`
  width: 40%;
  height: 200px;
  object-fit: cover;
  background-color: #64766a;
  border-radius: 5px;
  @media screen and (max-width: 768px) {
    width: 240px;
  }
`;
const Desc = styled.div`
  width: 50%;
  /* height: 100px; */
  /* background-color: yellow; */
  word-break: break-all;
  padding: 5px;
  @media screen and (max-width: 768px) {
    width: 250px;
  }
`;

const Donate = styled.div`
  display: flex;
  width: 150px;
  height: 40px;
  justify-content: center;
  align-items: center;
  background-color: #c0a9bd;
  border-radius: 20px;
  transform: scale(1);
  cursor: pointer;
  &:hover {
    background-color: #df54ca;
    transition: all 350ms;
    transform: scaleX(1.05);
  }
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 200px;
  justify-content: space-around;
  background-color: rgba(255, 255, 255, 0.5);
  Input {
    width: 280px;
    @media screen and (min-width: 768px) {
      width: 350px;
    }
  }
`;
const Total = styled.div`
  display: flex;
  div {
    margin-left: 5px;
    font-weight: bold;
  }
`;
const Raised = styled.div`
  display: flex;
  div {
    margin-left: 5px;
    font-weight: bold;
  }
`;

const Hold = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 60px;
  width: 100%;
  font-weight: bold;
  @media screen and (max-width: 768px) {
    align-items: center;
    margin: 0;
  }
`;

const Cat = styled.div`
  display: flex;
  font-style: oblique;
  div {
    margin-left: 5px;
  }
`;
const Deadline = styled.div`
  font-style: italic;
  display: flex;
  div {
    margin-left: 5px;
  }
`;

const Created = styled.div`
  display: flex;
  font-style: oblique;
  div {
    margin-left: 5px;
  }
`;
