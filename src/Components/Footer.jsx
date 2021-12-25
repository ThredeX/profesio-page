import React from "react";
import styled from "styled-components";

const FooterComp = styled.footer`
  min-height: 20vh;
  background-color: #0000ff;
  position: relative;
`;
const FooterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  justify-content: space-around;
  align-items: center;
`;
const Heading2 = styled.h2`
  font-family: "Kulim Park", sans-serif;
  color: #fff;
  text-align: center;
  margin-top: 2rem;
  font-size: clamp(1rem, 3vw, 3rem);
`;
const Container = styled.div`
`;
const Paragraph = styled.p`
  font-family: "Kulim Park", sans-serif;
  color: #fff;
  font-size: clamp(1rem, 3vw, 3rem);
  text-align: center;
  margin-top: 1rem;
`;
const Copy = styled.p`
  font-family: "Kulim Park", sans-serif;
  color: #ebebeb;
  padding-block: 1rem;
  text-align: center;
`;
const Email = styled.a`
  color: #fff;
`;

export default function Footer() {
  return (
    <FooterComp id="contact">
      <FooterContainer>
        <Container>
          <Heading2>Kontakt </Heading2>
          <Paragraph>Pokud máte jakékoliv otázky napište nám!</Paragraph>
          <Paragraph>
            Email: <Email href="">profesio@gmail.com</Email>{" "}
          </Paragraph>
        </Container>
        <Container>
          <Heading2>Tvůrce </Heading2>
          <Paragraph>Stránka byla vytvořena společností ThredeX</Paragraph>
          <Paragraph>Máte zájem o web na míru? </Paragraph>
          <Paragraph>

          Email: <Email href="">thredex@gmail.com</Email>{" "}
          </Paragraph>

        </Container>
      </FooterContainer>
      <Copy>&copy;2021 - {new Date().getFullYear()}</Copy>
    </FooterComp>
  );
}
