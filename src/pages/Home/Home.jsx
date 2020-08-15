import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Navbar } from "../../components";
import { Container, Section } from "../../styles/Components";
import { Content, TextContent, Image, Button, Bg } from "./styles";

import avatar from "../../assets/avatar.png";

function Home() {
  return (
    <Container hidden>
      <Navbar />

      <Section>
        <Content>
          <TextContent>
            <h2>Website under development!</h2>
            <h1>
              I'm Gustavo Carvalho <br />
              and I create creative websites.
            </h1>
            <p>Front-end Developer</p>
            <Button to="/about">
              About me <FaLongArrowAltRight size={20} />
            </Button>
          </TextContent>
          <Image>
            <img src={avatar} alt="Selfie" />
          </Image>
          <Bg />
        </Content>
      </Section>
    </Container>
  );
}

export default Home;
