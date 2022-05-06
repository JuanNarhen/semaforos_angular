import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoplightsService {

  static raspberryUrl: string = "";

  constructor(private _httpClient: HttpClient) {
  }

  private logResponse(info) {
    console.log(info);
  }

  start() {
    this._httpClient.get(`${StoplightsService.raspberryUrl}/start`).subscribe(
      data => this.logResponse(data),
      error => this.logResponse(error)
    );
  }

  init(id) {
    this._httpClient.get(`${StoplightsService.raspberryUrl}/init/${id}`).subscribe(
      data => this.logResponse(data),
      error => this.logResponse(error)
    );
  }

  stopOne(id) {
    this._httpClient.get(`${StoplightsService.raspberryUrl}/stop/${id}`).subscribe(
      data => this.logResponse(data),
      error => this.logResponse(error)
    );
  }

  changeWarning(request) {
    this._httpClient.post(`${StoplightsService.raspberryUrl}/warning`, request).subscribe(
      data => this.logResponse(data),
      error => this.logResponse(error)
    );
  }

  changeFreq(request) {
    this._httpClient.post(`${StoplightsService.raspberryUrl}/changefreq`, request).subscribe(
      data => this.logResponse(data),
      error => this.logResponse(error)
    );
  }
}
