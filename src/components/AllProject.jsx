import { Input } from "antd";
import React from "react";
import styled from "styled-components";
import img from "../wall/3.jpg";
import Card from "./Card";
import { AiOutlineSearch } from "react-icons/ai";

const AllProject = () => {
  return (
    <Container>
      <Blur>
        <Title>All Project</Title>

        <Search>
          <div>
            <AiOutlineSearch />
          </div>
          <Input placeholder=" Enter Category" />
        </Search>

        <Wrapper>
          <Card />
        </Wrapper>
      </Blur>
    </Container>
  );
};

export default AllProject;

const Container = styled.div`
  width: 100%;
  padding-top: 80px;
  min-height: 100vh;
  display: flex;

  /* background-image: url(${img}); */
  background-position: fixed;
  background-size: cover;
  background-repeat: no-repeat;
`;

const Blur = styled.div`
  width: 100%;
  display: flex;
  background-color: #f4f2f3;
  /* background-color: rgba(0, 0, 0, 0.9); */
  position: absolute;
  min-height: 100vh;
  flex-direction: column;
  color: black;
  align-items: center;
`;
const Title = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  font-weight: bold;
  font-size: 20px;
`;
const Search = styled.div`
  height: 40px;
  width: 300px;
  border-radius: 30px;
  background-color: #94a7ae;
  display: flex;
  align-items: center;
  padding: 7px;
  div {
    color: white;
    font-weight: bold;
    font-size: 16px;
  }

  Input {
    width: 250px;
    border: 0;
    outline: 0;
    background-color: #94a7ae;
  }
  @media screen and (min-width: 768px) {
    width: 450px;
    Input {
      width: 400px;
    }
  }
`;
const Category = styled.div``;
const Wrapper = styled.div``;
