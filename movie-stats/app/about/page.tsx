import styles from "./About.module.css";

export default function AboutPage() {
  return (
    <main className={styles.main}>
      <h1>Om Movie Stats</h1>
      <section className={styles.section}>
        <h2>Hva er Movie stats</h2>
        <p>Movie Stats er en filmportal hvor brukere kan oppdage populære filmer, se vurderinger og utforske informasjon om ulike filmer.</p>
      </section>
      <section className={styles.section}>
        <h2>Hvem er nettsiden for?</h2>
        <p>Nettsiden er laget for filminteresserte som ønsker en ekel måte å finne og utforske filmer på.</p>
      </section>
      <section className={styles.section}>
        <h2>Hvor kommer informasjon fra?</h2>
        <p>Filmdataene hentes fra The Movie Database(TMDB) gjennom deres API</p>
      </section>
      <section className={styles.section}>
        <h2>Om prosjektet</h2>
        <p>Movie er utviklet av Daniel Barø. Delinnlevering 2 med Next.js og TypeScript.</p>
      </section>
    </main>
  );
}
