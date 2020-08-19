import React from "react";

import { Medias, Navbar } from "../../components";

import { Container, Section } from "../../styles/Components";
import { Content } from "./styles";

function About() {
  return (
    <Container>
      <Navbar />
      <Section>
        <Content>
          <div>
            <h2>Page under development!</h2>
            <a
              target="_blank"
              href="https://drive.google.com/file/d/1f4wL263wM4zzeECxngxDZUD4X1PYP01P/view?usp=sharing"
            >
              Download my resume
            </a>
            <p>Check my social medias</p>
            <Medias />
          </div>
        </Content>
      </Section>
    </Container>
  );
}

export default About;
