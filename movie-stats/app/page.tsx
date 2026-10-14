import { getPopularMovies } from "@/app/lib/tmdb";
import MovieCard from "./components/MovieCard";
import styles from "./page.module.css";

export default async function Home() {
  const data = await getPopularMovies();

  return (
    <main className={styles.main}>
      <h1 className={styles.heading}>Populære Filmer</h1>
      <p className={styles.description}>Utforsk populære filmer og finn dine favoritter</p>

      <section className={styles.movieGrid} aria-label="Liste med populære filmer">
        {data.results.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </section>
    </main>
  );
}
