import { getPopularMovies, getMovieById } from "@/app/lib/tmdb";
import MovieCard from "./components/MovieCard";
import styles from "./page.module.css";

export default async function Home() {
  const data = await getPopularMovies();
  /*
  const firstMovie = data.results[0];

  if (firstMovie){
    const movieDetails = await getMovieById(String(firstMovie.id));
    console.log("filmdetajler:", movieDetails)
  }
*/
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
