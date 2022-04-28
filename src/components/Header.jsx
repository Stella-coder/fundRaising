import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import GlobalButton from "./GlobalButton";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
// import { AuthContext } from "./AuthState";
// import { app } from "../base";
import Fade from "react-reveal/Fade";

const Header = () => {
  // const { currentUser } = useContext(AuthContext);
  // console.log(currentUser);
  const [toggle, setToggle] = useState(false);
  // const [landlordData, setLandlordData] = useState([]);
  // const [userData, setUserData] = useState([]);
  // const [check, setCheck] = useState(false);
  const change = () => {
    setToggle(!toggle);
  };

  // const getLandlordData = async () => {
  //   await app
  //     .firestore()
  //     .collection("allLandlord")
  //     .orderBy("verify")
  //     .startAt(true)
  //     .endAt(true)
  //     .onSnapshot((snapshot) => {
  //       const item = [];
  //       snapshot.forEach((doc) => {
  //         item.push({ ...doc.data(), id: doc.id });
  //         setLandlordData(item);
  //         // console.log(item);
  //         console.log("this", landlordData);
  //       });
  //     });
  // };
  // const getSingle = async (id) => {
  //   if (currentUser) {
  //     // const id = currentUser.id;
  //     await app
  //       .firestore()
  //       .collection("allLandlord")
  //       .doc(id)
  //       .get()
  //       .then((res) => {
  //         res.data();
  //         console.log("res", res);
  //       });
  //   }
  // };

  // const getUserData = async () => {
  //   await app
  //     .firestore()
  //     .collection("users")
  //     .onSnapshot((snapshot) => {
  //       const item = [];
  //       snapshot.forEach((doc) => {
  //         item.push({ ...doc.data(), id: doc.id });
  //         setUserData(item);
  //         // console.log(item);
  //         console.log("here", userData);
  //       });
  //     });
  // };
  // const myFun = () => {
  //   if (currentUser) {
  //     const all = landlordData.map(({ createdBy }) => createdBy);
  //     console.log("all", all);

  //     const id = currentUser.uid;
  //     setCheck(all.some((el) => el.id === id));
  //     console.log("checking", check);
  //   }
  // };

  // useEffect(() => {
  //   getLandlordData();
  //   getUserData();
  //   myFun();
  //   getSingle();
  // }, []);
  return (
    <>
      <Container>
        <Logo>Logo</Logo>
        <Wrapper>
          <Holder>
            <Link to="/">
              <div>Home</div>
            </Link>

            <Link to="/">
              <div>About</div>
            </Link>
            <Link to="/all">
              <div>All Projects</div>
            </Link>
            <div>Blog</div>
          </Holder>
          <Link to="/login">
            <GlobalButton text="Login" />
          </Link>
          <Link to="/create">
            <GlobalButton text="Create Project" />
          </Link>
        </Wrapper>
        <MenuBar onClick={change}>
          <AiOutlineMenu />
        </MenuBar>
      </Container>
      {/* {toggle ? ( */}
      <Fade left opposite when={toggle}>
        <MenuHolder>
          <Menu>
            <HolderM>
              <Link to="/">
                <div onClick={change}>Home</div>
              </Link>
              <div onClick={change}>About</div>
              <div onClick={change}>Housing</div>
              <div onClick={change}>Cart</div>
            </HolderM>
            <HoldButton>
              {/* <div>{currentUser?.uid}</div>
              {currentUser ? (
                <GlobalButton text="Log Out" />
              ) : (
                <Link to="/login">
                  <GlobalButton click={change} text="Login" />
                </Link>
              )} */}
              {/* <Link to="/register">
                <GlobalButton click={change} text="Register" />
              </Link> */}
            </HoldButton>
          </Menu>
        </MenuHolder>
      </Fade>
      {/* ) : null} */}
    </>
  );
};

export default Header;

const MenuHolder = styled.div`
  width: 100vw;
  height: 85vh;
  background-color: rgba(25, 25, 25, 0.5);
  display: flex;
  border-top: 1px solid #5e749c;
  top: 70px;
  position: fixed;
  justify-content: flex-end;
  z-index: 1;
  @media screen and (min-width: 989px) {
    display: none;
  }
`;
const Menu = styled.div`
  width: 70vw;
  height: 100%;
  display: flex;
  background-color: rgba(255, 255, 255, 1);
  -webkit-backdrop-filter: blur(4px);
  backdrop-filter: blur(4px);
  border-radius: 0px 0px 0px 5px;
  flex-direction: column;
  z-index: 1;
`;

const Wrap = styled.div`
  display: flex;
  align-items: center;
`;

const MenuBar = styled.div`
  margin-right: 30px;
  font-size: 20px;
  cursor: pointer;
  @media screen and (min-width: 968px) {
    display: none;
  }
`;

const Container = styled.div`
  height: 70px;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.45);
  -webkit-backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  position: fixed;
  justify-content: space-between;
  /* border-bottom: 1px solid gray; */
  z-index: 1000;
  color: #64766a;
  @media screen and (max-width: 768px) {
    background-color: white;
  }
`;

const Logo = styled.div`
  margin-left: 30px;
`;
const Holder = styled.div`
  display: flex;
  /* justify-content: center; */
  font-weight: bold;
  color: #c0a9bd;
  flex: 1;
  text-decoration: none;

  div {
    text-decoration: none;
    cursor: pointer;
    opacity: 0.8;
    transition: all 350ms;
    margin-left: 60px;
    color: #64766a;
    &:hover {
      opacity: 1;
    }
  }
`;
const LinkH = styled.div``;

const HolderM = styled.div`
  display: flex;
  justify-content: center;
  width: 80%;
  /* height: 100%; */
  font-weight: bold;
  /* color: #377dff; */
  color: #64766a;
  flex: 1;
  flex-direction: column;
  text-decoration: none;

  div {
    text-decoration: none;
    cursor: pointer;
    opacity: 0.8;
    transition: all 350ms;
    margin: 20px;
    border-bottom: 1px solid #64766a;
    transition: all 350ms;

    &:hover {
      border-bottom: 2px solid #64766a;
      opacity: 1;
    }
  }
`;
const Wrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  @media screen and (max-width: 968px) {
    display: none;
  }
`;

const HoldButton = styled.div`
  width: 200px;
`;
