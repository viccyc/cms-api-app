import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError} from 'rxjs/operators';

interface JSONObject {
  _id: string;
  kioskName: string;
}

const headers = new HttpHeaders()
  .set('Authorization', 'Bearer 4567xyz');

@Injectable({
  providedIn: 'root'
})
export class KioskService {

  constructor(private http: HttpClient) {
    this.getKiosks();
  }

  apiUrl = 'http://directus.vcg/_/items/kiosks';

  getKiosks() {
    return this.http.get<JSONObject>(this.apiUrl, {headers});
  }

  addKiosk(kioskName) {
    const kioskNameJson = {"kiosk_name": kioskName};
    return this.http.post<JSONObject>(this.apiUrl, kioskNameJson, {headers});
  }
}

