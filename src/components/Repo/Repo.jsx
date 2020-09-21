import React from "react";

import { Card, Tag } from "./styles";

const Repo = ({ name, url, description, languages }) => {
  return (
    <>
      <Card href={url} target="_blank">
        <h2>{name}</h2>
        <p>{description}</p>
        <div>
          {Object.keys(languages).map((item) => (
            <Tag lang={item}>{item}</Tag>
          ))}
        </div>
      </Card>
    </>
  );
};

export default Repo;
