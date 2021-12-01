import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
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
    private watchlistService: WatchlistService
  ) {}

  ngOnInit() { }

  async addToWatchlist(movieID: string) {
    console.log(movieID)
    await this.watchlistService.addToWatchlist(movieID);
  }

}
