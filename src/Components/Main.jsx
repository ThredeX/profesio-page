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
    width: ${(props) => props.len + "%"};
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
  font-size: clamp(1rem, 2vw, 2rem);
  text-align: center;
  padding: 1rem 2rem;
  margin-top: 7rem;
`;
const Paragraph2 = styled.p`
  font-family: "Kulim Park", sans-serif;
  color: #ffffff;
  text-align: center;
  padding: 0rem 0rem 2rem 0;
  font-size: clamp(1rem, 2vw, 2rem);
`;
const Paragraph3 = styled.p`
  font-family: "Kulim Park", sans-serif;
  color: #ffffff;
  font-weight: 200;
  font-size: clamp(1rem, 2vw, 2rem);
  padding-inline: 1rem;
  text-align: center;
`;
const NotebookContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-inline: 1rem;
  margin-top: 4rem;
  align-items: center;
  row-gap: 2rem;
`;
const Img = styled.img`
  margin-top: 1rem;
`;
const ImageContainer = styled.div`
  border-radius: 50%;
  background: radial-gradient(circle, #00000085, #1900ff);

  height: 22rem;
  gap: 2rem;
  width: 22rem;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  & > p {
    color: #ffffff;
    font-weight: 100;
  }
  &:hover {
    box-shadow: 0 0 10px 0 #303030bc;
  }
  @media screen and (max-width: 500px) {
    height: 15rem;
    width: 15rem;
  }
`;
const UnList = styled.ul`
  list-style: none;
`;
const UnListContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const List = styled.li`
  padding: 1rem 2rem;
  margin: 1rem;
  display: flex;
  align-items: center;
  font-family: "Kulim Park", sans-serif;
  color: #ffffff;
  font-weight: 200;
  font-size: clamp(1rem, 2vw, 1.8rem);
`;
const Content = styled.article``;
const Num = styled.div`
  color: #ffffff;
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  height: 5.5rem;
  width: 5.5rem;
  font-weight: 700;
  font-size: clamp(2rem, 4vw, 4rem);
  border-radius: 0 50% 50% 50%;
  background-color: #0000ff;
  margin-right: 2rem;
  @media screen and (max-width: 500px) {
    height: 3rem;
    width: 3rem;
  }
`;
export default function Main() {
  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);

  return (
    <MainComponent>
      <Container color="#0a0a0a">
        <Heading id="about">O aplikaci</Heading>
        <Paragraph3>
          Profesio je open-source aplikace pro vysoké školy. <br />
          <br />
          Aplikace byla vytvořena pro vytváření rozvrhů pro studenty
          <br />
          Vysokých škol. <br />
          <br />
        </Paragraph3>
      </Container>
      <Container color="#0a0a0a" visible len={60}>
        <Heading>Tři různé pohledy!</Heading>
        <NotebookContainer>
          <ImageContainer data-aos="fade-down-right" data-aos-delay="100">
            <Img src={notebookAdmin} alt="profesio application" />
            <Paragraph2>Administrátor</Paragraph2>
          </ImageContainer>
          <ImageContainer data-aos="fade" data-aos-delay="100">
            <Img src={notebookTeacher} alt="profesio application" />
            <Paragraph2>Učitel</Paragraph2>
          </ImageContainer>
          <ImageContainer data-aos="fade-down-left" data-aos-delay="100">
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
      <Container color="#0a0a0a" visible len={50}>
        <Heading id="deploy">Nasazení aplikace</Heading>
        <UnListContainer>
          <UnList>
            <List data-aos="fade-up" data-aos-delay="5">
              <Num >
                1
              </Num>
              <p>Kontaktujete nás</p>
            </List>
            <List data-aos="fade-up" data-aos-delay="10">
              <Num>
                2
              </Num>
              <p>Domluvíme se</p>
            </List>
            <List data-aos="fade-up" data-aos-delay="15">
              <Num>
                3
              </Num>
              <p>Nasadíme naší aplikaci na server školy</p>
            </List>
            <List data-aos="fade-up" data-aos-delay="20">
              <Num>
                4
              </Num>
              <p>Administrátor nastaví potřebné informace</p>
            </List>
            <List data-aos="fade-up" data-aos-delay="25">
              <Num>
                5
              </Num>
              <p>Aplikace je připravená k použítí!</p>
            </List>
            <List data-aos="fade-up" data-aos-delay="30">
              <Num>
                +
              </Num>
              <p>Máte naší neustálou podporu</p>
            </List>
          </UnList>
        </UnListContainer>
      </Container>
    </MainComponent>
  );
}
