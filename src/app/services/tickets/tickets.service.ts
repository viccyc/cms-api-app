import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


interface JSONObject {
  _id: string;
  ticketName: string;
}

const headers = new HttpHeaders()
  .set('Authorization', 'Bearer 4567xyz');

@Injectable({
  providedIn: 'root'
})
export class TicketsService {

  constructor(private http: HttpClient) {
    this.getTickets();
  }

  apiUrl = 'http://directus.vcg/_/items/tickets';

  getTickets() {
    return this.http.get<JSONObject>(this.apiUrl, {headers});
  }

  purchaseTickets() {
    // const charge = stripe.charges.create({
    //   amount: 999,
    //   currency: 'usd',
    //   source: 'tok_visa',
    //   receipt_email: 'viccyc@hotmail.com',
    // });

    // console.log('charge: ', charge);
  }
}
