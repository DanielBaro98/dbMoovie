import Link from "next/link";
import { getPopularMovies } from "@/app/lib/tmdb";
import MovieCard from "@/app/components/MovieCard";
import styles from "./Movies.module.css";

export default async function Home() {
  const data = await getPopularMovies();

  return (
    <main className={styles.main}>
      <h1 className={styles.heading}> Populære filmer</h1>

      <p className={styles.description}>Utforsk populære filmer og finn dine favoritter.</p>
        <section className={styles.movieGrid} aria-label="Liste over populære filmer">
          {data.results.map((movie)=>(
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </section>
    </main>
  );
}
