import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

interface JSONObject {
  _id: string;
  resortName: string;
  resortAddress: string;
  resortCity: string;
  resortCountry: string;
  resortPhone: number;
}

@Injectable({
  providedIn: 'root'
})

export class ResortService {

  constructor(private http: HttpClient) {
    this.getResorts();
  }

  // let headers = new Headers();
  // headers.append('authentication', 'Bearer 4567xyz');


  apiUrl = 'http://directus.vcg/_/items/ski_resorts';

  getResorts() {
      const headers = new HttpHeaders()
        .set('Authorization', 'Bearer 4567xyz');
      return this.http.get<JSONObject>(this.apiUrl, {headers});
    }
  }
