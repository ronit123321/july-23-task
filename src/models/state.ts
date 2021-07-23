import { MovieDetail } from './movie';
import { MovieQuickInfo } from './moviesQuery';

export interface AppState {
  moviesList: MovieQuickInfo[];
  searchCriteria: string;
  selectedMovieDetails: MovieDetail | null;
}
