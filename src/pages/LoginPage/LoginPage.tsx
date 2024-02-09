import Form from "../../components/Form/Form";
import styles from "./LoginPage.module.css";

function LoginPage() {
  return (
    <div className={styles.login__page}>
      <img src="/logo.png" alt="Logo" />
      <div className={styles.wrapper}>
        <Form />
      </div>
    </div>
  );
}

export default LoginPage;
