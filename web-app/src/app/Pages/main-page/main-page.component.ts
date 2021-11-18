import { Component, OnInit } from '@angular/core';
import { ActorAPIService } from 'src/app/services/actor-api.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  searchBarText: string = ""
  popularMoviePosters: string[] = []
  comingSoonPosters: string[] = []

  constructor(private actorAPIService: ActorAPIService) { }

  async ngOnInit(): Promise<void> {

    var popularTitles : string[] = []
    var comingSoonTitles : string[] = []
    var popularTitles = ["/title/tt9032400/", "/title/tt1160419/", "/title/tt13024674/", "/title/tt10696784/", "/title/tt9639470/", 
                        "/title/tt2382320/", "/title/tt3420504/", "/title/tt8847712/", "/title/tt10665338/", "/title/tt5108870/"]
    var comingSoonTitles = ["/title/tt9032400/", "/title/tt1160419/", "/title/tt13024674/", "/title/tt10696784/", "/title/tt9639470/", 
                        "/title/tt2382320/", "/title/tt3420504/", "/title/tt8847712/", "/title/tt10665338/", "/title/tt5108870/"]
                        
    // this.actorAPIService.getPopularMovieIDs().subscribe(movieIDs => {
    //   popularTitles = movieIDs
    //   console.log(popularTitles)
    // })
    // this.actorAPIService.getComingSoonMovieIDs().subscribe(movieIDs => {
    //   comingSoonTitles = movieIDs
    //   console.log(popularTitles)
    // })
    await this.delay(1000);
    for (var title in popularTitles) {
      var movieID = this.parseTitle(popularTitles[title])
      this.actorAPIService.getMovieInfo(movieID).subscribe((movie) => {
        if (movie.results.banner != null && movie.results.banner.includes('https') && this.popularMoviePosters.length <= 20) { 
          console.log(movie.results.title)
          console.log(movie.results.banner)
          this.popularMoviePosters.push(movie.results.banner) 
        }
      })
    }

    for (var title in comingSoonTitles) {
      var movieID = this.parseTitle(popularTitles[title])
      this.actorAPIService.getMovieInfo(movieID).subscribe((movie) => {
        if (movie.results.banner != null && movie.results.banner.includes('https') && this.comingSoonPosters.length <= 20) { 
          console.log(movie.results.title)
          console.log(movie.results.banner)
          this.comingSoonPosters.push(movie.results.banner) 
        }
      })
    }
  
  }

  parseTitle(movieTitle: string) : string {
    movieTitle = movieTitle.replace("/title", "");
    console.log(movieTitle)
    return movieTitle;
  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

}
