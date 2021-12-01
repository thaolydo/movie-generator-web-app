import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { WatchlistService } from 'src/app/services/watchlist.service';

@Component({
  selector: 'app-watchlist-modal',
  templateUrl: './watchlist-modal.component.html',
  styleUrls: ['./watchlist-modal.component.scss']
})
export class WatchlistModalComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<WatchlistModalComponent>,
    @Inject(MAT_DIALOG_DATA) public modalData: any,
    private watchlistService: WatchlistService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() { }

  async addToWatchlist(movieID: string) {
    console.log(movieID)
    await this.watchlistService.addToWatchlist(movieID);
    this.snackBar.open('Successfully add the movie to watchlist', 'close', { duration: 3000 });
  }

  async removeFromWatchlist(movieId: string) {
    await this.watchlistService.removeFromWatchlist(movieId);
    this.snackBar.open('Successfully remove the movie from watchlist', 'close', { duration: 3000 });
    location.reload();
  }

}
