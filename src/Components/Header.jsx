import React, {useEffect} from "react";
import styled from "styled-components";
import "aos/dist/aos.css";
import Aos from "aos";


const HeaderComponent = styled.header`
  background-image: url("https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80");
  height: 100vh;
  width: 100%;
  background-size: cover;
  position: relative;
  top: 0;
  z-index: -1;
`;
const CoverHeader = styled.div`
  background: linear-gradient(20deg, #6200ff, #0434e0cf);
  height: 100%;
  width: 100%;
  display: grid;
  place-content: center center;
`;
const Heading = styled.h1`
  background-clip: text;
  color: #ffffff;
  /* background: linear-gradient(200deg, #222222d8, #150136dd); */
  background-color: #00000032;
  backdrop-filter: blur(3px);
  border-bottom: 4px solid;
  border-radius: 0 0 6px 6px;
  padding: 4rem 6rem;
  font-weight: 300;
  font-size: clamp(4rem, 8vw, 20rem);
  font-family: "Kulim Park", sans-serif;
`;
const UnsortedList = styled.ul`
  position: absolute;
  position: -webkit-sticky;
  top: 0;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  background-color: #000000bd;
`;
const List = styled.li`
  padding-block: 0.5rem;
  display: flex;
  width: max-content;
  align-items: center;
  justify-content: center;
  &:nth-child(4) {
    grid-column: 8 / 9;
  }
`;
const ButtonHeader = styled.button`
  padding: 0.5rem 2rem;
  font-family: "Kulim Park", sans-serif;
  cursor: pointer;
  border: none;
  color: #fffffffd;
  font-size: 1.9rem;
  font-weight: 300;
  background-color: #24242800;
  &:hover {
    color: #ffffff60;
  }
`;

export default function Header() {
  useEffect(() => {
      Aos.init({duration: 7000})
  }, [])
  return (
    <>
      <HeaderComponent>
        <CoverHeader>
          <Heading data-aos='fade-up'>Profesio</Heading>
        </CoverHeader>
      </HeaderComponent>
      <UnsortedList data-aos='fade-down'>
        <List >
          <ButtonHeader>O aplikaci</ButtonHeader>
        </List>
        <List >
          <ButtonHeader>Nasazení</ButtonHeader>
        </List >
        <List>
          <ButtonHeader>Kontakt</ButtonHeader>
        </List >
        <List>
          <ButtonHeader>Login</ButtonHeader>
        </List>
      </UnsortedList>
    </>
  );
}
