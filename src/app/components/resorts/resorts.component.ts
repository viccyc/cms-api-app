import { Component, OnInit } from '@angular/core';
import { ResortService } from '../../services/resorts/resort.service';

@Component({
  selector: 'app-resorts',
  templateUrl: './resorts.component.html',
  styleUrls: ['./resorts.component.css']
})
export class ResortsComponent implements OnInit {

  resorts: any;
  public show: boolean = false;
  resortName: string;
  resortAddr: string;
  resortCity: string;
  resortCountry: string;
  resortPhone: string;
  resortCount = 0;
  isNextDisabled: boolean = false;
  isPrevDisabled: boolean = true;

  constructor(private resortService: ResortService) { }

  ngOnInit() {
  }

  getResorts() {
    this.show = !this.show;
    this.resortService.getResorts()
      .subscribe(resorts => {
        this.resorts = resorts;
        this.getNextResort();
      });
  }

  getNextResort() {
    if (this.resorts.data.length > this.resortCount) {
      this.updateResortData();
      this.resortCount++;
      if (this.resorts.data.length === this.resortCount) {
        this.isNextDisabled = true;
        this.isPrevDisabled = false;
        this.resortCount--;
      }
    }
  }

  getPrevResort() {
    if (this.resorts.data.length >= this.resortCount) {
      this.resortCount = this.resortCount - 1;
      this.updateResortData();
      if (this.resortCount === 0) {
        this.isNextDisabled = false;
        this.isPrevDisabled = true;
        this.resortCount++;
      }
    }
  }

  updateResortData() {
    this.resortName = this.resorts.data[this.resortCount].resort_name;
    this.resortAddr = this.resorts.data[this.resortCount].resort_address;
    this.resortCity = this.resorts.data[this.resortCount].resort_city;
    this.resortCountry = this.resorts.data[this.resortCount].resort_country;
    this.resortPhone = this.resorts.data[this.resortCount].resort_phone;
  }

}
