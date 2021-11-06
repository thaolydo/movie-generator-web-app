import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { ActorIDResults } from '../JSON Classes/ActorID';
import { ActorBioResult } from '../JSON Classes/ActorBio';
import { ActorMovie } from '../JSON Classes/ActorMovie';
import { ActorInfo } from '../JSON Classes/ActorInfo';
@Injectable({
  providedIn: 'root'
})
export class ActorAPIService {

  actorAPIURL = 'https://data-imdb1.p.rapidapi.com/actor'

  httpOptions = {
    headers: new HttpHeaders({
      "x-rapidapi-key": "2eff2a9739msh0d4005fec3258ddp174594jsn8a2a071f151f",
	    "x-rapidapi-host": "data-imdb1.p.rapidapi.com",
	    "useQueryString": "true"
    }),
  };

  constructor(private httpClient: HttpClient) { }

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
