export interface MoviesQuery {
  Search: MovieQuickInfo[];
  totalResults?: string;
  Response: string;
  Error?: string;
}

export interface MovieQuickInfo {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}