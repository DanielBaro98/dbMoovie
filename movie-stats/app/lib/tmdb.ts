import "server-only";
import type { MovieResponse } from "@/app/types/movie";

export async function getPopularMovies(): Promise<MovieResponse> {
  const url = "https://api.themoviedb.org/3/movie/popular";

  const token = process.env.TMDB_ACCESS_TOKEN;

  if (!token) {
    throw new Error("TMDB-Nøkkel mangler");
  }

  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(`Kunne ikke hente filmer: ${response.status}`);
  }
  const data: MovieResponse = await response.json();
  return data;
}
