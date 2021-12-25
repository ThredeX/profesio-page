import React, { useEffect } from "react";
import styled from "styled-components";
import "aos/dist/aos.css";
import Aos from "aos";
import notebookAdmin from "../images/notebook_admin.png";
import notebookTeacher from "../images/notebook_teacher.png";
import notebookStudent from "../images/notebook_student.png";

const MainComponent = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Container = styled.div`
  background-color: ${(props) => props.color};
  width: 100%;
  position: relative;
  padding-bottom: 4rem;
  &::before {
    content: "";
    top: 0;
    position: absolute;
    display: ${(props) => (props.visible ? "block" : "none")};
    background-color: #0000ff89;
    right: 0;
    height: 2px;
    width: ${props => props.len + '%'};
  }
`;
const Heading = styled.h1`
  color: #ffffff;
  font-family: "Kulim Park", sans-serif;
  font-weight: 200;
  font-size: clamp(2rem, 4vw, 4rem);
  text-align: center;
  padding: 4rem 2rem;
`;
const Paragraph = styled.p`
  color: #fff;
  font-family: "Kulim Park", sans-serif;
  font-weight: 200;
  font-size: 2rem;
  text-align: center;
  padding: 1rem 2rem;
  margin-top: 7rem;
`;
const Paragraph2 = styled.p`
  font-family: "Kulim Park", sans-serif;
  color: #ffffff;
  text-align: center;
  padding: 0rem 0rem 2rem 0;
  font-size: 2rem;
`;
const Paragraph3 = styled.p`
  font-family: "Kulim Park", sans-serif;
  color: #ffffff;
  font-weight: 200;
  font-size: 1.5rem;
  text-align: center;
`;
const NotebookContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-inline: 1rem;
  margin-top: 4rem;
`;
const Img = styled.img`
  margin-top: 1rem;
`;
const ImageContainer = styled.div`
  border: 2px solid #027eaf;
  border-radius: 50%;
  background-color: #ffffff;
  height: 22rem;
  gap: 2rem;
  width: 22rem;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  & > p {
    color: #027eaf;
  }
`;
const UnList = styled.ul`
  list-style: none;
  width: 50%;
  margin: 0 auto;
`;
const List = styled.li`
  padding: 1rem 2rem;
  margin: 1rem;
  font-family: "Kulim Park", sans-serif;
  color: #ffffff;
  font-weight: 200;
  font-size: 1.8rem;
  display: flex;
  align-items: center;
  gap: 3rem;
`;
const Content = styled.article``;
const Num = styled.div`
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 5.5rem;
  width: 5.5rem;
  font-weight: 700;
  font-size: 4rem;
  border-radius: 0 50% 50% 50%;
  background-color: #0000ff;
`;
export default function Main() {
  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);

  return (
    <MainComponent>
      <Container color="#0a0a0a" >
        <Heading>Tři různé pohledy!</Heading>
        <NotebookContainer>
          <ImageContainer data-aos="fade-right" data-aos-delay="100">
            <Img src={notebookAdmin} alt="profesio application" />
            <Paragraph2>Administrátor</Paragraph2>
          </ImageContainer>
          <ImageContainer data-aos="fade-down" data-aos-delay="100">
            <Img src={notebookTeacher} alt="profesio application" />
            <Paragraph2>Učitel</Paragraph2>
          </ImageContainer>
          <ImageContainer data-aos="fade-left" data-aos-delay="100">
            <Img src={notebookStudent} alt="profesio application" />
            <Paragraph2>Student</Paragraph2>
          </ImageContainer>
        </NotebookContainer>
        <Content>
          <Paragraph>
            Naší aplikaci Profesio můžete používat jak se Vám zlíbí. <br />
            <br /> Připravili jsme rozhraní pro učitele, studenty a
            administrátory.
          </Paragraph>
        </Content>
      </Container>
      <Container color="#0a0a0a" visible len={60}>
        <Heading>O Aplikaci</Heading>
        <Paragraph3>
          Profesio je open-source aplikace pro Vysoké Školy. <br />
          <br />
          Aplikace byla vytvořena pro vytváření rozvrhů pro studenty
          <br />
          Vysokých škol. <br />
          <br />
        </Paragraph3>
      </Container>
      <Container color="#0a0a0a" visible len={50}>
        <Heading>Nasazení aplikace</Heading>
        <UnList>
          <List>
            <Num>1</Num>Kontaktujete nás
          </List>
          <List>
            <Num>2</Num>Domluvíme se
          </List>
          <List>
            <Num>3</Num>Nasadíme naší aplikaci na server školy
          </List>
          <List>
            <Num>4</Num>Administrátor nastaví potřebné informace
          </List>
          <List>
            <Num>5</Num>Aplikace je připravená k použítí!
          </List>
        </UnList>
      </Container>
      <Container color="#0a0a0a" visible len={40}>
        <Heading>Kontakt</Heading>
        
      </Container>
    </MainComponent>
  );
}
