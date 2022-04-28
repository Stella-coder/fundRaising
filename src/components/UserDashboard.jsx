import React, { useState } from "react";
import styled from "styled-components";

const UserDashboard = () => {
  const [donor, setDonor] = useState(true);
  const [donation, setDonation] = useState(false);

  const changeDonor = () => {
    setDonor(true);
    setDonation(false);
  };
  const changeDonation = () => {
    setDonor(false);
    setDonation(true);
  };

  return (
    <Container>
      <Text>Project Title</Text>
      <Wrapper>
        <Header>
          <Button onClick={changeDonor}>Donor</Button>
          <Button onClick={changeDonation}>Donation</Button>
          <Button>Log Out</Button>
        </Header>
        {donor ? (
          <Main>
            <Wrap>
              <Name>
                <div>name</div>
                <div>
                  name
                  <div>sj</div>jdjj
                </div>
              </Name>
              <Email>
                {" "}
                <div>name</div>
                <div>name</div>
              </Email>
              <RegNo>
                {" "}
                <div>name</div>
                <div>name</div>
              </RegNo>
            </Wrap>
          </Main>
        ) : (
          <Main>
            <Wrap2>
              <Boxh>
                <Box>
                  <div>Total amount</div>
                  <span>5,000</span>
                </Box>
                <Box>
                  <div>Total amount</div>
                  <span>5,000</span>
                </Box>
              </Boxh>
              <Hold>
                <div>delete</div>
                <div>edit</div>
              </Hold>
              <Share>
                Share
                <div>f</div>
                <div>w</div>
              </Share>
              <Copy>Copy Link</Copy>
              <GetD>Get donation</GetD>
            </Wrap2>
          </Main>
        )}
      </Wrapper>
    </Container>
  );
};

export default UserDashboard;

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 70px;
`;
const Text = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: 25px;
  font-weight: bold;
`;
const Wrapper = styled.div`
  display: flex;
  width: 100%;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;
const Header = styled.div`
  height: 100%;
  display: flex;
  width: 200px;
  background-color: #f4f2f3;
  align-items: center;
  flex-direction: column;
  border-radius: 5px;
  margin: 10px;

  @media screen and (min-width: 769px) {
    position: fixed;
    width: 20%;
    margin: 0;
    border-radius: 0px;
    padding-top: 20px;
    border-right: 2px solid #64766a;
  }
`;
const Main = styled.div`
  position: relative;
  padding-left: 21%;
  background-color: #f4f2f3;
  z-index: -1;
  width: 100%;
  display: flex;
  min-height: 80vh;

  @media screen and (max-width: 768px) {
    padding: 0;
  }
`;

const Wrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

const Button = styled.div`
  width: 150px;
  height: 30px;
  background-color: #c0a9bd;
  border-radius: 5px;
  margin: 5px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: #df54ca;
    transition: all 350ms;
    transform: scaleX(1.05);
  }
`;

const Name = styled.div``;
const Email = styled.div``;
const RegNo = styled.div``;

const Wrap2 = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  flex-direction: column;
  margin-top: 10px;
  justify-content: space-around;
`;
const Boxh = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;
const Box = styled.div`
  width: 250px;
  height: 200px;
  background-color: white;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  span {
  }
  @media screen and (max-width: 768px) {
    width: 150px;
    height: 100px;
    display: flex;
  }
`;
const Hold = styled.div`
  display: flex;
  width: 100%;
  background-color: white;
  justify-content: space-around;
  /* margin-top: 20px; */
`;
const Share = styled.div`
  display: flex;
  width: 100%;
  background-color: white;
  justify-content: space-around;
  /* margin-top: 20px; */
`;

const Copy = styled.div`
  display: flex;
  width: 100%;
  background-color: white;
  justify-content: space-around;
  /* margin-top: 20px; */
`;
const GetD = styled.div`
  margin: 20px;
  height: 35px;
  width: 200px;
  background-color: #c0a9bd;
  border-radius: 50px;
  margin: 5px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-weight: bold;
  /* color: white; */
`;
