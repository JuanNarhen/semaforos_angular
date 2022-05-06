import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { StoplightsService } from 'app/shared/services/stoplights.service';


@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})

export class PageComponent {

  raspberryUrl: any = "";
  initId: any = "";
  stopId: any = "";
  warningId: any = "";
  warningState: any = "";
  freqId: any = "";
  newFreq: any = "";

  constructor(private _stoplightService: StoplightsService) {
  }

  setServiceUrl() {
    StoplightsService.raspberryUrl = this.raspberryUrl;
  }

  start() {
    this._stoplightService.start();
  }

  init() {
    this._stoplightService.init(this.initId);
  }

  stopOne() {
    this._stoplightService.stopOne(this.stopId);
  }

  changeWarning() {
    var request = {
      id: this.warningId,
      state: this.warningState
    };

    this._stoplightService.changeWarning(request);
  }

  changeFreq() {
    var request = {
      id: this.freqId,
      newClock: this.newFreq
    };

    this._stoplightService.changeFreq(request);
  }

}
