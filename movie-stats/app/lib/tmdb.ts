import "server-only";
import type { MovieDetails, MovieResponse } from "@/app/types/movie";

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

export async function getMovieById(id: string): Promise<MovieDetails> {
  const url = `https://api.themoviedb.org/3/movie/${encodeURIComponent(id)}`;

  const token = process.env.TMDB_ACCESS_TOKEN;
  if (!token) {
    throw Error("TMDB-nøkkel mangler");
  }
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
    },
  });
  if (response.status === 404) {
    throw new Error("MOVIE_NOT_FOUND");
  }
  if (!response.ok) {
    throw new Error(`Kunne ikke hente film: ${response.status}`);
  }
  const data: MovieDetails = await response.json();
  return data;
}

export async function getSimilarMovies(id: string): Promise<MovieResponse> {
  // liten endring fra similar endepunkt til recommendation pga treff -> burde endre function navn
  const url = `https://api.themoviedb.org/3/movie/${encodeURIComponent(id)}/recommendations`;
  const token = process.env.TMDB_ACCESS_TOKEN;

  if (!token) {
    throw new Error("TMDB-nøkkel mangler");
  }
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
    },
  });
  if (!response.ok) {
    throw new Error(`Kunne ikke hente lignende filmer: ${response.status}`);
  }
  const data: MovieResponse = await response.json();
  return data;
}

export async function searchMovies(query: string): Promise<MovieResponse> {
  const trimmedQuery = query.trim();
  if (trimmedQuery === "") {
    return {
      page: 1,
      results: [],
      total_pages: 0,
      total_results: 0,
    };
  }
  const searchQuery = encodeURIComponent(trimmedQuery);

  const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${searchQuery}&language=en-US`, {
    headers: {
      Authorization: `Bearer ${process.env.TMDB_ACCESS_TOKEN}`,
      accept: "application/json",
    },
  });
  if (!response.ok) {
    throw new Error("Kunne ikke søke etter film");
  }
  return response.json();
}
