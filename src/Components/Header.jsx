import React from "react";
import styled from "styled-components";
import headerImg from "../images/header.png";
import Button from "@mui/material/Button";

const HeaderComponent = styled.header`
  background-image: url("https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80");
  height: 100vh;
  width: 100%;
  box-shadow: inset 0 -5px 10px 0 #ffffff;
  background-size: cover;
`;
const Image = styled.div`
  height: 100vh;
  width: 100vw;
  opacity: 0.9;
  background-image: url(${headerImg});
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  overflow-x: hidden;
`;
const H1 = styled.h1`
  height: 30rem;
  width: 50rem;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  left: 50%;
  display: flex;
  justify-content: center;
  font-size: 8rem;
  align-items: center;
  font-family: "Megrim", cursive;
  color: #000000dd;
  &::after {
    font-family: "Kulim Park", sans-serif;
    font-weight: 100;
    content: "Time to change";
    font-size: 1.5rem;
    display: block;
    position: absolute;
    bottom: 32%;
    right: 18%;
    border-top: 1px solid #00000070;
    padding-top: 2px;
  }
`;
const Span = styled.span`
  color: #118df3;
`;
const Icons = styled.div`
  position: relative;
  width: 35rem;
  background-image: linear-gradient(270deg, rgba(0, 0, 0, 0), #f7f7f7dd);
  height: 35rem;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 45%;
  left: 50%;
  box-shadow: 0 0 20px 5px #201e1c49;
  backdrop-filter: blur(8px);
  border-radius: 46% 54% 73% 27% / 67% 56% 44% 33%;
`;
const HeaderBanner = styled.div`
  width: 100vw;
  height: 5rem;
  display: flex;
  justify-content: space-between;
  position: relative;
  &::after {
    content: "";
    width: 90%;
    background-color: #fff;
    height: 1px;
    position: absolute;
    left: 6%;
    top: 100%;
  }
`;
const UnsortedList = styled.ul`
  display: flex;
  width: 40%;
  justify-content: space-evenly;
  align-items: center;
`;
const List = styled.li`
  padding-inline: 10px;
  cursor: pointer;
  font-family: "Kulim Park", sans-serif;
  text-align: center;
  color: #ffffff;
  font-size: 2.5rem;
  font-weight: 100;
`;
const H2 = styled.h2`
  font-family: "Kulim Park", sans-serif;
  font-weight: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25%;
  color: #fff;
  font-size: 2.8rem;
`;

export default function Header() {
  return (
    <HeaderComponent>
      <Image>
        <HeaderBanner>
          <H2>Profesio</H2>
          <UnsortedList>
            <List>
              <Button style={{color: '#fff'}} href="#about">About</Button>
            </List>
            <List>
              <Button style={{color: '#fff'}} href="#contact">Contact</Button>
            </List>
            <List>
              <Button style={{color: '#fff'}} href="">Login</Button>
            </List>
          </UnsortedList>
        </HeaderBanner>
        <Icons>
          <H1>
            <Span>P</Span>rofesio
          </H1>
        </Icons>
      </Image>
    </HeaderComponent>
  );
}
