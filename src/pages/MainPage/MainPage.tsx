import styles from "./MainPage.module.css";
import Navigation from "../../components/Navigation/Navigation";
import Main from "../../components/Main/Main";
import Header from "../../components/Header/Header";

function MainPage() {
  return (
    <>
      <Header />
      <section className={styles.main__page}>
        <Navigation />
        <Main />
      </section>
    </>
  );
}

export default MainPage;
