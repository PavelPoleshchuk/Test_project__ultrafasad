import styles from "./MainPage.module.css";
import Navigation from "../../components/Navigation/Navigation";
import Main from "../../components/Main/Main";

function MainPage() {
  return (
    <div className={styles.main__page}>
      <Navigation />
      <Main />
    </div>
  );
}

export default MainPage;
