//gjennom props
import Image from "next/image";
import type { Movie } from "@/app/types/movie";
import styles from "./MovieCard.module.css";
import Link from "next/link";

type MovieCardProps = {
  movie: Movie;
};

export default function MovieCard({ movie }: MovieCardProps) {
  //årstall for premieredato
  const releaseYear = movie.release_date?.slice(0, 4) || "Ukjent";
  //vurdering med en desimal
  const rating = movie.vote_average.toFixed(1);
  // Lager url til filmplakaten hvis poster_path finnes, ellers null
  const posterUrl = movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : null;

  return (
    <Link href={`/movies/${movie.id}`} className={styles.link}>
      <article className={styles.card}>
        {posterUrl ? <Image src={posterUrl} alt={`Filmplakat for ${movie.title}`} width={500} height={750} className={styles.poster} /> : <p>Ingen plakat tilgjengelig</p>}
        <div className={styles.info}>
          <h2 className={styles.title}>{movie.title}</h2>
          <p className={styles.year}>År: {releaseYear}</p>
          <p className={styles.rating}>Vurdering: {movie.vote_count > 0 ? `${rating} (${movie.vote_count} vurderinger)` : "Ikke vurdert"}</p>
        </div>
      </article>
    </Link>
  );
}
