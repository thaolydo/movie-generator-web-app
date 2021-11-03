import { Component, OnInit } from '@angular/core';
import { ActorAPIService } from 'src/app/services/actor-api.service';
import { ActorID } from 'src/app/JSON Classes/ActorID';
import { ActorMovie } from 'src/app/JSON Classes/ActorMovieInfo';
import { Movie } from 'src/app/JSON Classes/ActorMovieInfo';

@Component({
  selector: 'app-actor-actress-page',
  templateUrl: './actor-actress-page.component.html',
  styleUrls: ['./actor-actress-page.component.scss']
})
export class ActorActressPageComponent implements OnInit {

  apiResults: ActorID[] = []
  actorName = "Leonardo DiCaprio"
  actorID = ""
  actorBio = ""
  actorPhotoURL = ""
  actorMovie: ActorMovie[] = []

  constructor(private actorAPIService: ActorAPIService) { }

  ngOnInit(): void {
    var id = this.getActorID();
    id.then((actorID) => {
      console.log(actorID)
      this.actorAPIService.getActorBio(actorID).subscribe(bio => this.actorBio = bio.results.biography.bio);
      this.actorAPIService.getActorPhoto(actorID).subscribe(photo => this.actorPhotoURL = photo.results.image_url)
      this.actorAPIService.getActorMovies(actorID).subscribe(movies => {
        this.actorMovie = movies.results
        console.log(this.actorMovie[0])
      });

    });
  }

  async getActorID(): Promise<string> {
    var results = this.actorAPIService.getActorID(this.actorName).subscribe(results => {
      for (var actorID in results.results) {
        if (this.actorName.toLowerCase === results.results[actorID].name.toLowerCase) {
          this.actorName = results.results[actorID].name
          this.actorID = results.results[actorID].imdb_id
          return
        }
      }
      //this.apiResults.forEach(id => console.log(id.imdb_id + ' Name: ' + id.name))
    });
    await this.delay(1000);
    return this.actorID;
  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }
}
