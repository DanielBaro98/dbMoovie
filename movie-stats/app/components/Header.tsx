import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav} aria-label="Hovedmeny">
        <Link href="/" className={styles.logo}>
          Movie Stats
        </Link>

        <div className={styles.links}>
          <Link href="/">Hjem</Link>
          <Link href="/">Filmer</Link>
          <Link href="/">Om Oss</Link>
        </div>
      </nav>
    </header>
  );
}
