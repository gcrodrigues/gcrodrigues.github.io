import React from "react";

import { Medias, Navbar } from "../../components";

import { Container, Section } from "../../styles/Components";
import {
  Content,
  AboutCard,
  ImageWrapper,
  AboutMe,
  Techs,
  Tech,
} from "./styles";
import avatar from "../../assets/gustavo.jpg";
import html from "../../assets/icons/html.svg";
import css from "../../assets/icons/css.svg";
import javascript from "../../assets/icons/javascript.svg";
import typescript from "../../assets/icons/typescript.svg";
import styled from "../../assets/icons/styled.svg";
import react from "../../assets/icons/react.svg";
import sass from "../../assets/icons/sass.svg";
import redux from "../../assets/icons/redux.svg";
import node from "../../assets/icons/node.svg";
import git from "../../assets/icons/git.svg";

function About() {
  return (
    <Container>
      <Navbar />
      <Section>
        <Content>
          <div>
            <AboutCard>
              <ImageWrapper>
                <img src={avatar} alt="Gustavo Carvalho avatar" />
              </ImageWrapper>

              <div>
                <h1>Gustavo de Carvalho</h1>
                <p>Front-end Developer</p>
                <Medias />
              </div>
            </AboutCard>

            <a
              target="_blank"
              href="https://drive.google.com/file/d/10eEHd2c-v0VZSA0YZOH-c8kY3FLDHyu_/view?usp=sharing"
            >
              Download Resume
            </a>

            <AboutMe>
              <h2>About me</h2>
              <p>
                Hi! My name is <span>Gustavo de Carvalho Rodrigues</span> and
                I'm a Front-end developer. Passionate about technology and
                problem solving, making people lives better. I'm in the last
                semester of my graduation at Fatec Rubens lara in Internet
                Systems. Currently working with the most modern web development
                technologies: <strong>ReactJS</strong>,{" "}
                <strong>React Native</strong> and <strong>Node.js</strong>
              </p>
              <p>
                I'm dynamic, creative, communicative, committed, with team
                spirit, willingness, always looking for self improvement as
                developer and human and searching for new challenges.
              </p>
            </AboutMe>
            <Techs>
              <h2>Technologies</h2>
              <div>
                <Tech background={html}>
                  <p>HTML5</p>
                </Tech>
                <Tech background={css}>
                  <p>CSS3</p>
                </Tech>
                <Tech background={javascript}>
                  <p>JAVASCRIPT</p>
                </Tech>
                <Tech background={typescript}>
                  <p>TYPESCRIPT</p>
                </Tech>
                <Tech background={react}>
                  <p>REACTJS & REACT NATIVE</p>
                </Tech>
                <Tech background={styled}>
                  <p>STYLED COMPONENTS</p>
                </Tech>
                <Tech background={redux}>
                  <p>REDUX</p>
                </Tech>
                <Tech background={sass}>
                  <p>SASS</p>
                </Tech>
                <Tech background={git}>
                  <p>GIT</p>
                </Tech>
                <Tech background={node}>
                  <p>NODEJS</p>
                </Tech>
              </div>
            </Techs>
          </div>
        </Content>
      </Section>
    </Container>
  );
}

export default About;
