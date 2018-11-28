import { Component, OnInit } from '@angular/core';
import { ResortService } from '../../services/resort.service';
import {Observable, Subject} from 'rxjs';
import {getNextLNode} from '@angular/core/src/render3/node_manipulation';

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
        console.log('this.resorts: ', this.resorts.data);
        this.getNextResort();
      });
  }

  getNextResort() {
    if (this.resorts.data.length > this.resortCount) {
      this.resortName = this.resorts.data[this.resortCount].resort_name;
      this.resortAddr = this.resorts.data[this.resortCount].resort_address;
      this.resortCity = this.resorts.data[this.resortCount].resort_city;
      this.resortCountry = this.resorts.data[this.resortCount].resort_country;
      this.resortPhone = this.resorts.data[this.resortCount].resort_phone;
      this.resortCount++;
      if (this.resorts.data.length === this.resortCount) {
        this.isNextDisabled = true;
        this.isPrevDisabled = false;
        this.resortCount--;
      }
    }
  }

  getPrevResort() {
    console.log('this.resorts.data.length: ', this.resorts.data.length);
    console.log('this.resortCount: ', this.resortCount);

    if (this.resorts.data.length >= this.resortCount) {
      this.resortCount = this.resortCount - 1;
      this.resortName = this.resorts.data[this.resortCount].resort_name;
      this.resortAddr = this.resorts.data[this.resortCount].resort_address;
      this.resortCity = this.resorts.data[this.resortCount].resort_city;
      this.resortCountry = this.resorts.data[this.resortCount].resort_country;
      this.resortPhone = this.resorts.data[this.resortCount].resort_phone;
      if (this.resortCount === 0) {
        this.isNextDisabled = false;
        this.isPrevDisabled = true;
        this.resortCount++;
      }
    }
  }

}
