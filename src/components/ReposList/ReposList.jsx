import React from "react";
import { Repo } from "../";

import { Container } from "./styles.js";

const ReposList = ({ repositories }) => {
  return (
    <Container>
      {repositories.map((repo) => (
        <Repo
          key={repo.id}
          name={repo.name}
          url={repo.url}
          description={repo.description}
        />
      ))}
    </Container>
  );
};

export default ReposList;
