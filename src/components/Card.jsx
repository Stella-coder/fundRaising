import React from "react";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";

const Card = () => {
  const { id } = useParams();
  console.log("id", id);
  return (
    <Container>
      <Wrapper>
        <Image />
        <Title>Title</Title>
        <Desc>short description</Desc>
        <Category>Category</Category>
        <Amount>Total Amount needed</Amount>
        <Link to={`/detail/id`}>
          <More>See More...</More>
        </Link>
      </Wrapper>
    </Container>
  );
};

export default Card;

const Container = styled.div`
  width: 250px;
  height: 300px;
  /* background-color: #64766a; */
  border-radius: 5px;
  display: flex;
  margin: 5px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  /* color: white; */
`;
const Wrapper = styled.div`
  display: flex;
  /* justify-content: center; */
  padding: 5px;
  flex-direction: column;
  width: 100%;
`;
const Image = styled.img`
  width: 100%;
  height: 150px;
  background-color: #94a7ae;
`;
const Title = styled.div`
  font-weight: bold;
  font-size: 18px;
`;
const Desc = styled.div``;
const Category = styled.div`
  font-style: italic;
`;
const Amount = styled.div``;
const More = styled.div`
  width: 100px;
  height: 40px;
  background-color: #94a7ae;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  cursor: pointer;
  text-decoration: none;
  color: white;
  &:hover {
    background-color: #c0a9bd;
    transition: all 350ms;
  }
`;
