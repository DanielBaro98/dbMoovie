import { getPopularMovies, searchMovies } from "@/app/lib/tmdb";
import MovieCard from "@/app/components/MovieCard";
import styles from "./Movies.module.css";
import Link from "next/link";

export default async function Home({ searchParams }: { searchParams: Promise<{ query?: string }> }) {
  const { query } = await searchParams;

  const data = query?.trim() ? await searchMovies(query) : await getPopularMovies();

  return (
    <main className={styles.main}>
      <h1 className={styles.heading}> Populære filmer</h1>

      <p className={styles.description}>Utforsk populære filmer og finn dine favoritter.</p>
      <form action="/movies" method="GET" className={styles.searchForm}>
        <input type="search" name="query" placeholder="Søk etter en film.." aria-label="Søk etter en film" className={styles.searchInput}></input>
        <button type="submit" className={styles.searchButton}>
          Søk
        </button>
      </form>
      {query?.trim() && (
        <Link className={styles.backLink} href="/movies">
          Vis alle populære filmer
        </Link>
      )}
      <section className={styles.movieGrid} aria-label="Liste over populære filmer">
        {data.results.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </section>
    </main>
  );
}
