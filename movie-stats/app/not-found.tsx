import Link from "next/link";
import styles from "./notFound.module.css";

export default function NotFound() {
  return (
    <main className={styles.main}>
      <h1>Siden finnes ikke</h1>
      <p>Kontroller adressen og prøv på nytt.</p>

      <Link href="/movies" className={styles.backLink}>
        Tilbake til populære filmer
      </Link>
    </main>
  );
}
