import React from "react";
import styles from "./Button.module.css";

const Button = (props) => {
  return (
    <button onClick={props.click} className={styles.button} type={props.type}>
      {props.content}
    </button>
  );
};

export default Button;
