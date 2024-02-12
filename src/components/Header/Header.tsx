import styles from "./Header.module.css";
import {
  PiHeadphonesBold,
  PiCompassToolBold,
  PiInfoBold,
} from "react-icons/pi";
import { IoMdExit } from "react-icons/io";
import { Link } from "react-router-dom";
import { removeToken } from "../tools/useToken";

function Header() {
  return (
    <header className={styles.header}>
      <div>
        <Link to="/">
          <img className={styles.header__img} src="/logo.png" alt="Logo" />{" "}
        </Link>
        <button className={styles.header__btn}>
          <PiHeadphonesBold />
        </button>
        <button className={styles.header__btn}>
          <PiCompassToolBold />
        </button>
        <button className={styles.header__btn}>
          <PiInfoBold />
        </button>
      </div>
      <Link
        onClick={removeToken}
        to="/login"
        className={styles.header__btn_exit}
      >
        <IoMdExit style={{ margin: "0 5px 0 0" }} size={20} />
        Вихід
      </Link>
    </header>
  );
}

export default Header;
