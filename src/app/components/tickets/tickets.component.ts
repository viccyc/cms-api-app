import {
  Component,
  OnInit,
  AfterViewInit,
  OnDestroy,
  ViewChild,
  ElementRef,
  ChangeDetectorRef } from '@angular/core';
import { TicketsService } from '../../services/tickets/tickets.service';
// import { NgForm } from '@angular/forms';
// import * as Stripe from 'stripe';
// const stripe = new Stripe('pk_test_txJbZH4ucp67IJiIvkyzixCh');
// const elements = stripe.elements();

// const customer: Promise<Stripe.customers.ICustomer> = stripe.customers.create(/* ... */);
// ```

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {
  // export class TicketsComponent implements OnInit, AfterViewInit, OnDestroy {

  // @ViewChild('cardInfo') cardInfo: ElementRef;
  // card: any;
  // cardHandler = this.onChange.bind(this);
  // error: string;
  // const stripe = Stripe('pk_test_txJbZH4ucp67IJiIvkyzixCh'); // use your test publishable key
  // console.log('stripe: ', stripe);

  // TODO: figure this Stripe script location out - currently in angular.json??

  public tickets: any[];
  public cacheTickets: any[];
  public ticketNames: any;
  public show: boolean = false;
  public buy: boolean = false;

  constructor(private ticketService: TicketsService) {
    // constructor(private ticketService: TicketsService, private changeDetector: ChangeDetectorRef) {
    this.ticketService.getTickets()
      .subscribe(tickets => {
        this.tickets = tickets.data;
        this.cacheTickets = this.tickets;
        this.ticketNames = this.tickets;
      }, error => console.error());
  }

  ngOnInit() {
  }

  // ngAfterViewInit() {
  //   this.card = elements.create('card');
  //   this.card.mount(this.cardInfo.nativeElement);
  //
  //   this.card.addEventListener('change', this.cardHandler);
  // }
  //
  // ngOnDestroy() {
  //   this.card.removeEventListener('change', this.cardHandler);
  //   this.card.destroy();
  // }
  //
  // onChange({ error }) {
  //   if (error) {
  //     this.error = error.message;
  //   } else {
  //     this.error = null;
  //   }
  //   this.changeDetector.detectChanges();
  // }

  // async onSubmit(form: NgForm) {
  //   const { token, error } = await stripe.createToken(this.card);
  //
  //   if (error) {
  //     console.log('Something is wrong: ', error);
  //   } else {
  //     console.log('Success! ', token);
  //   }
  // }

  getTickets(filterVal: any) {
    this.show = true;
    if (filterVal === '0') {
      this.tickets = this.cacheTickets;
    } else {
      this.tickets = this.cacheTickets.filter((item) => item.ticketName === filterVal);
    }
  }

  purchaseTickets() {
    // this.ticketService.purchaseTickets();
    // this.buy = true;
    console.log('in purchaseTickets()');

    const handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_txJbZH4ucp67IJiIvkyzixCh',
      locale: 'auto',
      token: function (token: any) {
        // You can access the token ID with `token.id`.
        // Get the token ID to your server-side code for use.
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
