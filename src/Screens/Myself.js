import React from "react";
import styles from "./Myself.module.css";

const Myself = () => {
  return (
    <div name="Myself" className={styles.Myself}>
      <p>Optimism is the faith that leads to achievement. </p>
      <p>  Nothing can be done without hope and confidence.</p>
      <img
        className={styles.webImage}
        src={require("../assets/webImage.jpg")}
      ></img>
    </div>
  );
};

export default Myself;