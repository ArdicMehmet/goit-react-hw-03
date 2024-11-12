import React from "react";
import { useState } from "react";
import styles from "./searchBox.module.css";
const SearchBox = ({ handleChange }) => {
  return (
    <div className={styles.container}>
      <h4 className={styles.info}>Find contacts by name</h4>
      <input
        className={styles.inputText}
        type="text"
        onChange={(event) => handleChange(event.currentTarget.value)}
      />
    </div>
  );
};

export default SearchBox;
