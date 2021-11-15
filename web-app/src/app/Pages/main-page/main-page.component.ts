import { Component, OnInit } from '@angular/core';
import { ActorAPIService } from 'src/app/services/actor-api.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  searchBarText: string = ""

  constructor(private actorAPIService: ActorAPIService) { }

  ngOnInit(): void {
    // API call to get list of popular movies which will return a string 
    // array of titles in the form of /title/tt9032400/

    var popularTitles = ["/title/tt9032400/", "/title/tt1160419/", "/title/tt13024674/", "/title/tt10696784/", "/title/tt9639470/", 
                        "/title/tt2382320/", "/title/tt3420504/", "/title/tt8847712/", "/title/tt10665338/", "/title/tt5108870/"]

    for (var title in popularTitles) {
      var movieID = this.parseTitle(popularTitles[title])
      this.actorAPIService.getMovieInfo(movieID).subscribe(movie => {
        console.log(movie.results.title)
        console.log(movie.results.banner)
      })
    }
  
  }

  parseTitle(movieTitle: string) : string {
    movieTitle = movieTitle.replace("/title", "");
    console.log(movieTitle)
    return movieTitle;
  }

}
