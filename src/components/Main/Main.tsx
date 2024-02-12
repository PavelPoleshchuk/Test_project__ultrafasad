import styles from "./Main.module.css";
import * as Dialog from "@radix-ui/react-dialog";
import { AiOutlineClose } from "react-icons/ai";
import Form from "../Form/Form";
import LoadExcel from "../LoadExcel/LoadExcel";

interface IData {
  title: string;
  text: string;
  src: string;
  body: JSX.Element;
}
const data: IData[] = [
  {
    title: "Завантажити файл Excel",
    text: "Завантажити файл Excel",
    src: "/excel.jpg",
    body: <LoadExcel />,
  },
  {
    title: "Нове замовлення",
    text: "Нове замовлення",
    src: "/new_order.jpg",
    body: <Form />,
  },
  {
    title: "Не оформлені замовлення",
    text: "Не оформлені замовлення",
    src: "/all_orders.jpg",
    body: <Form />,
  },
];

function Main() {
  return (
    <main className={styles.main__wrapper}>
      {data.map((el) => (
        <div key={el.title}>
          <Dialog.Root>
            <Dialog.Trigger style={{ border: "none", cursor: "pointer" }}>
              <div className={styles.main__div}>
                <div className={styles.title}>{el.title}</div>
                <div>
                  <img src={el.src} alt="excel" />
                </div>
              </div>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className={styles.dialog__overlay} />
              <Dialog.Content className={styles.dialog__content}>
                <div className={styles.flex__container}>
                  <Dialog.Title className={styles.text}>{el.text}</Dialog.Title>
                  <Dialog.Close className={styles.cross}>
                    <AiOutlineClose size={20} />
                  </Dialog.Close>
                </div>
                <div style={{ marginTop: "8px" }}>{el.body}</div>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
      ))}
    </main>
  );
}

export default Main;
