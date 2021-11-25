import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { WatchlistServiceService } from 'src/app/services/watchlist-service.service';

@Component({
  selector: 'app-watchlist-modal',
  templateUrl: './watchlist-modal.component.html',
  styleUrls: ['./watchlist-modal.component.scss']
})
export class WatchlistModalComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<WatchlistModalComponent>,
    @Inject(MAT_DIALOG_DATA) public modalData: any,
    private modalService: WatchlistServiceService
  ) {}

  ngOnInit() { }

}
