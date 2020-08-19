import React, { useContext } from "react";

import { ThemeContext } from "styled-components";
import { Link } from "react-router-dom";

import NotFoundDark from "../../assets/404dark.png";
import NotFoundLight from "../../assets/404light.png";

import styles from "./NotFound.module.css";

function NotFound() {
  const { title } = useContext(ThemeContext);
  return (
    <div className={styles.container}>
      <img src={title === "dark" ? NotFoundDark : NotFoundLight} alt="404" />

      <h1>Sorry, page not found :(</h1>
      <Link to="/">Back to home page</Link>
    </div>
  );
}

export default NotFound;
