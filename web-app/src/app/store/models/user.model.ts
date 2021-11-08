import { Movie } from './movie.model';

export interface User {
  firstName: string;
  lastName: string;
  email: string;
  watchlist: Array<Movie>;
}
