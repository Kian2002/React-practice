import React from "react";
import Card from "./Card";
import Button from "./Button";
import styles from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  return (
    <div className={styles.backdrop} onClick={props.isEmpty}>
      <Card style={styles.modal}>
        <header className={styles.header}>
          <h2>Input not valid</h2>
        </header>
        <div className={styles.content}>
          <p>Please enter a valid name and age (no empty inputs)</p>
        </div>
        <footer className={styles.actions}>
          <Button content="Okay" click={props.isEmpty} />
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
