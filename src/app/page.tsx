import styles from "./page.module.css";
import GridComponent from "@/components/GridComponent";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <GridComponent />
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
