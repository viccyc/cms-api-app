import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

interface JSONObject {
  _id: string;
  kioskName: string;
}

@Injectable({
  providedIn: 'root'
})
export class KioskService {

  constructor(private http: HttpClient) {
    this.getKiosks();
  }

  // let headers = new Headers();
  // headers.append('authentication', 'Bearer 4567xyz');


  apiUrl = 'http://directus.vcg/_/items/kiosks';

  getKiosks() {
    const headers = new HttpHeaders()
      .set('Authorization', 'Bearer 4567xyz');
    return this.http.get<JSONObject>(this.apiUrl, {headers});
  }
}

