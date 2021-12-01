import { Component, OnInit } from '@angular/core';
import { ActorData } from 'src/app/interfaces/actorData.interface';
import { MovieData } from 'src/app/interfaces/movieData.interface';
import { ActorAPIService } from 'src/app/services/actor-api.service';
import { MatDialog } from '@angular/material/dialog';
import { WatchlistService } from 'src/app/services/watchlist.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss'],
})
export class SearchPageComponent implements OnInit {
  searchString: string = ''; // string used to query to database
  searched: boolean = false; // determines if the "enter a search" query shows
  showMovieList: boolean = false; // determines if the movies div will show
  showActorList: boolean = false; // determines if the actors div will show
  showSpinner: boolean = false;
  showErrorMessage: boolean = false;
  movieList: MovieData[] = []; // holds the list of movies from the API
  actorList: ActorData[] = []; // holds the list of actors/actresses from the API
  apiResponse: String = ''; // Response from API
  errorString: string = 'Please enter a search term'; // Error string from search
  searchBy: string = 'Title';
  popupMovieTitle: string = 'Ehhh';

  showSpinnerCommand = () => {
    if (this.showSpinner == true) {
      this.showSpinner = false;
    } else {
      this.showSpinner = true;
    }
  };

  generateFilms = () => {
    if (this.searchBy == 'Title') {
      this.getMovieInfoByTitle();
    } else if (this.searchBy == 'Genre') {
      this.getMovieInfoByGenre();
    } else if (this.searchBy == 'Year') {
      this.getMovieInfoByYear();
    } else if (this.searchBy == 'ByActor') {
      this.getMoviesByActor();
    } else if (this.searchBy == 'ForActor') {
      this.getMovieInfoByActor();
    } else if (this.searchBy == 'Random') {
      this.getMovieInfoByRandom();
    } else {
    }
  };

  setSearchBy = (searchType: string) => {
    if (searchType == 'Title') {
      this.searchBy = searchType;
    } else if (searchType == 'Genre') {
      this.searchBy = searchType;
    } else if (searchType == 'Year') {
      this.searchBy = searchType;
    } else if (searchType == 'ByActor') {
      this.searchBy = searchType;
    } else if (searchType == 'ForActor') {
      this.searchBy = searchType;
    } else if (searchType == 'Random') {
      this.searchBy = searchType;
    } else {
    }
  };

  selectChangeHandler(event: any) {
    //update the ui
    this.setSearchBy(event.target.value);
  }

  getMovieInfoByID = async (id: string) => {
    await fetch(
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
          this.movieList.push({
            title: data['Title'],
            releaseDate: data['Released'],
            genre: data['Genre'],
            director: data['Director'],
            rating: data['imdbRating'],
            rated: data['Rated'],
            photoSrc: data['Poster'],
            imdb: data['imdbID'],
          });
        });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  getActorInfoByID = async (id: string) => {
    await fetch('https://data-imdb1.p.rapidapi.com/actor/id/' + id + '/', {
      method: 'GET',
      headers: {
        'x-rapidapi-host': 'data-imdb1.p.rapidapi.com',
        'x-rapidapi-key': '59f319ed21mshc043b55f9c79b2bp1d5cd6jsn1c0044c0405a',
      },
    })
      .then((response) => {
        response.json().then((data) => {
          if (data['results']['image_url'] == null) {
            this.actorList.push({
              name: data['results']['name'],
              imdbID: data['results']['imdb_id'],
              photoURL:
                'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAh1BMVEX///8zMzP+/v4VFRXMzMwAAAAZGRkxMTESEhIiIiIpKSnV1dUODg41NTWoqKguLi7y8vIfHx/e3t7o6OiLi4uTk5PDw8NVVVX39/egoKAICAjw8PBGRka4uLitra3ExMRsbGx8fHxWVlY+Pj5iYmJNTU14eHiYmJhoaGiGhoZFRUU9PT1ycnJyDJ60AAATdElEQVR4nO1diZqqOgwuIFulIiouOLiNyzjj+z/fTdIWcB30yID3M+c7OmoL/WmapkmaMvamN73pTW9605ve9KY3velNb3pTlWSazCxbVBYuW7wpBO0dt1slqD2VpV+POp9BYP1OnhXwuPuCGIdWZBjC+J2gjOD2pO723kcwqmK7DLocprOuu9F3kckmgSjXg1k3+l8vxac92xDink4UhrA6dbf6Htq4xh1dqEoGdbf6Dmondw1CBTOa4QB+DZr49wM0RDiqu93laeU+ANAVUd3tLk8P8ChSMG4Im1IrbrYkfBBh9+Zdzb/Se8zsjtfocYS3Lip1+T/AWOYWrvHAQDQMb/yMm/8zwU16s8VP5Nygx7oQ5gvnxmWN9aRVPTpkkplI/AfZ8N8o9L1o162WUeHaaRS5KCofFJf/RHBP395ViA9ovLLgPg8NsmfggznT8I1+hQD7kj3r6D95V4GvdkXDEdh/mrj1gDsiIexhJVLVZOOoCQCBhN2rBuEqbAZAtAj8OnM+QjPLqGsInhHfPhsd6kuPzuOVEPLpMxkVL9aJGtJ/ROHXs4WNyXhjWJTInj61E+FSba9uTMeEJo/nAcSn1fFr0tOEmudPyH26fXXt1sCkArBxL3ICLs40Rf/ZU6JbhzIKAJNlD5ZrFyzoXveZEOFSUQ0AAWIyl0u2dnL6U9B7Hj6i586GJRle+Dv9hFPnpI7XbhxCWhsIQxr7S3o1HH17k4FwOarRPITQvJCTkSLiuAY7lx3nBALTlPgYW55oxY1DyK3gZxHP0uE8TXeHj8ArYxYPFwohvA748W+NQggSn8etI2Oo2Z58Jr+qSe6HRIcwF6HRSC7FyZrbS2xNbu1UMQn9nUUdeX3VKYKpDGIAskQTEaJU4XY81vZjxvS4Up9mkX+zH0HBVjX33G3oOEy2Cl8hmkQxHmHc2bckjoiWskpsnT6JBiCkCAQ/b8cVt8N0E4mLmqe8iM87rdbs53zp1gyE1uL8QudAd/Z1gPDP96xLBqIGIASVa3K8hiuMw8KXJmvZtx4TvZ1DrB+hEHaq/AAFGk+npy40KNG/HZpyUQGqH6GBVk3G8oi1abrcREEQeM7nYdbL3HNUqJ9cH4pXqF6E+NCDGVMICcZwlThcrzFDP/mcSY+g4tpferFxCFHMxyxHyNLQKqok0F9uFEwkOPk6vz4WG4lQhCuWazDTjWfkQkMDFRFvaYDwFt9py6u7D4OxBIf/Uvuau9GOGcvG4vd9VoSaEVopVaLG7+zr/sZonU8d/fv4tF6Eror9QYQD6xb38U0ubWJ+o2DDEGa+IZPtrNtF+ZpphOyXog1CSCsCWe2GuqLIiTM+7dwTLFYfQuDJoK0Rjn+f5oQtm4ph4ffY1Wvtw++s1qJM0EYoy9Ii8CUQYhSl6sN2KfEYdSRAk/WCl0Cow9MA46jcFOcwPWfcMenXiBDNR4z6pFdyhotSLWxODWrNROhnGwvKtVcY4Ub3Yav8hFGjLLVkuItJQZil2E4kOgioW34g1ogwmKoq/TNvyjXK2bT8QKyRS7m2VKSl/VV8rxGuS8cE1ojwR7e2vJ7pbvRtyoua+hCGmfu51HQvydf9Xl5xqxHhQVfZlF/wWVo1Lc/Z9SHkS13lozTAPIb9FRCGKiDLvKcPVYQ3SKfS92kCl5bfVyIs/VRmL9CHsL5XUmNbXtKEWv5OXkCWGkJX2ZWWi3n4z/IV5kMVXWCyeWklk+90nfJjt0aEWaBLt7TWplRZGR/YeITCyfwVpacLS3tPe0FpxbROvVRNiCgYS+yUFa7IxW/56bBWSRNqR+G41FpIGElbrw8P5cVvrVYMGojY5HJ6tPuRuTic8rsB6kTIB9oSNS4la6Q5kVxwd9iE60RIu11lp3RKVOMLeQeAWH51WO84dJ1syc42v7c5GGur/l1u0pp9T1lEQvdXvgMe1bFrd8iZuhE62sMtsysYVyxS+KWdb8Iva3xsAkIj0puFpd37euCa3ckDUlZ37dusGSHfS4Coq/S98Eq8rHDtNE9FlN7lXKsboZG0JEJs/Hh02Ukq/LCXe7m7d2aaqDtSwXCK2QNmgS9jgoudGdqDLBQDipaQuk1CCKrbdzG4y4wtJ4/GkBt6t/0sYgpel/em0qgboSt4IaMORuulq8Dzeei6Ifet4LvTLeT3MtnuNBS/8QixlxZZZQnEbM0Gi9Hma9+Zo2lNBZ0STcqvmpqCEMlfF6JlbpDJ4js8o81BCEtD/t1l5i2MapV1eCQAuX6EtMGCzBPHMabHcFEb/eT3xiU2AyFODEIky2KyQDn0CiDhr4n9WI6G+hEq4s5Mx5hmM4PKNYMvrQsR3C+GEHRULvVwnWKGZeOPzTcUOfsQxgYhNNzI2qvmqPmBYPYm3Lqmsb4YQiDu+Ye0nY+/3nDvoib3D7unn4zQ/Pe9a2EUWP73anFYf3ArcO6KQ3wNhDQjgM4W4n7bJ2wpfjrC+xZvN0iCe0y6FOm5CM2n7CEV1+0ZD1Dw1Pwmd0T//BkFz001dJfL+k9IOE9NjGHeExzzN+R+PxWhdHc2ikv93ZMBMhY0JIUSEaj0vSf3IUUoNwii8cmePA4f2XtVJVnD5+cYYvtHEstWRd/3JLUvDRM05Qt7Of+csA12FXn3TNZrCJ8K1+tUka+NNqE1Q9g4++fKUQ3QJIgNIG9fYYbPdsLr6sVsV7c9qwodQ9YYf9k1CRu5LnG9734lYzCHyNor268jKxbC84OfIatkDGYAif/7nVFU5miO55IXeN9xm1UxD16kfqnzVZ5K/cxK97+lEk6eJ97s725VF9UA8U9uqXLbK8t8wRlxtVG/l2kaHZ88VcL5+WInVRW8DqwM20jJ/kIAscnTbldtgoXWT7tn2WZOijMs/0IQcaUfBBSpha3uwYfkZnmTYfmbT6Fp1A+EMBKVvh/jzt2bxU1midsHczSO+hgWopP94ebymwgxE0TovlofohKcyMQyZfpwvVisXwwhrSpkGgTsQ/or14alg16XNrNvM+c2O/qdHYcu6PnzqOCRND6JdKiAsA9hJMrMqQWEJusOJ4POfHwUI4RpEoBM9Q7VZ4MOxQR308FkznQuxfG8E8ed4ZTp52MOd4MUrgWV+mqS6s0Gu3RavXYKCDHIUNjTI4RsvLUdn/tWMig+ciVLsSy8/7CtHXHfXplsYjvc93wZfMl2tuVz7kf2QSVUTD24mGN3TDtIPglz/yOJOHx1qPzAJOTSb+hEd1VECF9ztUr1RWHUQWMckqX47q6+/BATevLFwDMo75c9xqextzB5K16A8vFgiA0GN3LXG3AhN/u1bSiORTgfV6xCIMJP3JTmDTVC5DLLFcIJRzyClomjFjiGoNnCgaJhsB24rguNjzbxiKv0CxgJHq0Gg5+QMrmQ1VK43jL+jrhKVzRO4Lr+fu+HRjiqWEdCLg0p2jXK+lBmXQkwNdQMfo6OToLJEQojwmGEYZZU5Ct0KYvu0rbk4TEbF1MP0J58l2OdODKQWUwGfYmZJdj409VyvEKEwnXJh8H3GcJx4sqD72CARYX0xkcIgYHJSPYV4hRjUkICl7hy3KLsdLhT3Ud1Ca7qtIjFN6oPI0FbjUzW9kT49IMfThESqNg3XLuvx+HQEm4koxDHiKgYQ1DoQ6+tfFicDJ4tUHc+8pVHe/bpCkDI2qA2OVJk4kMYSV7h+nKGqLoPJSgOzLqZ0oxPaQJU1maTfUB3ppcQwtCihBkDjj3FKI8J5QnGRzT4dCh1Mv4yh+f1KVFgkRW9CWO0ARoBwN9P9noKwhYOOOhJ+tDxXbWFkBjLLx63WZA0Uj89R5h6Fne5kyiEQyfLItHyKHlf6oD0Dt0QyQ2TKauS+lq4YGpmtH9LhCL8UrP15lofqvczhOQNicR+OJ35sg+dbG/3UHLpHLMkr0ar1WoEL59VnvekEZq0yZei0pBL4anrcYISxWsXpqxf+5D5OlPURCKEUSdUKEnMiUtxZAr2R9TPJvmOQ4ZvRDiFGdoZknCYgdizihV+RdgnMYJyZRvKX4BLOSVx63pwM0Boei5hhqlyMqzkIKSLCNk3bQGhtQXMYFKCzuFnPy5W+B1hAlMBDq2pReNQzq7Wbmy2Q1fNFjAkEClMNY5jb1ilVEAot5q5FKqNuY69zeHbQq31mk5zhUthkLmfrd4EOoz6zhzjhf3AslyuZnxMGsl/ZunaF5ix8K8QyvxxLo25FiXwDEF34/x4NViY8c8Q4nxIey2E6wQ+/3GVwGpTjm/B/VmkkkzOCHQUCmFPKla9+7ZlyXEGU3WA56LLv/trWDaAvmlvi/ZRXFtYlo2at3xHHrQ92cq5bXmk3OxtXFnYS2Z7lrQH9DeJ59lfYxCr4ZqUgnnkQSFuBenFZj2NQMOat1ot3fp+S32g9c1ssBzMpqd7SKDE3Cy8sx46WbBGly5Fa8fJct8BSdKGMso7OG21pjQRhgt1/dZkv9yllZvtzOJr8W5H6/azb0/bla8hj9bLqko8SdtyVgetjQ+OrOZVI5Q2hwyhqe9t6k1MZnEzU7FMdlaAtpqbmbVYJ702deFv3/FsKvstVxvqNuYpf7womTjzwwJmMFniWSZykfw/IzNEwcx9DKTDjdD/N4gmhUM4KDmjwB/+mVf774gATdPOYBDP5L6wlwCozKjmqSQ6LnPZ1fgSfah8ckUH63kZLXTzz/rrP2njv5GS9XoevNhkXebsy5fwIY+75HUEGZK5H6+XOfpu2n3uSY6VELRvQI5GsvUGgX25zP7CT9eKN4xMXKsLuQjpwGR+6eBCU+YjOnVk4bGSTvPHoUQoaCGJTb6BMDz5WiJsPETiUkeuuTA9qX+lzEWEtDfmDyk/mUpPbrn8M4sqdf5TrqXjVwqhWZj89IwuER5PEaoPs2nGvDZnPhMhvY/zVQL9IV8KSw58H2c/sayU7kM92Y3z+lkfZrugCwhZvom44vUFmhi2wvEs53NPpyofFkAK2Xi9WHxRyqD+/gfLiIPKkDT7wlKFPsQF8O4jsmCVv05ZxqUG6+7DwBI7hSHvQ7jvgTseXw+rnR/h0kubC3Vi3AQ+z6wwtFV+ttRzQzrZomPLc//go3SjxH4Ycilp9Dhs2WjFR1u2NzI1wp+2TX5I3+sdIWTooSLTXuhtqjXqs50DDfedCDdh2+gg8gQtw/GxblwRot2Ijv3xHQcEqGF1pCxVHJgh7GPYP6cyrr/F+ohQ+PAdbVyx+7LLNZeuIwGrYQfdJbxKiGbXholNzObpl68SJKLBTeZnQ5Mi5THDbnA6w+E+ErSJ7hLCNTwiJx4OY7Qrk5glLnWtyXwGy0NXniCR9WHHQnNiOtx78H641LRnUYpHbtEwWIXk/SPPlzXHjtoprO0g8eSeFpwGIwR/itAcW4Enz/TCM2IDND/JPiSV7iOUuRRzhI6hTMJDyxCVbJhRZJIRTPraoUHk3/yQp67gmcgC8wkCjdvS5teCDqI81mcIoUxPrt7RAEuJFhGhQ0YZ1sOeilnOpbj5Eff9wu1G7rFv69kItRTrzfB0JtwhR9mb0dbblk3NhXk/XcOwoYOfzhDqMtPhgZPrlBAKbyxXH9yVlmBEaKn6yvUz80W4rlDLwQbMByMr8F1DjTE8IBRPJVkS26ppsbVbR0GEB5FZlxHC3+3JgicOiiyNUPrtUK64mduOEFI+xeX2cNhuMalbyCrT5KD5y8CCJ8wxJ4IERLLmgzEPFCzJZCBwAx4aYYSHU17j0pQnGFnho9s641Kdkv8QSv1Gcyltsw45eUiNalVV0wBe8pPP/RCkiELYS0Au9NGHaMk7g2Q3eGBs01SHLZwjjBMhwsA/zLBehlD34SWEISzAQM7Bf1xQVYYQ/drWBAXexM+Y8gMGf7oN9RkOKcgJf4/yDk8cuYiQ/Fb8C4GBVMn7kFiaHMnSLaVXTwfg5Q+zm1FV8BgGKMj8q5I31eEpIGvc1Q9IcamIYDjJiIbaMFJLgzOE8IVA0WFSfCOlRyCEMlaG1Ig9y2cLrGZRcVZ1nCNIbV9GCEPHZYIFvg0NOT0yOjAA4xagzJYbFDdyjlAOOrUmBoRKp3Hl/mVMdU66g0bYTkia4c3saLNNq2NShqmaXWSlPdyb2sjU45dyBgkFoYVMOsNsIZ6Wpe4pQtATMKZDylJ1Eb6CiugrhS4zCytgmJtEgBoCsk5SpYdtiwFN/mDAOc4EvprYepQuWC9VOxFOEvv4J0KPKekrsZYiEqHJWpgG0jrEI1DWFXOSpOFu4DsAS0g/IRYnKwZt0LWMDcf4lo8KAbIueWc5N7wDd7WagSdXicJZMQZmCeFcROtP6II5IRRydZvZadbofQm5wb9HKuk8IOS7RSQjPAKZHRT6UIVHzWxa0Ai8cMURQ/CQue85MyZA+4zVKji1Qc3MgiTGo8THWNCYHWyPAgv20tZmKuMZPpWDHXF0GUPbYQ5g6AkO7D0bJA5UTdRO5gleVy0Pv/EXP7KXlQIkdWWy3+EI6lPUrzJZyL9lGWxOZxAPoSVdihDWZeGnaVYJY37jtI8Kaq/XHssyffRYyKp0samuR2MhjQe7YffcbPwS1LQ2m6d/X2jgZcu9ef1TyRs37VncoEY39UK/nfWHedbRZS76e5lGP5g3velNb3rTm970pje96U1vetOb3vSmN73pTW96U630H0uqLDri6jwiAAAAAElFTkSuQmCC',
            });
          } else {
            this.actorList.push({
              name: data['results']['name'],
              imdbID: data['results']['imdb_id'],
              photoURL: data['results']['image_url'],
            });
          }
        });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  getMoviesByID = async (id: string) => {
    await fetch(
      'https://data-imdb1.p.rapidapi.com/movie/byActor/' +
        id +
        '/?page_size=50',
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
          for (let i = 0; i < data['results'].length; i++) {
            this.getMovieInfoByID(data['results'][i][0]['imdb_id']);
          }
        });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  getMovieInfoByTitle = async () => {
    this.searched = true;
    this.movieList.length = 0;
    this.showSpinnerCommand();
    this.showMovieList = true;
    this.showActorList = false;
    let userSearch = this.searchString.trim().replace(' ', '%20'); // trims the search string and formats its it to work in the api
    let imdbTitlesList: string[] = []; // holds the list of imdb title query

    await fetch(
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
        response.json().then(async (data) => {
          if (data['Response'] == 'False') {
            this.searched = false;
            this.errorString = 'Please enter another search term';
          }

          if (data['Response'] == 'False') {
            this.showSpinnerCommand();

            alert('Movie not found!');
          } else {
            for (let step = 0; step < data['Search'].length; step++) {
              imdbTitlesList.push(data['Search'][step]['imdbID']);
              imdbTitlesList.push(data['Search'][step]['Poster']);
            }

            for (let step = 0; step < imdbTitlesList.length; step += 2) {
              let tempImdbID = imdbTitlesList[step];

              await fetch(
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
                  response.json().then((data) => {
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
                          imdb: data['imdb_id'],
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
                          imdb: data['imdb_id'],
                        });
                      }
                    }
                  });
                })
                .catch((err) => {
                  console.error(err);
                });
            }

            this.showSpinnerCommand();
          }
        });
      })

      .catch((err) => {
        console.error(err);
      });
  };

  getMovieInfoByGenre = async () => {
    this.searched = true;
    this.showSpinnerCommand();
    this.movieList.length = 0;
    this.showMovieList = true;
    this.showActorList = false;
    let userSearch =
      this.searchString.charAt(0).toUpperCase() +
      this.searchString.trim().replace(' ', '%20').slice(1); // trims the search string and formats its it to work in the api
    let tempMovieList: string[] = []; // holds the list of movies to push to the movies list

    await fetch(
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
          if (data['count'] == 0) {
            alert('Please try another genre');
          } else {
            for (let i = 0; i < 25; i++) {
              let tempID: any = tempIDsList[i];
              this.getMovieInfoByID(tempID['imdb_id']);
            }
          }
        });
      })
      .catch((err) => {
        console.error(err);
      });
    this.showSpinnerCommand();
  };

  getMovieInfoByYear = async () => {
    this.searched = true;
    this.showSpinnerCommand();
    this.movieList.length = 0;
    this.showMovieList = true;
    this.showActorList = false;
    let userSearch = this.searchString.trim().replace(' ', '%20'); // trims the search string and formats its it to work in the api
    let imdbTitlesList: string[] = []; // holds the list of imdb title query

    await fetch(
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
          if (data['count'] == 0) {
            alert('Please try another year');
          } else {
            for (let i = 0; i < 25; i++) {
              let tempID: any = tempIDsList[i];
              this.getMovieInfoByID(tempID['imdb_id']);
            }
          }
        });
      })
      .catch((err) => {
        console.error(err);
      });
    this.showSpinnerCommand();
    if (!parseInt(userSearch)) {
      alert('Please enter a valid year');
    }
  };

  getActor = async (name: string, searchType: string) => {
    await fetch(
      'https://data-imdb1.p.rapidapi.com/actor/imdb_id_byName/' + name + '/',
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

          if (data['results'].length == 0) {
            alert('Please check the actor name you entered');
          } else {
            if (searchType == 'info') {
              for (let i = 0; i < 25; i++) {
                let tempID: any = tempIDsList[i];
                this.getActorInfoByID(tempID['imdb_id']);
              }
            } else {
              for (let i = 0; i < 300; i++) {
                let tempID: any = tempIDsList[i];
                this.getMoviesByID(tempID['imdb_id']);
              }
            }
          }
        });
      })
      .catch((err) => {
        console.error(err);
      });
    this.showSpinnerCommand();
  };

  getMovieInfoByActor = () => {
    this.searched = true;
    this.showSpinnerCommand();
    this.movieList.length = 0;
    this.actorList.length = 0;
    this.showMovieList = false;
    this.showActorList = true;
    let userSearch = this.searchString.trim().replace(' ', '%20'); // trims the search string and formats its it to work in the api
    let imdbTitlesList: string[] = []; // holds the list of imdb title query
    this.getActor(userSearch, 'info');
  };

  getMoviesByActor = () => {
    this.searched = true;
    this.showSpinnerCommand();
    this.movieList.length = 0;
    this.actorList.length = 0;
    this.showMovieList = true;
    this.showActorList = false;
    let userSearch = this.searchString.trim().replace(' ', '%20'); // trims the search string and formats its it to work in the api
    let imdbTitlesList: string[] = []; // holds the list of imdb title query
    this.getActor(userSearch, 'movies');
    //this.showSpinnerCommand()
  };

  getMovieInfoByRandom = async () => {
    this.searched = true;
    this.showSpinnerCommand();
    this.movieList.length = 0;
    this.showMovieList = true;
    this.showActorList = false;
    let imdbTitlesList: string[] = []; // holds the list of imdb title query
    let randomNum: number = Math.floor(Math.random() * 5000);

    await fetch(
      'https://movies-tvshows-data-imdb.p.rapidapi.com/?type=get-random-movies&page=' +
        randomNum,
      {
        method: 'GET',
        headers: {
          'x-rapidapi-host': 'movies-tvshows-data-imdb.p.rapidapi.com',
          'x-rapidapi-key':
            '59f319ed21mshc043b55f9c79b2bp1d5cd6jsn1c0044c0405a',
        },
      }
    )
      .then((response) => {
        response.json().then((data) => {
          let tempIDsList: string[] = [];
          tempIDsList = data['movie_results'];

          for (let i = 0; i < data['movie_results'].length; i++) {
            let tempID: any = tempIDsList[i];
            this.getMovieInfoByID(tempID['imdb_id']);
          }
        });
      })
      .catch((err) => {
        console.error(err);
      });

    this.showSpinnerCommand();
  };

  addToWatchLater = async (imdbID: string) => {
    await this.watchlistService.addToWatchlist(imdbID);
  };

  showAddedMoviePopup = async (movieTitle: string) => {
    this.popupMovieTitle = movieTitle;
    let addedMoviePopup = document.getElementById('addedMoviePopup');

    if (addedMoviePopup) {
      //fade in
       for (let i = 0; i <= 1; i += 0.01) {
        i = Math.round(i * 100) / 100;
        setTimeout( function () {
          (addedMoviePopup as HTMLFormElement).style.opacity = i.toString();
        }, i * 1000);
      }

      setTimeout(function () {
        //fade out
        (addedMoviePopup as HTMLFormElement).style.opacity = '1';
      for (let i = 1; i > 0; i += -0.01) {

         setTimeout( function () {
          (addedMoviePopup as HTMLFormElement).style.opacity = (1 - i).toString();


        }, i * 1000);
      }
      },3000)

    }
  };

  openMovieDetailsModal = (imdbID: string) => {
    //For Raymond: imdbID is the imdb id for the modal
    console.log(imdbID);
  };

  constructor(
    public matDialog: MatDialog,
    private actorAPIService: ActorAPIService,
    private watchlistService: WatchlistService,
  ) {}

  ngOnInit(): void {
    //this.movieList.subscribe(() => this.showSpinner = false)
  }
}
