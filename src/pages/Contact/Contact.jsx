import React, { useState, useContext } from "react";
import {
  FaPaperPlane,
  FaLinkedinIn,
  FaGithub,
  FaWhatsapp,
} from "react-icons/fa";
import axios from "axios";

import { Navbar, Medias } from "../../components";
import { Container, Section } from "../../styles/Components";
import { Content, Form, Button, Bg } from "./styles";

import { ThemeContext } from "styled-components";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const { colors } = useContext(ThemeContext);

  function submitForm(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("message", message);

    axios
      .post("https://formspree.io/meqrnjdk", formData)
      .then((res) => console.log("Success"))
      .catch((err) => console.log("Failure"));
  }

  return (
    <Container hidden>
      <Navbar />
      <Section>
        <Content>
          <Bg>
            <div>
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill={colors.primary}
                  d="M20.2,-30.5C28.4,-21.9,38.8,-18.9,49.7,-10.3C60.5,-1.7,71.8,12.7,72.8,28C73.8,43.3,64.5,59.6,50.6,61.8C36.8,64,18.4,52,4.4,46C-9.7,40.1,-19.4,40,-23.8,34.8C-28.2,29.5,-27.4,19.1,-35.9,8.1C-44.4,-2.9,-62.2,-14.4,-64.3,-24.9C-66.4,-35.4,-52.9,-44.8,-39.6,-51.8C-26.2,-58.7,-13.1,-63.3,-3.6,-58.4C6,-53.5,12,-39.1,20.2,-30.5Z"
                  transform="translate(100 100)"
                />
              </svg>
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill={colors.secundary}
                  d="M24.2,-35.4C29.8,-29.2,31.8,-20.1,31.9,-12.2C32,-4.3,30.1,2.5,30.3,12.3C30.5,22.1,32.7,35.1,28,45.2C23.3,55.3,11.6,62.6,2.9,58.7C-5.9,54.7,-11.8,39.5,-23.5,31.7C-35.3,23.9,-52.9,23.4,-59.8,16.1C-66.8,8.8,-63.1,-5.2,-55.5,-14.8C-48,-24.4,-36.5,-29.4,-26.6,-34.3C-16.7,-39.2,-8.3,-43.8,0.5,-44.5C9.3,-45.1,18.5,-41.7,24.2,-35.4Z"
                  transform="translate(100 100)"
                />
              </svg>
            </div>
          </Bg>
          <Form onSubmit={(e) => submitForm(e)}>
            <h2>Contact me right now!</h2>
            <p>Send me a message so we can talk!</p>

            <input
              type="text"
              name="nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
            />

            <input
              type="email"
              name="_replyto"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
            />

            <textarea
              name="message"
              cols="50"
              rows="5"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Message"
            />
            <Button>
              SEND <FaPaperPlane size={20} />
            </Button>
          </Form>
          <Medias />
        </Content>
      </Section>
    </Container>
  );
}

export default Contact;
