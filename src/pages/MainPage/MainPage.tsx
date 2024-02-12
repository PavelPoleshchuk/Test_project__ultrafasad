import styles from "./MainPage.module.css";
import Navigation from "../../components/Navigation/Navigation";
import Main from "../../components/Main/Main";

function MainPage() {
  return (
    <section className={styles.main__page}>
        <Navigation/>
        <Main/>
    </section>
  );
}

export default MainPage;
