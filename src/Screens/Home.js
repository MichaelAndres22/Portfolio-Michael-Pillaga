import React from "react";
import { Link } from "react-scroll";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div name="Home" className={styles.home}>
      <div className={styles.titleContainer}>
        <p>
          Welcome to my <br />
          <b>Portfolio</b>
        </p>
        <p>
          With the best <br />
          <b>projects, skills and experience</b>
        </p>
      </div>
      <div className={styles.ctaContainer}>
        <Link
          to="Contact"
          smooth
          duration={500}
          className={styles.callToAction}
        >
          Ask me something
        </Link>
        <Link
          to="Contact"
          smooth
          duration={500}
          className={styles.callToAction}
        >
          Contact me
        </Link>
      </div>
    </div>
  );
};

export default Home;