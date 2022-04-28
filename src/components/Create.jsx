import React, { useState } from "react";
import styled from "styled-components";
import img1 from "../wall/1.jpg";
import { Button, Input } from "antd";
import { app } from "../base";
import firebase from "firebase";
import { useHistory } from "react-router-dom";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const Create = () => {
  const history = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState(img1);
  const [avatar, setAvatar] = useState("");
  const [percent, setPercent] = useState(0);
  const [show, setShow] = useState(true);
  const toggle = () => {
    setShow(!show);
  };

  const uploadImage = async (e) => {
    const file = e.target.files[0];
    const save = URL.createObjectURL(file);
    setImage(save);

    const fileRef = await app.storage().ref();
    const storeRef = fileRef.child("avatar/" + file.name).put(file);

    storeRef.on(
      firebase.storage.TaskEvent.STATE_CHANGED,
      (snapShot) => {
        const counter = (snapShot.bytesTransferred / snapShot.totalBytes) * 100;

        setPercent(counter);
        console.log(counter);
      },
      (err) => console.log(err.message),
      () => {
        storeRef.snapshot.ref.getDownloadURL().then((URL) => {
          setAvatar(URL);
          console.log(URL);
        });
      }
    );
  };

  const signUp = async () => {
    const saveUser = await app
      .auth()
      .createUserWithEmailAndPassword(email, password);

    if (saveUser) {
      await app.firestore().collection("users").doc(saveUser.user.uid).set({
        avatar,
        name,
        email,
        password,
        createdBy: saveUser.user.uid,
      });
      setName("");
      setEmail("");
      setPassword("");
      history.push("/register");
    }
  };

  const GoogleSignIn = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const saveUser = await app.auth().signInWithPopup(provider);

    if (saveUser) {
      await app.firestore().collection("users").doc(saveUser.user.uid).set({
        avatar: saveUser.user.photoURL,
        name: saveUser.user.displayName,
        email: saveUser.user.email,
        password,
        createdBy: saveUser.user.uid,
      });
      history.push("/");
    }
  };

  const Login = async () => {
    const saveUser = await app
      .auth()
      .signInWithEmailAndPassword(email, password);

    history.push("/");
  };

  return (
    <Container>
      {show ? (
        <Wrapper>
          <CardHolder>
            <HoldLabel>
              <Input type="file" id="up" onChange={uploadImage} />
            </HoldLabel>
            <Label htmlFor="up">Upload Image</Label>
            <Input
              placeholder="Enter your Project Title"
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
            <Input.TextArea
              style={{ resize: "none", height: "100px" }}
              placeholder="Project Description"
              type="description"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />

            <Text>
              Continue
              <div onClick={toggle}>
                <AiOutlineArrowRight />
              </div>
            </Text>
          </CardHolder>
          <Image src={image} />
        </Wrapper>
      ) : (
        <Wrapper>
          <CardHolder>
            <select>
              <option>Select Category</option>
              <option>Health</option>
              <option>Creative Project</option>
              <option>Educational Trip</option>
              <option>Clubs & Community</option>
              <option>others</option>
            </select>
            <Input
              placeholder="Enter your deadline"
              // value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <Label onClick={signUp}>Log In</Label>

            <Text>
              Go back{" "}
              <div onClick={toggle}>
                <AiOutlineArrowLeft />
              </div>
            </Text>
          </CardHolder>
        </Wrapper>
      )}
    </Container>
  );
};

export default Create;

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
  background-color: #f4f2f3;
  box-shadow: 0 8px 20px 0 rgba(31, 38, 35, 0.37);
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
      color: #94a7ae;
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
  select {
    width: 100%;
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
  background-color: #94a7ae;
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
  width: 100%;
  justify-content: flex-end;
  align-items: center;
  display: flex;
  div {
    margin-top: 10px;
    color: #94a7ae;
    cursor: pointer;
    font-weight: bold;
    font-size: 20px;
  }
`;
