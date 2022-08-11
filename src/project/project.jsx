import { Component } from "react";
import { Link } from "react-router-dom";
import styles from "./project.module.css";

class Project extends Component {
  state = {};
  render() {
    return (
      <>
        <div className={styles.project}>
          <span className={styles.icon}>
            <ion-icon name="rocket-outline"></ion-icon>
          </span>
          <h1 className={styles.lab}>Lab 1: Animal Trading Cards</h1>
          <h1 className={styles.title}>
            HTML va CSS haqidagi bilimlaringizdan <br />
            foydalanib, sevimli hayvoningiz tasvirlangan <br />
            vabga asoslangan savdo kartasini yarating
          </h1>

          <Link to="/login">
            <button className={styles.btn}>BUNGA O'TING LAB</button>
          </Link>
        </div>
      </>
    );
  }
}

export default Project;
