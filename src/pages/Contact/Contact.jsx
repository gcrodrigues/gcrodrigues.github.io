import React, { useState } from "react";
import {
  FaPaperPlane,
  FaLinkedin,
  FaGithubSquare,
  FaWhatsappSquare,
} from "react-icons/fa";
import axios from "axios";

import { Navbar } from "../../components";
import { Container, Section } from "../../styles/Components";
import { Content, ContactText, Form, Button } from "./styles";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

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
    <Container>
      <Navbar />
      <Section>
        <Content>
          <Form onSubmit={(e) => submitForm(e)}>
            <h2>Contact me right now!</h2>
            <p>Send me a message so we can talk!</p>
            <span>NAME</span>
            <input
              type="text"
              name="nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <span>E-MAIL</span>
            <input
              type="email"
              name="_replyto"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <span>MESSAGE</span>
            <textarea
              name="message"
              cols="50"
              rows="5"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <Button>
              SEND <FaPaperPlane size={20} />
            </Button>
            <ul>
              <li>
                <FaLinkedin size={35} />
              </li>
              <li>
                <FaGithubSquare size={35} />
              </li>
              <li>
                <FaWhatsappSquare size={35} />
              </li>
            </ul>
          </Form>
        </Content>
      </Section>
    </Container>
  );
}

export default Contact;
