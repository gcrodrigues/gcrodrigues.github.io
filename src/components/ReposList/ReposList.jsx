import React, { useState, useEffect } from "react";
import { FiLoader } from "react-icons/fi";

import { Repo } from "../";
import api from "../../services/api";

import { Container, Loading } from "./styles.js";

const ReposList = () => {
  const [repos, setRepos] = useState(() => {
    const storagedRepos = localStorage.getItem("@Portfolio:repositories");
    if (storagedRepos) {
      return JSON.parse(storagedRepos);
    }

    return [];
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!!localStorage.getItem("@Portfolio:repositories")) {
      return;
    }

    fetchGithubRepos();
  }, []);

  useEffect(() => {
    localStorage.setItem("@Portfolio:repositories", JSON.stringify(repos));
  }, [repos]);

  const fetchGithubRepos = async () => {
    setLoading(true);
    const { data } = await api.get("users/gcrodrigues/repos");

    const languagesData = await Promise.all(
      data
        .sort(
          (a, b) =>
            new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
        )
        .filter(
          (repo) =>
            repo.name !== "gostack-desafio-conceitos-reactjs" &&
            repo.name !== "gcrodrigues.github.io" &&
            new Date(repo.created_at).getTime() >= 1584987810000
        )
        .map(async (repo) => {
          const resposta = await api.get(
            `repos/gcrodrigues/${repo.name}/languages`
          );
          repo.languages = resposta.data;
          return repo;
        })
    );

    setRepos(languagesData);
    setLoading(false);
  };

  if (loading) {
    return (
      <Loading>
        <FiLoader size={45} />
      </Loading>
    );
  }

  return (
    <Container>
      {repos.map((repo) => (
        <Repo
          key={repo.id}
          name={repo.name}
          url={repo.html_url}
          description={repo.description}
          languages={repo.languages}
        />
      ))}
    </Container>
  );
};

export default ReposList;
