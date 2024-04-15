import styles from "./Main.module.css";
import * as Dialog from "@radix-ui/react-dialog";
import { AiOutlineClose } from "react-icons/ai";
import LoadExcel from "../LoadExcel/LoadExcel";
import { TableFetched } from "../TableFetched.tsx/TableFetched";
import OrderList from "../OrderList/OrderList";

interface IData {
  title: string;
  text: string;
  src: string;
  body: JSX.Element;
}
const data: IData[] = [
  {
    title: "Загрузить файл Excel",
    text: "Загрузить файл Excel",
    src: "/donload_file.jpg",
    body: <LoadExcel />,
  },
  {
    title: "Как выбрать товар",
    text: "Как выбрать товар",
    src: "/how_to_choice.jpg",
    body: <OrderList/>,
  },
  {
    title: "Немного про космос",
    text: "Немного про космос",
    src: "/space.jpg",
    body: <TableFetched/>,
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
                  <img src={el.src} alt={el.title} />
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
