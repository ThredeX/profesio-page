import React from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import { fontSize } from "@mui/system";

const HeaderComponent = styled.header`
  background-image: url("https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80");
  height: 100vh;
  width: 100%;
  box-shadow: inset 0 -5px 10px 0 #ffffff;
  background-size: cover;
  background-position: center;
`;
const Image = styled.div`
  height: 100vh;
  width: 100vw;
  opacity: 0.93;
  background-image: linear-gradient(205deg, #09adee, #8400ffdf);
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  overflow-x: hidden;
`;
const H1 = styled.h1`
  z-index: 20;
  position: relative;
  font-family: "Kulim Park", sans-serif;
  color: #ffffffe2;
  font-size: clamp(1rem, 8vw, 8rem);
`;
const Span1 = styled.span`
color: #ffffff;
  margin-left: clamp(10rem, 45vw, 45rem);
  `;
const Span2 = styled.span`
  color: #ffffffe2;
  margin-left: clamp(5rem, 25vw, 25rem);
`;
const Icons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 8rem);
`;
const HeaderBanner = styled.div`
  width: 90vw;
  height: 5rem;
  display: flex;
  justify-content: space-between;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  &::after {
    content: "";
    width: 102%;
    background-color: #fff;
    height: 1px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 90%;
  }
  @media screen and (max-width: 480px) and (min-width: 0) {
    &{
      flex-direction: column;
    }
    &::after{
      top: 55%;
    }
  }
`;
const UnsortedList = styled.ul`
  display: flex;
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
  color: #fff;
  font-size: clamp(2rem, 2.8vw, 2.8rem);
`;

export default function Header() {
  const style = {
    paddingInline: '10px',
    paddingBottom: '0',
    color: "#fff",
    fontSize: 'clamp(1rem, 1.2vw, 2rem)',
  }
  return (
    <HeaderComponent>
      <Image>
        <HeaderBanner>
          <H2>Profesio</H2>
          <UnsortedList>
            <List>
              <Button style={style} href="#about">
                About
              </Button>
            </List>
            <List>
              <Button style={style} href="#contact">
                Contact
              </Button>
            </List>
            <List>
              <Button style={style} href="">
                Login
              </Button>
            </List>
          </UnsortedList>
        </HeaderBanner>
        <Icons>
          <H1>
            Čas na změnu! <br />
            <Span2>Vyzkoušejte</Span2> <br /><Span1>Profesio</Span1>
          </H1>
        </Icons>
      </Image>
    </HeaderComponent>
  );
}
