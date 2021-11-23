import { Component, OnInit } from '@angular/core';
import { MovieData } from 'src/app/interfaces/movieData.interface';


@Component({
  selector: 'app-user-watchlist',
  templateUrl: './user-watchlist.component.html',
  styleUrls: ['./user-watchlist.component.scss']
})
export class UserWatchlistComponent implements OnInit {

  movieList: MovieData[] = [{title: "Cast Away", releaseDate: "December 7, 2000", genre: "Drama", director: "Robert Zemeckis", rating: "8.6", rated: "R", photoSrc: "https://m.media-amazon.com/images/M/MV5BN2Y5ZTU4YjctMDRmMC00MTg4LWE1M2MtMjk4MzVmOTE4YjkzXkEyXkFqcGdeQXVyNTc1NTQxODI@._V1_UX182_CR0,0,182,268_AL_.jpg"}, {title: "Cast Away", releaseDate: "December 7, 2000", genre: "Drama", director: "Robert Zemeckis", rating: "8.6", rated: "R", photoSrc: "https://m.media-amazon.com/images/M/MV5BN2Y5ZTU4YjctMDRmMC00MTg4LWE1M2MtMjk4MzVmOTE4YjkzXkEyXkFqcGdeQXVyNTc1NTQxODI@._V1_UX182_CR0,0,182,268_AL_.jpg"}, {title: "Cast Away", releaseDate: "December 7, 2000", genre: "Drama", director: "Robert Zemeckis", rating: "8.6", rated: "R", photoSrc: "https://m.media-amazon.com/images/M/MV5BN2Y5ZTU4YjctMDRmMC00MTg4LWE1M2MtMjk4MzVmOTE4YjkzXkEyXkFqcGdeQXVyNTc1NTQxODI@._V1_UX182_CR0,0,182,268_AL_.jpg"}, {title: "Cast Away", releaseDate: "December 7, 2000", genre: "Drama", director: "Robert Zemeckis", rating: "8.6", rated: "R", photoSrc: "https://m.media-amazon.com/images/M/MV5BN2Y5ZTU4YjctMDRmMC00MTg4LWE1M2MtMjk4MzVmOTE4YjkzXkEyXkFqcGdeQXVyNTc1NTQxODI@._V1_UX182_CR0,0,182,268_AL_.jpg"}, {title: "Cast Away", releaseDate: "December 7, 2000", genre: "Drama", director: "Robert Zemeckis", rating: "8.6", rated: "R", photoSrc: "https://m.media-amazon.com/images/M/MV5BN2Y5ZTU4YjctMDRmMC00MTg4LWE1M2MtMjk4MzVmOTE4YjkzXkEyXkFqcGdeQXVyNTc1NTQxODI@._V1_UX182_CR0,0,182,268_AL_.jpg"}, {title: "Cast Away", releaseDate: "December 7, 2000", genre: "Drama", director: "Robert Zemeckis", rating: "8.6", rated: "R", photoSrc: "https://m.media-amazon.com/images/M/MV5BN2Y5ZTU4YjctMDRmMC00MTg4LWE1M2MtMjk4MzVmOTE4YjkzXkEyXkFqcGdeQXVyNTc1NTQxODI@._V1_UX182_CR0,0,182,268_AL_.jpg"}];

  constructor() { }

  ngOnInit(): void {
  }

  showModal() {
    console.log("Showing Modal")
  }

}
