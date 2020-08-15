import React from "react";
import { Link } from "react-router-dom";
import styles from "./NotFound.module.css";

function NotFound() {
  return (
    <div className={styles.container}>
      <h1>Sorry :(</h1>
      <p>404 - Page not found</p>
      <Link to="/">Back to home page</Link>
    </div>
  );
}

export default NotFound;
