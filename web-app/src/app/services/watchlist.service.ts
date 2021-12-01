import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class WatchlistService {

  private baseUrl = environment.watchlistUrl;

  constructor(
    private httpClient: HttpClient,
    private authService: AuthService,
  ) { }

  async getWatchlist(): Promise<string[]> {
    const email = await this.authService.getCurUserEmail();
    return this.httpClient.get<string[]>(this.baseUrl, {
      params: new HttpParams({
        fromObject: {
          email
        }
      })
    }).toPromise().then((data: any) => {
      return data.watchlist;
    });
  }

  async addToWatchlist(movieId: string): Promise<string[]> {
    const email = await this.authService.getCurUserEmail();
    return this.httpClient.post<any>(this.baseUrl, { }, {
      headers: new HttpHeaders({
        email,
        movieId
      })
    }).toPromise();
  }

  async removeFromWatchlist(movieId: string): Promise<string[]> {
    const email = await this.authService.getCurUserEmail();
    return this.httpClient.delete<string[]>(this.baseUrl, {
      params: new HttpParams({
        fromObject: {
          email,
          movieId
        }
      })
    }).toPromise();
  }

}
