import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";
import {
  FaRegUser,
  FaRegCalendarCheck,
  FaRegChartBar,
  FaRegCommentDots,
} from "react-icons/fa";

function Navigation() {
  return (
    <nav className={styles.nav__wrapper}>
      <ul className={styles.nav__menu}>
        <li className={styles.nav__li}>
          <span>Формування замовлення</span>
        </li>
        <li className={styles.nav__li}>
          <Link className={styles.link} to="/profile">
            <FaRegUser style={{ margin: "0 10px 0 0" }} size={20} />
            Профіль користувача
          </Link>
        </li>
        <li className={styles.nav__li}>
          <Link className={styles.link} to="/orders">
            <FaRegCalendarCheck style={{ margin: "0 10px 0 0" }} size={20} />
            Мої замовлення
          </Link>
        </li>
        <li className={styles.nav__li}>
          <Link className={styles.link} to="/specifications">
            <FaRegChartBar style={{ margin: "0 10px 0 0" }} size={20} />
            Технічні характеристики
          </Link>
        </li>
        <li className={styles.nav__li}>
          <Link className={styles.link} to="/chat">
            <FaRegCommentDots style={{ margin: "0 10px 0 0" }} size={20} />
            Чат
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
