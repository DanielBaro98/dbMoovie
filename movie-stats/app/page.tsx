import Link from "next/link";
import { getPopularMovies } from "@/app/lib/tmdb";
import MovieCard from "@/app/components/MovieCard";
import styles from "./page.module.css";

export default async function Home() {
  const data = await getPopularMovies();

  const featuredMovies = data.results.slice(0, 4);

  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <h1> Movie Stats</h1>

        <p className={styles.description}>Oppdag populære filmer, utforsk filmdetaljer og finn din neste filmopplevelse</p>

        <Link href="./movies" className={styles.button}>
          Utforsk populære filmer{" "}
        </Link>
      </section>
      <section className={styles.featuredSection} aria-labelledby="featured-heading">
        <h2 id="featured-heading" className={styles.sectionTitle}>
          Populære filmer akkurat nå
        </h2>
        <div className={styles.movieGrid}>
          {featuredMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  );
}
