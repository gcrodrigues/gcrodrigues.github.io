import React, { useState, useEffect } from "react";
import { Repo } from "../";
import api, { GET_PINNED_REPOS } from "../../services/api";

import { Container } from "./styles.js";

const ReposList = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    api.post("", { query: GET_PINNED_REPOS }).then(
      ({
        data: {
          data: { user },
        },
      }) => {
        const res = user.pinnedItems.nodes;
        setRepos(res);
      }
    );
  }, []);

  return (
    <Container>
      {repos.map((repo) => (
        <Repo
          key={repo.id}
          name={repo.name}
          url={repo.url}
          homepage={repo.homepageUrl}
          description={repo.description}
        />
      ))}
    </Container>
  );
};

export default ReposList;
