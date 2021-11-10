import { Movie } from 'src/app/interfaces/movie.interface';

export interface User {
  firstName: string;
  lastName: string;
  email: string;
  watchlist: Array<Movie>;
}
