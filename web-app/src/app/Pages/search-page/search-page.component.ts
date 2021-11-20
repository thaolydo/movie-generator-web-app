import { Component, OnInit } from '@angular/core';
import { MovieData } from 'src/app/interfaces/movieData.interface';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss'],
})
export class SearchPageComponent implements OnInit {
  searchString: string = ''; // string used to query to database
  searched: boolean = true; // determines if the "enter a search" query shows
  movieList: MovieData[] = []; // holds the list of movies from the API
  apiResponse: String = ''; // Response from API
  errorString: string = 'Please enter a search term'; // Error string from search

  getMovieInfoByID = (id: string) => {
    fetch(
      'https://movie-database-imdb-alternative.p.rapidapi.com/?r=json&i=' + id,
      {
        method: 'GET',
        headers: {
          'x-rapidapi-host': 'movie-database-imdb-alternative.p.rapidapi.com',
          'x-rapidapi-key':
            '59f319ed21mshc043b55f9c79b2bp1d5cd6jsn1c0044c0405a',
        },
      }
    )
      .then((response) => {
        response.json().then((data) => {
          //console.log(data)

          this.movieList.push({
            title: data['Title'],
            releaseDate: data['Released'],
            genre: data['Genre'],
            director: data['Director'],
            rating: data['imdbRating'],
            rated: data['Rated'],
            photoSrc: data['Poster'],
          });
        });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  getInfo = () => {};

  getMovieInfoByTitle = () => {
    this.movieList.length = 0;
    let userSearch = this.searchString.trim().replace(' ', '%20'); // trims the search string and formats its it to work in the api
    let imdbTitlesList: string[] = []; // holds the list of imdb title query
    console.log(userSearch);

    fetch(
      'https://movie-database-imdb-alternative.p.rapidapi.com/?s=' +
        userSearch +
        '&r=json&page=1',
      {
        method: 'GET',
        headers: {
          'x-rapidapi-host': 'movie-database-imdb-alternative.p.rapidapi.com',
          'x-rapidapi-key':
            '59f319ed21mshc043b55f9c79b2bp1d5cd6jsn1c0044c0405a',
        },
      }
    )
      .then((response) => {
        console.log(
          response.json().then((data) => {
            if (data['Response'] == 'False') {
              this.searched = false;
              this.errorString = 'Please enter another search term';
            }
            console.log(data);
            console.log(data['Response']);
            //console.log(data["Search"].length)

            for (let step = 0; step < data['Search'].length; step++) {
              imdbTitlesList.push(data['Search'][step]['imdbID']);
              imdbTitlesList.push(data['Search'][step]['Poster']);
            }

            for (let step = 0; step < imdbTitlesList.length; step += 2) {
              let tempImdbID = imdbTitlesList[step];

              fetch(
                'https://movies-tvshows-data-imdb.p.rapidapi.com/?type=get-movie-details&imdb=' +
                  tempImdbID,
                {
                  method: 'GET',
                  headers: {
                    'x-rapidapi-host':
                      'movies-tvshows-data-imdb.p.rapidapi.com',
                    'x-rapidapi-key':
                      '59f319ed21mshc043b55f9c79b2bp1d5cd6jsn1c0044c0405a',
                  },
                }
              )
                .then((response) => {
                  console.log('ayye');
                  console.log(
                    response.json().then((data) => {
                      console.log(data);
                      if (
                        data['title'] != null ||
                        data['release_date'] != null ||
                        data['genres'] != null ||
                        data['directors'] != null ||
                        data['imdb_rating'] != null
                      ) {
                        if (data['rated'] != null) {
                          this.movieList.push({
                            title: data['title'],
                            releaseDate: data['release_date'],
                            genre: data['genres'][0],
                            director: data['directors'][0],
                            rating: data['imdb_rating'],
                            rated: data['rated'],
                            photoSrc: imdbTitlesList[step + 1],
                          });
                        } else {
                          this.movieList.push({
                            title: data['title'],
                            releaseDate: data['release_date'],
                            genre: data['genres'][0],
                            director: data['directors'][0],
                            rating: data['imdb_rating'],
                            rated: 'N/A',
                            photoSrc: imdbTitlesList[step + 1],
                          });
                        }
                      }
                    })
                  );
                })
                .catch((err) => {
                  console.error(err);
                });
            }
          })
        );
      })
      .catch((err) => {
        console.error(err);
      });
  };

  getMovieInfoByGenre = () => {
    this.movieList.length = 0;
    let userSearch =
      this.searchString.charAt(0).toUpperCase() +
      this.searchString.trim().replace(' ', '%20').slice(1); // trims the search string and formats its it to work in the api
    let tempMovieList: string[] = []; // holds the list of movies to push to the movies list
    console.log(userSearch);

    fetch(
      'https://data-imdb1.p.rapidapi.com/movie/byGen/' +
        userSearch +
        '/?page_size=25',
      {
        method: 'GET',
        headers: {
          'x-rapidapi-host': 'data-imdb1.p.rapidapi.com',
          'x-rapidapi-key':
            '59f319ed21mshc043b55f9c79b2bp1d5cd6jsn1c0044c0405a',
        },
      }
    )
      .then((response) => {
        response.json().then((data) => {
          let tempIDsList: string[] = [];
          tempIDsList = data['results'];

          for (let i = 0; i < 25; i++) {
            let tempID: any = tempIDsList[i];
            this.getMovieInfoByID(tempID['imdb_id']);
          }
        });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  getMovieInfoByYear = () => {
    this.movieList.length = 0;
    let userSearch = this.searchString.trim().replace(' ', '%20'); // trims the search string and formats its it to work in the api
    let imdbTitlesList: string[] = []; // holds the list of imdb title query
    console.log(userSearch);

    fetch(
      'https://data-imdb1.p.rapidapi.com/movie/byYear/' +
        userSearch +
        '/?page_size=25',
      {
        method: 'GET',
        headers: {
          'x-rapidapi-host': 'data-imdb1.p.rapidapi.com',
          'x-rapidapi-key':
            '59f319ed21mshc043b55f9c79b2bp1d5cd6jsn1c0044c0405a',
        },
      }
    )
      .then((response) => {
        response.json().then((data) => {
          let tempIDsList: string[] = [];
          tempIDsList = data['results'];

          for (let i = 0; i < 25; i++) {
            let tempID: any = tempIDsList[i];
            this.getMovieInfoByID(tempID['imdb_id']);
          }
        });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  getActorInfo = () => {
    this.movieList.length = 0;
    let userSearch = this.searchString.trim().replace(' ', '%20'); // trims the search string and formats its it to work in the api
    let imdbTitlesList: string[] = []; // holds the list of imdb title query
    console.log(userSearch);

    fetch(
      'https://movie-database-imdb-alternative.p.rapidapi.com/?s=' +
        userSearch +
        '&r=json&page=1',
      {
        method: 'GET',
        headers: {
          'x-rapidapi-host': 'movie-database-imdb-alternative.p.rapidapi.com',
          'x-rapidapi-key':
            '59f319ed21mshc043b55f9c79b2bp1d5cd6jsn1c0044c0405a',
        },
      }
    )
      .then((response) => {
        console.log(
          response.json().then((data) => {
            if (data['Response'] == 'False') {
              this.searched = false;
              this.errorString = 'Please enter another search term';
            }
            console.log(data);
            console.log(data['Response']);
            //console.log(data["Search"].length)

            for (let step = 0; step < data['Search'].length; step++) {
              imdbTitlesList.push(data['Search'][step]['imdbID']);
              imdbTitlesList.push(data['Search'][step]['Poster']);
            }

            for (let step = 0; step < imdbTitlesList.length; step += 2) {
              let tempImdbID = imdbTitlesList[step];

              fetch(
                'https://movies-tvshows-data-imdb.p.rapidapi.com/?type=get-movie-details&imdb=' +
                  tempImdbID,
                {
                  method: 'GET',
                  headers: {
                    'x-rapidapi-host':
                      'movies-tvshows-data-imdb.p.rapidapi.com',
                    'x-rapidapi-key':
                      '59f319ed21mshc043b55f9c79b2bp1d5cd6jsn1c0044c0405a',
                  },
                }
              )
                .then((response) => {
                  console.log('ayye');
                  console.log(
                    response.json().then((data) => {
                      console.log(data);
                      if (
                        data['title'] != null ||
                        data['release_date'] != null ||
                        data['genres'] != null ||
                        data['directors'] != null ||
                        data['imdb_rating'] != null
                      ) {
                        if (data['rated'] != null) {
                          this.movieList.push({
                            title: data['title'],
                            releaseDate: data['release_date'],
                            genre: data['genres'][0],
                            director: data['directors'][0],
                            rating: data['imdb_rating'],
                            rated: data['rated'],
                            photoSrc: imdbTitlesList[step + 1],
                          });
                        } else {
                          this.movieList.push({
                            title: data['title'],
                            releaseDate: data['release_date'],
                            genre: data['genres'][0],
                            director: data['directors'][0],
                            rating: data['imdb_rating'],
                            rated: 'N/A',
                            photoSrc: imdbTitlesList[step + 1],
                          });
                        }
                      }
                    })
                  );
                })
                .catch((err) => {
                  console.error(err);
                });
            }
          })
        );
      })
      .catch((err) => {
        console.error(err);
      });
  };

  getMovieInfoByActor = () => {
    this.movieList.length = 0;
    let userSearch = this.searchString.trim().replace(' ', '%20'); // trims the search string and formats its it to work in the api
    let imdbTitlesList: string[] = []; // holds the list of imdb title query
    console.log(userSearch);

    fetch(
      'https://movie-database-imdb-alternative.p.rapidapi.com/?s=' +
        userSearch +
        '&r=json&page=1',
      {
        method: 'GET',
        headers: {
          'x-rapidapi-host': 'movie-database-imdb-alternative.p.rapidapi.com',
          'x-rapidapi-key':
            '59f319ed21mshc043b55f9c79b2bp1d5cd6jsn1c0044c0405a',
        },
      }
    )
      .then((response) => {
        console.log(
          response.json().then((data) => {
            if (data['Response'] == 'False') {
              this.searched = false;
              this.errorString = 'Please enter another search term';
            }
            console.log(data);
            console.log(data['Response']);
            //console.log(data["Search"].length)

            for (let step = 0; step < data['Search'].length; step++) {
              imdbTitlesList.push(data['Search'][step]['imdbID']);
              imdbTitlesList.push(data['Search'][step]['Poster']);
            }

            for (let step = 0; step < imdbTitlesList.length; step += 2) {
              let tempImdbID = imdbTitlesList[step];

              fetch(
                'https://movies-tvshows-data-imdb.p.rapidapi.com/?type=get-movie-details&imdb=' +
                  tempImdbID,
                {
                  method: 'GET',
                  headers: {
                    'x-rapidapi-host':
                      'movies-tvshows-data-imdb.p.rapidapi.com',
                    'x-rapidapi-key':
                      '59f319ed21mshc043b55f9c79b2bp1d5cd6jsn1c0044c0405a',
                  },
                }
              )
                .then((response) => {
                  console.log('ayye');
                  console.log(
                    response.json().then((data) => {
                      console.log(data);
                      if (
                        data['title'] != null ||
                        data['release_date'] != null ||
                        data['genres'] != null ||
                        data['directors'] != null ||
                        data['imdb_rating'] != null
                      ) {
                        if (data['rated'] != null) {
                          this.movieList.push({
                            title: data['title'],
                            releaseDate: data['release_date'],
                            genre: data['genres'][0],
                            director: data['directors'][0],
                            rating: data['imdb_rating'],
                            rated: data['rated'],
                            photoSrc: imdbTitlesList[step + 1],
                          });
                        } else {
                          this.movieList.push({
                            title: data['title'],
                            releaseDate: data['release_date'],
                            genre: data['genres'][0],
                            director: data['directors'][0],
                            rating: data['imdb_rating'],
                            rated: 'N/A',
                            photoSrc: imdbTitlesList[step + 1],
                          });
                        }
                      }
                    })
                  );
                })
                .catch((err) => {
                  console.error(err);
                });
            }
          })
        );
      })
      .catch((err) => {
        console.error(err);
      });
  };

  getMovieInfoByRandom = () => {
    this.movieList.length = 0;
    let userSearch = this.searchString.trim().replace(' ', '%20'); // trims the search string and formats its it to work in the api
    let imdbTitlesList: string[] = []; // holds the list of imdb title query
    console.log(userSearch);

    fetch(
      'https://movie-database-imdb-alternative.p.rapidapi.com/?s=' +
        userSearch +
        '&r=json&page=1',
      {
        method: 'GET',
        headers: {
          'x-rapidapi-host': 'movie-database-imdb-alternative.p.rapidapi.com',
          'x-rapidapi-key':
            '59f319ed21mshc043b55f9c79b2bp1d5cd6jsn1c0044c0405a',
        },
      }
    )
      .then((response) => {
        console.log(
          response.json().then((data) => {
            if (data['Response'] == 'False') {
              this.searched = false;
              this.errorString = 'Please enter another search term';
            }
            console.log(data);
            console.log(data['Response']);
            //console.log(data["Search"].length)

            for (let step = 0; step < data['Search'].length; step++) {
              imdbTitlesList.push(data['Search'][step]['imdbID']);
              imdbTitlesList.push(data['Search'][step]['Poster']);
            }

            for (let step = 0; step < imdbTitlesList.length; step += 2) {
              let tempImdbID = imdbTitlesList[step];

              fetch(
                'https://movies-tvshows-data-imdb.p.rapidapi.com/?type=get-movie-details&imdb=' +
                  tempImdbID,
                {
                  method: 'GET',
                  headers: {
                    'x-rapidapi-host':
                      'movies-tvshows-data-imdb.p.rapidapi.com',
                    'x-rapidapi-key':
                      '59f319ed21mshc043b55f9c79b2bp1d5cd6jsn1c0044c0405a',
                  },
                }
              )
                .then((response) => {
                  console.log('ayye');
                  console.log(
                    response.json().then((data) => {
                      console.log(data);
                      if (
                        data['title'] != null ||
                        data['release_date'] != null ||
                        data['genres'] != null ||
                        data['directors'] != null ||
                        data['imdb_rating'] != null
                      ) {
                        if (data['rated'] != null) {
                          this.movieList.push({
                            title: data['title'],
                            releaseDate: data['release_date'],
                            genre: data['genres'][0],
                            director: data['directors'][0],
                            rating: data['imdb_rating'],
                            rated: data['rated'],
                            photoSrc: imdbTitlesList[step + 1],
                          });
                        } else {
                          this.movieList.push({
                            title: data['title'],
                            releaseDate: data['release_date'],
                            genre: data['genres'][0],
                            director: data['directors'][0],
                            rating: data['imdb_rating'],
                            rated: 'N/A',
                            photoSrc: imdbTitlesList[step + 1],
                          });
                        }
                      }
                    })
                  );
                })
                .catch((err) => {
                  console.error(err);
                });
            }
          })
        );
      })
      .catch((err) => {
        console.error(err);
      });
  };

  openMovieDetailsModal = () => {}; //pass movie data as parameter

  constructor() {}

  ngOnInit(): void {}
}
