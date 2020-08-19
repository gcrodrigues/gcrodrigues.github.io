import React from "react";

import { Card, Content } from "./styles";

const Repo = ({ name, url, homepage, description }) => {
  return (
    <>
      <Card>
        <img src={require("../../assets/papotabu.jpg")} alt="test" />
        <Content>
          <h2>{name}</h2>
          <p>{description}</p>
          <div>
            <a href={homepage}>Visitar site</a>
            <a href={url}>Visitar repo</a>
          </div>
        </Content>
      </Card>
    </>
  );
};

export default Repo;
