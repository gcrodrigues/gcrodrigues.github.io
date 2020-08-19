import React from "react";

import { Navbar, ReposList } from "../../components";
import { Container, Section } from "../../styles/Components";
function Portfolio() {
  return (
    <Container>
      <Navbar />
      <Section>
        <ReposList />
      </Section>
    </Container>
  );
}

export default Portfolio;
