import Image from "next/image";
import { notFound } from "next/navigation";
import { getMovieById } from "@/app/lib/tmdb";
import type { MovieDetails } from "@/app/types/movie";
import styles from "./MovieDetails.module.css";

type MoviePageProps = {
  params: Promise<{ id: string }>;
};

export default async function MoviePage({ params }: MoviePageProps) {
  const { id } = await params;

  const containsOnlyDigits = /^\d+$/.test(id);
  if (!containsOnlyDigits) {
    notFound();
  }

  let movie: MovieDetails;

  try {
    movie = await getMovieById(id);
  } catch (error) {
    if (error instanceof Error && error.message === "Filmen finnes ikke") {
      notFound();
    }
    throw error;
  }

  const posterUrl = movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : null;

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>{movie.title}</h1>
      <article className={styles.movieDetails}>
        <div>{posterUrl ? <Image src={posterUrl} alt={`Filmplakat for ${movie.title}`} width={300} height={450} className={styles.poster} /> : <p>Ingen plakat tilgjengelig</p>}</div>
        <div className={styles.info}>
          <p className={styles.meta}>Premiere: {movie.release_date || "Ukjent"}</p>
          <p className={styles.meta}>Vurdering: {movie.vote_count > 0 ? `${movie.vote_average.toFixed(1)} (${movie.vote_count} stemmer)` : "Ikke vurdert"}</p>
          <p className={styles.meta}>Spilletid: {movie.runtime !== null ? `${movie.runtime} minutter` : "Ukjent"}</p>

          <h2 className={styles.heading}>Handling</h2>
          <p className={styles.overview}>{movie.overview || "Ingen beskrivelse tilgjengelig."}</p>

          <h2 className={styles.heading}>Sjangre</h2>
          {movie.genres.length > 0 ? (
            <ul className={styles.genres}>
              {movie.genres.map((genre) => (
                <li key={genre.id} className={styles.genre}>
                  {genre.name}
                </li>
              ))}
            </ul>
          ) : (
            <p>Ingen sjangre tilgjengelig</p>
          )}
        </div>
      </article>
    </main>
  );
}
