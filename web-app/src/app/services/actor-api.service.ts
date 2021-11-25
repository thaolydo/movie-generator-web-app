import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { ActorIDResults } from '../JSON Classes/ActorID';
import { ActorBioResult } from '../JSON Classes/ActorBio';
import { ActorMovie } from '../JSON Classes/ActorMovie';
import { ActorInfo } from '../JSON Classes/ActorInfo';
import { MovieInfo } from '../JSON Classes/MovieInfo';
import { AltMovie } from '../JSON Classes/AltMovie';

@Injectable({
  providedIn: 'root'
})
export class ActorAPIService {

  actorAPIURL = 'https://data-imdb1.p.rapidapi.com/actor'
  movieAPIURL = 'https://data-imdb1.p.rapidapi.com/movie/id'
  popularMoviesURL = 'https://imdb8.p.rapidapi.com/title/get-most-popular-movies'
  comingSoonMoviesURL = 'https://imdb8.p.rapidapi.com/title/get-coming-soon-movies'
  altMovieURL ='https://movie-database-imdb-alternative.p.rapidapi.com/?r=json&i'


  httpOptions = {
    headers: new HttpHeaders({
      "x-rapidapi-key": "2eff2a9739msh0d4005fec3258ddp174594jsn8a2a071f151f",
	    "x-rapidapi-host": "data-imdb1.p.rapidapi.com",
	    "useQueryString": "true"
    }),
  };

  httpOptions2 = {
    headers: new HttpHeaders({
      "x-rapidapi-host": "imdb8.p.rapidapi.com",
      "x-rapidapi-key": "6c55a5b78bmsh3b6ba3fac64b16fp14b5c2jsn067be01b7492"
    }),
  };

  httpOptions3 = {
    headers: {
      'x-rapidapi-host': 'movie-database-imdb-alternative.p.rapidapi.com',
      'x-rapidapi-key':
        '59f319ed21mshc043b55f9c79b2bp1d5cd6jsn1c0044c0405a',
    }
  }

  constructor(private httpClient: HttpClient) { }

  getMovieInfo(movieId: string): Observable<MovieInfo> {
      var apiURL = `${this.movieAPIURL}${movieId}`
      return this.httpClient.get<MovieInfo>(apiURL, this.httpOptions);
  }

  getAltMovieInfo(movieId: string): Observable<AltMovie> {
    var movieURL = `${this.altMovieURL}=${movieId}`
    return this.httpClient.get<AltMovie>(movieURL, this.httpOptions3)
  }

  getPopularMovieIDs(): Observable<string[]> {
    return this.httpClient.get<string[]>(this.popularMoviesURL, this.httpOptions2);
  }

  getComingSoonMovieIDs(): Observable<string[]> {
    return this.httpClient.get<string[]>(this.comingSoonMoviesURL, this.httpOptions2);
  }

  getActorID(actorName: string): Observable<ActorIDResults> {
    var urlActorName = this.addPercentTwenty(actorName)
    var apiURL = `${this.actorAPIURL}/imdb_id_byName/${urlActorName}/`;
    return this.httpClient.get<ActorIDResults>(apiURL, this.httpOptions)
  }

  getActorBio(actorID: string): Observable<ActorBioResult> {
    var apiURL = `${this.actorAPIURL}/id/${actorID}/bio/`;
    return this.httpClient.get<ActorBioResult>(apiURL,this.httpOptions)
  }

  getActorPhoto(actorID: string): Observable<ActorInfo> {
    var apiURL = `${this.actorAPIURL}/id/${actorID}/`;
    return this.httpClient.get<ActorInfo>(apiURL,this.httpOptions)
  }

  getActorMovies(actorID: string): Observable<ActorMovie> {
    var apiURL = `${this.actorAPIURL}/id/${actorID}/movies_knownFor/`;
    return this.httpClient.get<ActorMovie>(apiURL,this.httpOptions)
  }

  addPercentTwenty(name: string) : string {
    return name.replace(" ", "%20")
  }

}
