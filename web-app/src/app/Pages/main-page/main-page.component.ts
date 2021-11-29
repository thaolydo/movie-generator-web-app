import { Component, OnInit } from '@angular/core';
import { ActorAPIService } from 'src/app/services/actor-api.service';
import { AltMovie } from 'src/app/JSON Classes/AltMovie';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { WatchlistModalComponent } from 'src/app/components/watchlist-modal/watchlist-modal.component';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  searchBarText: string = ""
  popularMovies: AltMovie[] = []
  comingSoonMovies: AltMovie[] = []

  constructor(private actorAPIService: ActorAPIService, public matDialog: MatDialog) { }

  async ngOnInit(): Promise<void> {

    var popularTitles : string[] = []
    var comingSoonTitles : string[] = []
    var popularTitles = ["/title/tt9032400/", "/title/tt1160419/", "/title/tt13024674/", "/title/tt10696784/", "/title/tt9639470/"]
    var comingSoonTitles = ["/title/tt9032400/", "/title/tt1160419/", "/title/tt13024674/", "/title/tt10696784/", "/title/tt9639470/"]
                        
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
      if (this.popularMovies.length <= 15) {
        this.actorAPIService.getAltMovieInfo(movieID).subscribe((movie) => this.popularMovies.push(movie))
      }
    }

    for (var title in comingSoonTitles) {
      var movieID = this.parseTitle(popularTitles[title])
      if (this.comingSoonMovies.length <= 15) {
        this.actorAPIService.getAltMovieInfo(movieID).subscribe((movie) => this.comingSoonMovies.push(movie))
      }
    }
  
  }

  parseTitle(movieTitle: string) : string {
    movieTitle = movieTitle.replace("/title/", "");
    movieTitle = movieTitle.replace("/", "");
    console.log(movieTitle)
    return movieTitle;
  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }


  showModal(movie: AltMovie) {
    console.log(movie)
    const dialogConfig = new MatDialogConfig();
    dialogConfig.id = "modal-component";
    dialogConfig.height = "800px";
    dialogConfig.width = "1100px";
    dialogConfig.data = {
      title: movie.Title,
      poster: movie.Poster,
      director: movie.Director,
      actors: movie.Actors,
      rating: movie.imdbRating,
      rated: movie.Rated,
      boxOffice: movie.BoxOffice,
      movieID: movie.imdbID,
      plot: movie.Plot,
      genre: movie.Genre,
      released: movie.Released,
      metascore: movie.metascore,
      writers: movie.Writers,
      showAddToWatchlist: true
    }
    const modalDialog = this.matDialog.open(WatchlistModalComponent, dialogConfig);
  }

}
