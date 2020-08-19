import React from "react";
import { FaLinkedinIn, FaGithub, FaWhatsapp } from "react-icons/fa";
import { Container } from "./styles";

function Medias() {
  return (
    <Container>
      <ul>
        <li>
          <a target="_blank" href="https://www.linkedin.com/in/gcrodrigues">
            <FaLinkedinIn size={25} />
          </a>
        </li>
        <li>
          <a target="_blank" href="https://www.github.com/gcrodrigues">
            <FaGithub size={25} />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://api.whatsapp.com/send?phone=5513974080420"
          >
            <FaWhatsapp size={25} />
          </a>
        </li>
      </ul>
    </Container>
  );
}

export default Medias;
