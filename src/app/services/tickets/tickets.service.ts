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
    const handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_txJbZH4ucp67IJiIvkyzixCh',
      locale: 'auto',
      token: function (token: any) {
        // You can access the token ID with `token.id`.
        // Get the token ID to your server-side code for use.
        console.log('handler token: ', token);
      }
    });


    handler.open({
      name: 'TixHelp',
      description: 'Ticket Purchase',
      amount: 6000,
      currency: 'cad'
    });

  }
}
