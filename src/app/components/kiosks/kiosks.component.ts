import { Component, OnInit } from '@angular/core';
import {KioskService} from '../../services/kiosks/kiosk.service';

@Component({
  selector: 'app-kiosks',
  templateUrl: './kiosks.component.html',
  styleUrls: ['./kiosks.component.css']
})
export class KiosksComponent implements OnInit {

  kiosks: any;
  public show: boolean = false;
  public newKiosk: boolean = false;
  kioskName: string;
  kioskCount = 0;
  isNextDisabled: boolean = false;
  isPrevDisabled: boolean = true;
  result: any;

  constructor(private kioskService: KioskService) { }

  ngOnInit() {
  }

  getKiosks() {
    this.show = !this.show;
    this.kioskService.getKiosks()
      .subscribe(kiosks => {
        this.kiosks = kiosks;
        this.getNextKiosk();
      });
  }

  getNextKiosk() {
    if (this.kiosks.data.length > this.kioskCount) {
      this.updateKioskData();
      this.kioskCount++;
      if (this.kiosks.data.length === this.kioskCount) {
        this.isNextDisabled = true;
        this.isPrevDisabled = false;
        this.kioskCount--;
      }
    }
  }

  getPrevKiosk() {
    if (this.kiosks.data.length >= this.kioskCount) {
      this.kioskCount = this.kioskCount - 1;
      this.updateKioskData();
      if (this.kioskCount === 0) {
        this.isNextDisabled = false;
        this.isPrevDisabled = true;
        this.kioskCount++;
      }
    }
  }

  updateKioskData() {
    this.kioskName = this.kiosks.data[this.kioskCount].kiosk_name;
  }

  addKiosk() {
    this.newKiosk = !this.newKiosk;
  }

  addNewKiosk(kioskName) {
    this.kioskService.addKiosk(kioskName)
      .subscribe(result => {
        this.result = result;
        console.log('result: ', result);
      });
  }
}

