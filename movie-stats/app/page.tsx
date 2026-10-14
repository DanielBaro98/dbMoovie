import { getPopularMovies } from "@/app/lib/tmdb";


export default async function Home() {
  const data = await getPopularMovies();

  console.log("Data fra TMDB:", data);
  return (
    <main>
      <h1>Populære Filmer</h1>
      <p>Utforsk populære filmer og finn dine favoritter</p>
      <ul>
        {data.results.map((movie) => (
          <li key={movie.id}>
            {movie.title}
          </li>
        ))}
      </ul>
    </main>
  );
}
