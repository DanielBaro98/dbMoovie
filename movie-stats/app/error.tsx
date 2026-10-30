"use client";

import styles from "./Error.module.css";

export default function Error({ reset }: { reset: () => void }) {
  return (
    <main className={styles.main}>
      <h1>På Movie-Stats finner du alt om filmer, men ikke det her</h1>
      <button onClick={() => reset()} className={styles.button}>
        Prøv igjen
      </button>
    </main>
  );
}
