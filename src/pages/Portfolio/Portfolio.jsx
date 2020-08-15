import React, { useState, useEffect } from "react";
import api from "../../services/api";

import { Navbar, ReposList } from "../../components";
import { Container, Section } from "../../styles/Components";
function Portfolio() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    api.get("/gcrodrigues/repos").then((response) => {
      console.log(response.data);
      setRepos(response.data);
    });
  }, []);

  return (
    <Container>
      <Navbar />
      <Section>
        <ReposList repositories={repos} />
      </Section>
    </Container>
  );
}

export default Portfolio;
