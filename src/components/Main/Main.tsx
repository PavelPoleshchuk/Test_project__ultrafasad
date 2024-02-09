import styles from "./Main.module.css";

function Main() {
  return (
    <main className={styles.main__wrapper}>
      <div className={styles.main__div}>
        <div className={styles.title}>Завантажити файл Excel</div>
        <div>
          <img src="/excel.png" alt="excel" />
        </div>
      </div>

      <div className={styles.main__div}>
        <div className={styles.title}>Завантажити файл Excel</div>
        <div>
          <img src="/new_order.jpg" alt="excel" />
        </div>
      </div>

      <div className={styles.main__div}>
        <div className={styles.title}>Завантажити файл Excel</div>
        <div>
          <img src="/all_orders.jpg" alt="excel" />
        </div>
      </div>
    </main>
  );
}

export default Main;
