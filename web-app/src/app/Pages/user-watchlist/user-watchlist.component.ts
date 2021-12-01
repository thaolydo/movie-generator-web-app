import { Component, OnInit } from '@angular/core';
import { MovieData } from 'src/app/interfaces/movieData.interface';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { WatchlistModalComponent } from 'src/app/components/watchlist-modal/watchlist-modal.component';
import { ActorAPIService } from 'src/app/services/actor-api.service';
import { AltMovie } from 'src/app/JSON Classes/AltMovie';

@Component({
  selector: 'app-user-watchlist',
  templateUrl: './user-watchlist.component.html',
  styleUrls: ['./user-watchlist.component.scss']
})
export class UserWatchlistComponent implements OnInit {

  movieIDs = ["tt10696784"]
  watchListMovies: AltMovie[] = []

  constructor(public matDialog: MatDialog, private actorAPIService: ActorAPIService) { }

  ngOnInit(): void {
    // get list of id's from backend
    // loop through list of ID and call API to get movie info and save info in Movie array
    // then through ngFor pass that movie into showModal
    for (var index in this.movieIDs) {
      this.actorAPIService.getAltMovieInfo(this.movieIDs[index]).subscribe(movieInfo => {
        this.watchListMovies.push(movieInfo)
      })
    }
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
      showAddToWatchlist: false
    }
    const modalDialog = this.matDialog.open(WatchlistModalComponent, dialogConfig);
  }

}
