import { Component, OnInit } from '@angular/core';
import { ActorAPIService } from 'src/app/services/actor-api.service';
import { ActorIDResults } from 'src/app/JSON Classes/ActorID';
import { ActorID } from 'src/app/JSON Classes/ActorID';

@Component({
  selector: 'app-actor-actress-page',
  templateUrl: './actor-actress-page.component.html',
  styleUrls: ['./actor-actress-page.component.scss']
})
export class ActorActressPageComponent implements OnInit {

  apiResults: ActorID[] = []
  actorName = "Tom Hanks"
  actorID = ""
  actorBio = ""

  constructor(private actorAPIService: ActorAPIService) { }

  ngOnInit(): void {
    var id = this.getActorID();
    id.then((result) => {
      console.log(result)
      this.actorAPIService.getActorBio(result).subscribe(bio => this.actorBio = bio.results.biography.bio);
  });
    //console.log(id);
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
