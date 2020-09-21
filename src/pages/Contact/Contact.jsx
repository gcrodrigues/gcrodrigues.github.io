import React, { useState, useContext } from "react";
import { FaPaperPlane } from "react-icons/fa";
import axios from "axios";
import { ThemeContext } from "styled-components";

import { Navbar, Medias } from "../../components";
import { Container, Section } from "../../styles/Components";
import { Content, Form, Button, Bg } from "./styles";

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
      .then((res) => alert("Success! Your email has been sent!"))
      .catch((err) => console.log("Error sending the message. Try again."));

    setName("");
    setEmail("");
    setMessage("");
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
                  d="M16,-38.5C20.8,-24.9,24.8,-20.8,35.4,-15.9C46.1,-11.1,63.4,-5.5,72,5C80.6,15.5,80.5,31,72.8,40.9C65,50.7,49.7,55.1,36.3,61.9C22.9,68.8,11.4,78.2,1,76.5C-9.4,74.7,-18.8,61.7,-27,51.9C-35.3,42,-42.4,35.3,-44.2,27.2C-46,19,-42.6,9.5,-48.3,-3.3C-54,-16.1,-68.8,-32.2,-69.6,-44.8C-70.4,-57.5,-57.1,-66.8,-43.2,-75.1C-29.2,-83.4,-14.6,-90.9,-4.5,-83.1C5.6,-75.2,11.2,-52.1,16,-38.5Z"
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
              required
            />

            <input
              type="email"
              name="_replyto"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              required
            />

            <textarea
              name="message"
              cols="50"
              rows="5"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Message"
              required
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
