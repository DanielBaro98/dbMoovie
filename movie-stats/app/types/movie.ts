
// Felles informasjon for filmer
export type BaseMovie = {
    id: number;
    title: string;
    poster_path: string | null;
    release_date?: string | null;
    vote_average: number;
    vote_count: number;
};
// informasjon om filmer i en liste
export type Movie = BaseMovie & {
    overview: string;
    genre_ids: number[];
}
// informasjon om en bestemt film
export type MovieDetails = BaseMovie & {
    overview: string;
    runtime: number | null;
    genres: { id: number; name:  string; }[];
    budget: number;
    revenue: number;
}
// informasjon når vi henter en liste med filmer 
export type MovieResponse = {
    page: number;
    results: Movie[];
    total_pages: number;
    total_results: number;
}