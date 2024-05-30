import styles from "./NotFoundBlock.module.scss";

function NotFoundBlock() {
  return (
    <div className={styles.root}>
      <h1>Ничего не найдено</h1>
      <span>Home</span>
    </div>
  );
}

export default NotFoundBlock;
