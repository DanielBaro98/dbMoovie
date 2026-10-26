import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <p>2026© Movie Stats. Delinnlevering 2</p>
        <p>
          Filmdata fra{" "}
          <a href="https://www.themoviedb.org/" target="__blank" rel="nooopener noreferrer">
            TMDB
          </a>
        </p>
        <Link href="/about">Om Nettstedet</Link>
      </div>
    </footer>
  );
}
