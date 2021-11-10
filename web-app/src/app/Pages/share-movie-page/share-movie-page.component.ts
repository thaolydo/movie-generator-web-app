import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-share-movie-page',
  templateUrl: './share-movie-page.component.html',
  styleUrls: ['./share-movie-page.component.scss'],
})
export class ShareMoviePageComponent implements OnInit {
  receiverName: string = '';
  receiverEmail: string = '';

  constructor() {}

  ngOnInit(): void {}
}
